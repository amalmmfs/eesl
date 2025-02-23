import { NextResponse } from "next/server";
import { Resend } from "resend";
import ApplicationEmail from "../../../../emails/application";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  prefix: "application_form", // 5 requests per 60 seconds
  analytics: true,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const education = formData.get("education");
  const role = formData.get("role");
  const resume = formData.get("resume") as File;

  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

  try {
    const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          message: "Rate limit exceeded",
          resetIn: reset,
          retryAfter: Math.ceil((reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }
  } catch (error) {
    console.error("Rate limiting error:", error);
    return NextResponse.json(
      {
        message: "Too many requests, please try again later",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 429,
      }
    );
  }

  if (!name || !email || !phone || !education || !role || !resume) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: `${formData.get("name")} <onboarding@resend.dev>`,
      replyTo: formData.get("email") as string,
      to: [`eeslcareers@gmail.com`],
      subject: `New Application for ${formData.get("role")} Position`,
      react: ApplicationEmail({
        name: formData.get("name") as string,
        role: formData.get("role") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
      }),
      attachments: [
        {
          filename: (formData.get("resume") as File).name,
          content: Buffer.from(
            await (formData.get("resume") as File).arrayBuffer()
          ),
        },
      ],
    });
    console.log("Email sent successfully:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error });
  }
}
