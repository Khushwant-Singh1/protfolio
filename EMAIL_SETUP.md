# Email Setup Instructions

Your portfolio now uses **Nodemailer** to send emails directly to `khushwantzx@gmail.com`.

## Setup Steps:

### 1. Generate a Gmail App Password

Since Gmail requires App Passwords for third-party applications:

1. Go to your Google Account: https://myaccount.google.com/security
2. Make sure **2-Step Verification** is enabled
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select **"Mail"** and your device type
5. Click **Generate**
6. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### 2. Update .env.local

Open `.env.local` and replace `your_app_password_here` with the App Password you generated:

```env
EMAIL_USER=khushwantzx@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### 3. Restart the Development Server

Stop the current server (Ctrl+C) and restart it:

```bash
pnpm dev
```

## How It Works

1. User fills out the contact form
2. Form data is sent to `/api/send-email` API route
3. Nodemailer sends the email using your Gmail account
4. Email arrives in `khushwantzx@gmail.com` inbox

## Features

✅ Direct email delivery (no email client popup)
✅ Beautiful HTML email template
✅ Reply-to header set to the sender's email
✅ Form validation
✅ Success/error messages
✅ Loading states

## Troubleshooting

If emails aren't sending:
- Check that your App Password is correct
- Make sure 2-Step Verification is enabled on your Gmail
- Check the browser console for errors
- Verify `.env.local` has the correct credentials
- Make sure you restarted the dev server after updating `.env.local`

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Use App Passwords, not your regular Gmail password
- The `.env.example` file shows what variables are needed without exposing secrets
