# Vercel Deployment Guide

Your portfolio is ready to deploy to Vercel. Follow these steps.

## Prerequisites

- GitHub repository (✅ Already set up at https://github.com/JulianCorpuz/Portfolio)
- Vercel account (free) at https://vercel.com

## Deployment Steps

### 1. Connect GitHub to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Find and select **JulianCorpuz/Portfolio**
5. Click "Import"

### 2. Configure Environment Variables

1. In the import settings, scroll to **Environment Variables**
2. Add these variables:
   - **Name**: `EMAIL_USER`
   - **Value**: `your-email@gmail.com`
   - **Name**: `EMAIL_PASSWORD`
   - **Value**: `xxxx xxxx xxxx xxxx` (your Gmail app password)
3. Click "Deploy"

**⚠️ Important**: These variables are encrypted by Vercel and never visible in logs.

### 3. Wait for Deployment

- Vercel will build and deploy automatically
- Takes ~2-3 minutes
- You'll see a live URL once complete (typically `your-project.vercel.app`)

### 4. Test Live Site

1. Open your deployment URL
2. Go to Contact page
3. Fill out and submit the form
4. Check your email for notifications

### 5. Connect Custom Domain (Optional)

If you have a custom domain:

1. In Vercel Dashboard → Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS configuration steps

## Post-Deployment

### Auto-Redeploy on Git Push

Vercel automatically redeploys whenever you push to the `main` branch. No manual action needed!

### Update Email Credentials

If you need to change email credentials later:

1. Vercel Dashboard → Project Settings → Environment Variables
2. Edit `EMAIL_USER` or `EMAIL_PASSWORD`
3. Vercel will automatically rebuild and redeploy

### Monitor Deployments

1. Vercel Dashboard → Deployments tab
2. See all deployment history
3. Click any deployment to view logs

## Troubleshooting

### Site shows "Failed" on Deployment

1. Go to the failed deployment
2. Click "Logs" to see error details
3. Common issues:
   - Email credentials not set correctly
   - TypeScript compilation error

### Contact form not sending emails

1. Verify environment variables are set in Vercel:
   - Dashboard → Settings → Environment Variables
   - Make sure `EMAIL_USER` and `EMAIL_PASSWORD` are present

2. Check email is correct:
   - Should be the app password (16 chars with spaces), not your Gmail password
   - Must have 2FA enabled on Google account

3. Check logs:
   - Vercel Dashboard → Deployments → Select deployment → Logs
   - Look for error messages from nodemailer

### Custom domain not working

1. Wait 24-48 hours for DNS propagation
2. Go to your domain registrar
3. Verify nameservers are pointing to Vercel's DNS servers
4. Vercel Dashboard shows exact nameservers to use

## Performance & Analytics

Vercel provides built-in analytics:

- Dashboard → Analytics tab
- See page views, response times, etc.
- Real-time monitoring of your site

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test contact form
3. **Optional**: Connect custom domain
4. **Optional**: Monitor with Vercel Analytics
5. **Optional**: Set up Slack/Discord notifications for deployments

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact Vercel support through dashboard
