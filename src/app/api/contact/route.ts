import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service
// For Gmail: Use "App Password" - https://support.google.com/accounts/answer/185833
// For other services: Update the transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Contact form submission:', { name, email, message })
      return NextResponse.json({
        success: true,
        message: 'Your message has been received. I will get back to you soon!',
      })
    }

    // Send email to your inbox
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      replyTo: email,
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to visitor
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'I received your message - Julius Ian Corpuz',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Julius Ian Corpuz</p>
      `,
    }

    await transporter.sendMail(confirmationEmail)

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent! I will get back to you soon!',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
