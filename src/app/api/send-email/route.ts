import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validations/contact';
import { ZodError } from 'zod';
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit';

// Cache for email transporter (reuse connection)
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      pool: true, // Use pooled connections
      maxConnections: 5,
      maxMessages: 100,
    });
  }
  return transporter;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 3 emails per 5 minutes per IP
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, {
      maxRequests: 3,
      windowMs: 5 * 60 * 1000, // 5 minutes
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }
    const body = await request.json();

    // Validate input with Zod
    const validatedData = contactFormSchema.parse(body);
    const { name, email, message } = validatedData;

    // Additional security checks
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Get cached transporter
    const emailTransporter = getTransporter();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'khushwantzx@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D84880;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 2px solid #ddd; border-radius: 10px;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #C4DB5D; border-radius: 5px;">
            <p style="margin: 0; color: #000;">Reply to: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email with timeout
    const emailPromise = emailTransporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    );

    await Promise.race([emailPromise, timeoutPromise]);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Log error for monitoring
    console.error('Email sending error:', error);

    // Don't expose internal errors to client
    const errorMessage = error instanceof Error && error.message === 'Email timeout'
      ? 'Request timeout. Please try again.'
      : 'Failed to send email. Please try again later.';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'email',
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
