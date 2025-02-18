import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


export async function POST(req: Request) {
  
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const education = formData.get("education");
    const role = formData.get("role");
    const resume = formData.get("resume") as File;

    

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEPIENT_EMAIL,
      subject: `New Application for ${role} Position`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
            <img src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png" alt="EESL Logo" style="height: 60px;" />
            <img src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/TCG-RISE.png" alt="TCG RISE Logo" style="height: 60px;" />
          </div>
          
          <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; margin-bottom: 30px;">
            <h2 style="color: #2b3674; margin: 0 0 20px 0; font-size: 24px; text-align: center;">New Application Received</h2>
            <p style="color: #2b3674; font-size: 18px; margin-bottom: 15px;"><strong>Position Applied For:</strong> ${role}</p>
          </div>

          <div style="background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h3 style="color: #2b3674; margin: 0 0 20px 0; font-size: 20px;">Applicant Details</h3>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #2b3674; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="color: #2b3674; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #2b3674; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="color: #2b3674; margin: 5px 0;"><strong>Education:</strong> ${education}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
            <p style="color: #6c757d; margin: 0;">This is an automated email from the EESL Application System</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
        },
      ],
    };


try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    );
  }
}