import { NextResponse } from "next/server";
import { Resend } from "resend";
import ApplicationEmail from "../../../../emails/application";
// import { render } from "@react-email/render"
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const education = formData.get("education");
  const role = formData.get("role");
  const resume = formData.get("resume") as File;

  if (!name || !email || !phone || !education || !role || !resume) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: `${formData.get("name")} <onboarding@resend.dev>`,
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
