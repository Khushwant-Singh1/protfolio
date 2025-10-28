# Vercel Deployment Guide

## Required Environment Variables

Before deploying, add these environment variables in your Vercel project settings:

### Email Service (Required for Contact Form)
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

**How to get Gmail App Password:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. Use this 16-character password as `EMAIL_PASSWORD`

## Build Settings

Vercel should auto-detect Next.js, but if needed:

- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`
- **Development Command:** `pnpm dev`

## Troubleshooting

### Build Timeout
If the build times out, the webpack optimizations in `next.config.ts` are now conditional and won't run unless `ANALYZE=true` is set.

### Missing Icons
The PWA icons (icon-192x192.png, icon-512x512.png) need to be actual image files. You can generate them at:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

### Contact Form Not Working
Make sure you've added `EMAIL_USER` and `EMAIL_PASSWORD` environment variables in Vercel project settings.

### Image Optimization
Cloudinary images are configured in `next.config.ts` under `remotePatterns`. No additional setup needed.

## Deployment Steps

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

Your site will be live at: `https://your-project.vercel.app`
