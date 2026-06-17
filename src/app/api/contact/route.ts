import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { childName, childAge, email, phone, rating, goal } = data;

    // Basic Input Validation
    if (!childName || !childAge || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email Configuration using Resend
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      const { data: resendData, error: resendError } = await resend.emails.send({
        from: 'Shinigami Squares <onboarding@resend.dev>', // Use a verified domain in production
        to: 'arindamyapps@gmail.com',
        subject: `New Demo Request — ${childName} (Age ${childAge})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1E293B; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Demo Booking</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Child's Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${childName}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Child's Age:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${childAge}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Email Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${email}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Phone Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${phone}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Chess Rating:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${rating || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;"><strong>Primary Goal:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E2E8F0;">${goal || 'Not specified'}</td></tr>
            </table>
          </div>
        `,
      });

      if (resendError) {
        console.error("Resend Error:", resendError);
      } else {
        emailSent = true;
      }
    } else {
      console.warn("RESEND_API_KEY missing. Email notification skipped.");
    }

    // SMS Configuration
    let smsSent = false;
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM_NUMBER) {
      try {
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        await client.messages.create({
          body: `Shinigami Chess: New demo request for ${childName} (Age ${childAge}). Phone: ${phone}. Goal: ${goal ? goal.substring(0, 40) + '...' : 'Not specified'}`,
          from: process.env.TWILIO_FROM_NUMBER,
          to: '+919340718544'
        });
        smsSent = true;
      } catch (smsError: any) {
        console.warn('SMS failed (non-fatal):', smsError.message);
      }
    } else {
      console.warn("Twilio credentials missing. SMS notification skipped.");
    }

    return NextResponse.json({ success: true, emailSent, smsSent });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
