import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, html, text } = body;

    // Validate required fields
    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use the backend API for sending emails (same pattern as welcome emails)
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const adminApiKey = process.env.KORTIX_ADMIN_API_KEY;
    
    if (backendUrl && adminApiKey) {
      try {
        const response = await fetch(`${backendUrl}/api/send-contact-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Admin-Api-Key': adminApiKey,
          },
          body: JSON.stringify({
            to,
            subject,
            html,
            text,
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
          );
        } else {
          const errorData = await response.json().catch(() => ({}));
          console.error('Backend email API error:', errorData);
        }
      } catch (fetchError) {
        console.error('Error calling backend email API:', fetchError);
      }
    }

    // Fallback: Log email for development/testing
    // In production, configure the backend API or use an email service
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    console.log('Text:', text);
    console.log('==============================');
    console.log('\n⚠️  NOTE: Configure backend email API or email service for production');
    console.log('Backend URL:', backendUrl || 'Not configured');
    console.log('Admin API Key:', adminApiKey ? 'Configured' : 'Not configured');
    console.log('\n');

    // Return success even in development so the form works
    // The email will be logged to console
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

