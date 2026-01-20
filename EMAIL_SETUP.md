# Email Notifications Setup Guide

The contact form is configured to send email notifications using **Nodemailer**. Follow these steps to enable email functionality.

## Quick Setup (Gmail)

### Prerequisites
- Gmail account with 2-Factor Authentication enabled
- Your Gmail address and app password

### Steps

1. **Enable 2-Factor Authentication** (if not already enabled)
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device type)
   - Google will generate a 16-character password
   - Copy this password

3. **Configure Environment Variables**
   - Open or create `.env.local` in the project root
   - Add your Gmail address and app password:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

4. **Test Locally**
   - Start dev server: `npm run dev`
   - Go to http://localhost:3000/contact
   - Fill out the form and submit
   - Check your inbox for two emails:
     - One with the form submission details (sent to your email)
     - One confirmation email to the visitor

5. **Deploy to Vercel**
   - Add environment variables in Vercel project settings:
     - Dashboard → Settings → Environment Variables
     - Add `EMAIL_USER` and `EMAIL_PASSWORD`
   - Redeploy the project

## How It Works

When someone submits the contact form:

1. **Visitor receives** a confirmation email acknowledging their message
2. **You receive** an email with:
   - Visitor's name, email, and message
   - Reply-To field set to their email address (click reply to respond directly)

## Alternative Email Providers

### SendGrid
```javascript
// transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
})
```

### Mailgun
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_EMAIL,
    pass: process.env.MAILGUN_PASSWORD,
  },
})
```

### AWS SES
Update `src/app/api/contact/route.ts` with SES configuration.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Not able to log in with your Gmail account" | Make sure 2FA is enabled and you're using the 16-char App Password, not your Gmail password |
| "Emails not sending on production" | Verify environment variables are set in Vercel dashboard |
| "530 5.7.0 Must issue a STARTTLS command" | Gmail requires TLS - the current config handles this automatically |

## Security Notes

⚠️ **Never commit `.env.local` to Git** - it contains sensitive credentials.

The `.env.local` file is already in `.gitignore`, so it won't be accidentally committed.

For production (Vercel), manage sensitive variables through the platform's secure environment variables interface.

## Testing

To test email functionality without setting up SMTP:
- Comment out the `if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD)` check
- This will show a success message but won't send actual emails
- Useful for testing the form UI before setting up email

## Support

If emails aren't sending:
1. Check `.env.local` has correct credentials
2. Verify dev server is running: `npm run dev`
3. Check browser console for errors (F12 → Console tab)
4. Check server terminal for error logs
