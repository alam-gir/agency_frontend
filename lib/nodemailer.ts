import nodemailer from "nodemailer";

interface ISendEmail {
  to: string;
  subject: string;
  html: string;
}
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ to, subject, html }: ISendEmail) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: html,
  });
  return info;
};

export const simpleHtmlOfVerificaitonToken = (token: string, baseUrl: string) =>
  `<h1>Verify your email</h1>
    <p>Click the link below to verify your email</p>
    <a href="${baseUrl}/auth/verify-email?token=${token}">Verify Email</a>

    <p>If you did not request this, please ignore this email</p>`;
