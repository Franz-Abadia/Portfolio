// app/actions.ts
"use server";

import { Resend } from 'resend';

// ⚠️ REPLACE 're_xxxxxxxxx' with your real API key
const resend = new Resend('re_xxxxxxxxx');

export async function sendEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use this while testing, later change to your verified domain
      to: 'kiritofrancis21@gmail.com', // Where you want to receive the emails
      subject: `Portfolio enquiry from ${formData.firstName} ${formData.lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
}