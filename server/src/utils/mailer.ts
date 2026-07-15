import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env["SMTP_HOST"],
  port: Number(process.env["SMTP_PORT"]) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env["SMTP_USER"],
    pass: process.env["SMTP_PASS"],
  },
});

export const sendAdminNotification = async (
  name: string,
  email: string,
  service: string,
  message: string,
) => {
  if (!process.env["SMTP_USER"] || !process.env["SMTP_PASS"]) {
    console.warn("SMTP credentials not provided. Skipping email notification.");
    return;
  }

  const mailOptions = {
    from: `"SMW Website" <${process.env["SMTP_USER"]}>`,
    to: process.env["SMTP_USER"],
    subject: `New Inquiry from ${name} - ${service}`,
    text: `You have received a new inquiry.\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    html: `
      <h3>New Inquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email notification sent for inquiry from ${email}`);
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};
