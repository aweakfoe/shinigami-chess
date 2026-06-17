import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { childName, childAge, email, phone, rating, goal } = data;

    if (!childName || !childAge || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email via Resend (only if API key is set)
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error: resendError } = await resend.emails.send({
          from: 'Shinigami Chess <onboarding@resend.dev>',
          to: 'arindamyapps@gmail.com',
          subject: `New Demo Request - ${childName} (Age ${childAge})`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
              <h2 style="color:#1E293B;border-bottom:2px solid #D4AF37;padding-bottom:10px;">New Demo Booking</h2>
              <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Child Name:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${childName}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Child Age:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${childAge}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Email:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${email}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Phone:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${phone}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Rating:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${rating || 'N/A'}</td></tr>
                <tr><td style="padding:10px;border-bottom:1px solid #E2E8F0;"><strong>Goal:</strong></td><td style="padding:10px;border-bottom:1px solid #E2E8F0;">${goal || 'Not specified'}</td></tr>
              </table>
            </div>`,
        });
        if (resendError) {
          console.error('Resend Error:', resendError);
        } else {
          emailSent = true;
        }
      } catch (emailError: any) {
        console.warn('Email failed (non-fatal):', emailError.message);
      }
    }

    // SMS via Twilio (only if credentials are set)
    let smsSent = false;
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM_NUMBER) {
      try {
        const twilio = (await import('twilio')).default;
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        await client.messages.create({
          body: `Shinigami Chess: New demo for ${childName} (Age ${childAge}). Phone: ${phone}. Goal: ${goal ? goal.substring(0, 40) + '...' : 'Not specified'}`,
          from: process.env.TWILIO_FROM_NUMBER,
          to: '+919340718544',
        });
        smsSent = true;
      } catch (smsError: any) {
        console.warn('SMS failed (non-fatal):', smsError.message);
      }
    }

    return NextResponse.json({ success: true, emailSent, smsSent });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
