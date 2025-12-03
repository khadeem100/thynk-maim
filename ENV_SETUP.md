# Environment Variables Setup Guide

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in the required variables** (see below)

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## Required Variables

### 1. Supabase Configuration
Get these from your Supabase project dashboard: https://app.supabase.com

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Application URLs
```env
# Your frontend URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
# For production: https://tynktech.nl

# Your backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
# For production: https://api.tynktech.nl
```

### 3. Contact Form Email (Required for contact form to work)
```env
# Admin API Key for backend email API
KORTIX_ADMIN_API_KEY=your-admin-api-key-here
```

## Contact Form Setup Options

The contact form needs to send emails to `admin@thynktech.nl`. You have 3 options:

### Option 1: Backend API (Recommended)
If you have a backend API that handles email sending:

1. Set `KORTIX_ADMIN_API_KEY` in your `.env.local`
2. Ensure your backend has endpoint: `POST /api/send-contact-email`
3. Backend should accept:
   - Header: `X-Admin-Api-Key: your-api-key`
   - Body: `{ to, subject, html, text }`

### Option 2: Development Mode (Testing)
If you don't have email configured yet:
- The form will still work
- Emails will be logged to the console
- Users will see a success message
- You can check server logs for the email content

### Option 3: Direct Email Service
You can modify `/src/app/api/contact/route.ts` to use:
- Resend
- SendGrid
- SMTP (Nodemailer)

## Production Deployment (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all required variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL` (your production URL)
   - `NEXT_PUBLIC_BACKEND_URL` (your production backend URL)
   - `KORTIX_ADMIN_API_KEY`
   - `NEXT_PUBLIC_ENV_MODE=PRODUCTION`

4. Redeploy your application

## Testing the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your console/terminal for the email output (in development mode)
5. Or check `admin@thynktech.nl` inbox (if backend API is configured)

## Troubleshooting

### Contact form shows success but no email received?
- Check if `KORTIX_ADMIN_API_KEY` is set correctly
- Check if `NEXT_PUBLIC_BACKEND_URL` points to your backend
- Check backend logs for email sending errors
- In development, check console logs for email content

### Backend API not working?
- Verify your backend has the `/api/send-contact-email` endpoint
- Check that the API key matches in both frontend and backend
- Ensure backend can send emails (SMTP/email service configured)

### Environment variables not loading?
- Make sure file is named `.env.local` (not `.env`)
- Restart your development server after changing `.env.local`
- In production, ensure variables are set in your hosting platform

