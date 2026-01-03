import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MIN_SUBMISSION_TIME_MS = 3000; // Minimum 3 seconds to fill the form

// Detect gibberish text (random strings without spaces, high consonant density)
function isGibberish(text: string): boolean {
  if (!text || text.length < 3) return false;

  // Check if text has no spaces but is longer than a typical single word
  const hasNoSpaces = !text.includes(' ');
  const isTooLongForSingleWord = text.length > 15;

  // Check vowel ratio (gibberish tends to have abnormal ratios)
  const vowels = text.toLowerCase().match(/[aeiou]/g)?.length || 0;
  const vowelRatio = vowels / (text.length || 1);

  // Normal English has ~40% vowels; gibberish often has much less
  const hasAbnormalVowelRatio = vowelRatio < 0.15 || vowelRatio > 0.7;

  // Check for repeating patterns or random-looking character sequences
  const hasUppercaseInMiddle = /[a-z][A-Z]/.test(text);

  // Combination of signals suggests gibberish
  if (hasNoSpaces && isTooLongForSingleWord) return true;
  if (hasAbnormalVowelRatio && text.length > 10) return true;
  if (hasUppercaseInMiddle && hasNoSpaces && text.length > 12) return true;

  return false;
}

// Check if content looks like spam
function isSpamContent(name: string, subject: string, message: string): boolean {
  // Check each field for gibberish
  if (isGibberish(name)) return true;
  if (isGibberish(subject)) return true;
  if (isGibberish(message)) return true;

  // Check if all fields look suspiciously similar (same length, same pattern)
  const allSimilarLength =
    Math.abs(name.length - subject.length) < 5 &&
    Math.abs(subject.length - message.length) < 10 &&
    name.length > 15;

  if (allSimilarLength && !name.includes(' ') && !subject.includes(' ')) {
    return true;
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website, formLoadedAt } = body;

    // Spam check 1: Honeypot field should be empty
    if (website) {
      // Silently reject - don't reveal this is spam detection
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Spam check 2: Form should take at least a few seconds to fill
    if (formLoadedAt) {
      const timeToSubmit = Date.now() - formLoadedAt;
      if (timeToSubmit < MIN_SUBMISSION_TIME_MS) {
        // Silently reject - submission too fast (likely a bot)
        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        );
      }
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Spam check 3: Content-based gibberish detection
    if (isSpamContent(name, subject, message)) {
      // Silently reject - content looks like spam
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Blulyne Contact Form <onboarding@resend.dev>',
      to: ['ben@blulyne.com'],
      subject: `Contact Form: ${subject}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
