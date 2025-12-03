# Cal.com Setup Guide

## Overview
All "Neem contact op" buttons now open a Cal.com scheduling modal. This guide will help you connect your Cal.com account.

## Step 1: Create a Cal.com Account

1. Go to [cal.com](https://cal.com) and sign up for a free account
2. Complete the onboarding process

## Step 2: Create an Event Type

1. In your Cal.com dashboard, go to **Event Types**
2. Click **+ New Event Type**
3. Configure your event:
   - **Name**: "Consultation" (or any name you prefer)
   - **Duration**: 30 minutes (recommended)
   - **Description**: Add details about what the consultation includes
   - **Location**: Choose "Cal.com Video" or "Phone call"
4. Click **Continue** and complete the setup
5. Save the event type

## Step 3: Get Your Cal.com Link

After creating your event type, you'll get a link like:
- `https://cal.com/your-username/consultation`
- Or for teams: `https://cal.com/team/your-team/consultation`

**Important**: You need the **short link format**:
- For personal: `your-username/consultation`
- For team: `team/your-team/consultation`

## Step 4: Update the Code

### Option 1: Update Default Link (Recommended)

Edit `src/components/home/contact-modal.tsx` and change the default `calLink`:

```typescript
calLink = 'your-username/consultation', // Change this to your Cal.com link
```

### Option 2: Use Environment Variable (Advanced)

1. Add to your `.env.local`:
```env
NEXT_PUBLIC_CAL_LINK=your-username/consultation
```

2. Update `src/components/home/contact-modal.tsx`:
```typescript
calLink = process.env.NEXT_PUBLIC_CAL_LINK || 'team/kortix/consultation',
```

## Step 5: Install Cal.com Package

The package is already installed, but if you need to reinstall:

```bash
npm install @calcom/embed-react
```

## Step 6: Test

1. Start your development server: `npm run dev`
2. Click any "Neem contact op" button
3. The Cal.com modal should open with your calendar
4. Test booking an appointment

## Customization

### Different Links for Different Buttons

You can customize the Cal.com link per button:

**Navbar buttons** (already using default):
```tsx
<ContactModal>
  <button>Neem contact op</button>
</ContactModal>
```

**Pricing buttons** (already using default):
- Automatically uses ContactModal when buttonText is "Neem contact op"

**Custom link**:
```tsx
<ContactModal calLink="your-username/custom-event">
  <button>Plan een gesprek</button>
</ContactModal>
```

### Customize Modal Content

You can customize the modal title, description, and benefits:

```tsx
<ContactModal
  title="Plan een gesprek met TynkTech"
  description="Beschrijving van je dienst..."
  benefits={[
    'Gratis consultatie',
    'Oplossing op maat',
    'Transparante prijzen',
  ]}
  calLink="your-username/consultation"
>
  <button>Neem contact op</button>
</ContactModal>
```

## Troubleshooting

### Modal doesn't open
- Check browser console for errors
- Verify `@calcom/embed-react` is installed
- Make sure your Cal.com link is correct

### Calendar doesn't load
- Verify your Cal.com link format (should be `username/event` not full URL)
- Check that your event type is published in Cal.com
- Try clearing browser cache

### Wrong calendar shows
- Double-check the `calLink` prop matches your Cal.com event link
- Verify the link format (no `https://cal.com/` prefix)

## Where Cal.com is Used

✅ **Navbar** - "Neem contact op" button (desktop & mobile)  
✅ **Pricing Section** - All "Neem contact op" buttons on pricing cards  
✅ **CTA Section** - Main call-to-action button  
✅ **Enterprise Page** - Already configured with `TynkTechEnterpriseModal`

## Production Deployment

1. Make sure your Cal.com event is published
2. Update the `calLink` in `contact-modal.tsx` with your production Cal.com link
3. Deploy to Vercel/production
4. Test the buttons on the live site

## Support

- [Cal.com Documentation](https://cal.com/docs)
- [Cal.com Embed Guide](https://cal.com/docs/embed)
- [Cal.com Support](https://cal.com/support)

