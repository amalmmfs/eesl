/**
 * Handles the submission of a job application form.
 *
 * This function is an API route handler that processes the form data submitted by a user and sends an email with the application details to a configured email address.
 *
 * @param req - The incoming HTTP request object.
 * @returns A JSON response indicating the success or failure of the application submission.
 */

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

    if (
      !name ||
      !email ||
      !phone ||
      !education ||
      !role ||
      !resume
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email as string,
      to: "eeslcareers@gmail.com",
      subject: `New Application for ${role} Position`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 30px; font-family: 'Arial', sans-serif; background-color: #1a1a1a; color: #ffffff; border-radius: 12px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png" alt="EESL Logo" style="height: 60px; margin-bottom: 20px;">
      <h2 style="color: #60a5fa; font-size: 24px; margin: 0;">New Application Received</h2>
    </div>
    

    <div style="background: #2d2d2d; padding: 25px; border-radius: 8px;">
      <h3 style="color: #60a5fa; margin: 0 0 20px 0;">Applicant Information</h3>
      
      <div style="margin-bottom: 15px;">
        <p style="color: #9ca3af; margin: 0 0 5px 0;">Full Name</p>
        <p style="color: #ffffff; margin: 0; font-size: 16px;">${formData.get('name')}</p>
      </div>
      
      <div style="margin-bottom: 15px;">
        <p style="color: #9ca3af; margin: 0 0 5px 0;">Email Address</p>
        <p style="color: #ffffff; margin: 0; font-size: 16px;">${formData.get('email')}</p>
      </div>
      
      <div style="margin-bottom: 15px;">
        <p style="color: #9ca3af; margin: 0 0 5px 0;">Phone Number</p>
        <p style="color: #ffffff; margin: 0; font-size: 16px;">${formData.get('phone')}</p>
      </div>
    </div>

    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #404040;">
      <p style="color: #9ca3af; margin: 0; font-size: 14px;">EESL Recruitment Team</p>
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