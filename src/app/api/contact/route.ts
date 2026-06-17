import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { childName, childAge, email, phone, rating, goal } = data;

    if (!childName || !childAge || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log(`[Contact] New demo request: ${childName}, Age ${childAge}, Phone: ${phone}, Email: ${email}`);

    // Email via Resend
    let emailSent = false;
    let emailError = null;

    if (!process.env.RESEND_API_KEY) {
      console.warn('[Contact] RESEND_API_KEY is not set — skipping email');
      emailError = 'RESEND_API_KEY not configured';
    } else {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        const result = await resend.emails.send({
          from: 'Shinigami Chess Academy <onboarding@resend.dev>',
          to: ['arindamyapps@gmail.com'],
          replyTo: email,
          subject: `New Demo Booking: ${childName}, Age ${childAge} | ${phone}`,
          text: `New demo booking\n\nChild: ${childName}\nAge: ${childAge}\nPhone: ${phone}\nEmail: ${email}\nRating: ${rating || 'Beginner'}\nGoal: ${goal || 'Not specified'}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f9fa;padding:20px;border-radius:8px;">
              <div style="background:#0F172A;padding:24px;border-radius:8px;margin-bottom:20px;text-align:center;">
                <h1 style="color:#EDBE52;margin:0;font-size:22px;">♟️ Shinigami Chess Academy</h1>
                <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">New Free Demo Booking</p>
              </div>
              <div style="background:white;padding:24px;border-radius:8px;border:1px solid #e2e8f0;">
                <h2 style="color:#1E293B;margin:0 0 16px;font-size:16px;border-bottom:2px solid #EDBE52;padding-bottom:10px;">
                  Student Details
                </h2>
                <table style="width:100%;border-collapse:collapse;">
                  <tr style="background:#f8f9fa;">
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;width:40%;">Child Name</td>
                    <td style="padding:12px;color:#1E293B;font-size:14px;font-weight:600;">${childName}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;">Child Age</td>
                    <td style="padding:12px;color:#1E293B;font-size:14px;">${childAge} years</td>
                  </tr>
                  <tr style="background:#f8f9fa;">
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;">Email</td>
                    <td style="padding:12px;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;">Phone</td>
                    <td style="padding:12px;"><a href="tel:${phone}" style="color:#3b82f6;font-size:15px;font-weight:700;">${phone}</a></td>
                  </tr>
                  <tr style="background:#f8f9fa;">
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;">Chess Rating</td>
                    <td style="padding:12px;color:#1E293B;font-size:14px;">${rating || 'Beginner / Not rated'}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:700;color:#64748b;font-size:13px;">Goal</td>
                    <td style="padding:12px;color:#1E293B;font-size:14px;">${goal || 'Not specified'}</td>
                  </tr>
                </table>
                <div style="margin-top:20px;padding:16px;background:#EDBE52;border-radius:8px;text-align:center;">
                  <p style="margin:0;font-weight:700;color:#0F172A;font-size:14px;">
                    📞 Call or WhatsApp: <a href="https://wa.me/919340718544" style="color:#0F172A;">${phone}</a>
                  </p>
                </div>
              </div>
            </div>`,
        });

        if (result.error) {
          emailError = result.error.message;
          console.error('[Contact] Resend error:', result.error);
        } else {
          emailSent = true;
          console.log('[Contact] Email sent successfully, ID:', result.data?.id);
        }
      } catch (err: any) {
        emailError = err.message;
        console.error('[Contact] Email exception:', err.message);
      }
    }

    return NextResponse.json({ success: true, emailSent, emailError });
  } catch (error: any) {
    console.error('[Contact] API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
