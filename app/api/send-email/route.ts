import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: { name, email, phone, subject, message } },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVING_EMAIL || 'codegenius.inc@gmail.com',
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #FFFFFF;
              margin: 0;
              padding: 0;
              color: #333333;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #FFFFFF;
              border: 1px solid #E5E7EB;
              border-radius: 4px;
            }
            .header {
              background-color: #FFFFFF;
              padding: 20px;
              border-bottom: 2px solid #00A63E;
              text-align: left;
            }
            .header h1 {
              margin: 0;
              font-size: 20px;
              font-weight: 600;
              color: #333333;
            }
            .content {
              padding: 20px;
              font-size: 14px;
              line-height: 1.5;
            }
            .content p {
              margin: 10px 0;
            }
            .content strong {
              color: #00A63E;
              font-weight: 600;
            }
            .separator {
              border: 0;
              border-top: 1px solid #E5E7EB;
              margin: 15px 0;
            }
            .footer {
              text-align: center;
              padding: 15px;
              background-color: #F9FAFB;
              color: #6B7280;
              font-size: 12px;
              border-top: 1px solid #E5E7EB;
            }
            @media (max-width: 600px) {
              .container {
                margin: 10px;
                width: calc(100% - 20px);
              }
              .header h1 {
                font-size: 18px;
              }
              .content {
                padding: 15px;
                font-size: 13px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission - jinnahexpert.com</h1>
            </div>
            <div class="content">
              <div class="separator"></div>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong> ${message}</p>
              <div class="separator"></div>
            </div>
            <div class="footer">
              This email was sent from <a href="https://jinnahexpert.com" style="color: #00A63E; text-decoration: none;">jinnahexpert.com</a>. For inquiries, contact us at <a href="mailto:care@jinnahexpert.com" style="color: #00A63E; text-decoration: none;">care@jinnahexpert.com</a>.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}