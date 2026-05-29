# Web3Forms Setup Guide

## Overview
The contact form is now integrated with **Web3Forms**, a free email service that requires no backend. Emails are sent directly to your inbox.

## Setup Steps

### 1. Create a Web3Forms Account
1. Visit [web3forms.com](https://web3forms.com)
2. Sign up with your email address
3. Verify your email

### 2. Get Your Access Key
1. Log in to your Web3Forms dashboard
2. Go to **Settings** or **API Keys**
3. Copy your **Access Key** (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 3. Update the Contact Form
1. Open `components/Contact.tsx`
2. Find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from step 2

### 4. Customize Email Settings (Optional)
In `components/Contact.tsx`, you can customize:

```html
<!-- Email subject line -->
<input type="hidden" name="subject" value="New Physiotherapy Enquiry from D.K. Chetty Website" />

<!-- Sender name in email -->
<input type="hidden" name="from_name" value="D.K. Chetty Physiotherapy" />

<!-- Redirect URL after successful submission -->
<input type="hidden" name="redirect" value="https://dkchettyphysiotherapy.co.za#contact" />
```

### 5. Test the Form
1. Start your dev server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the submission

## Features Implemented

✅ **Web3Forms Integration** — No backend required
✅ **Error Handling** — User-friendly error messages
✅ **Loading State** — Visual feedback during submission
✅ **Success Confirmation** — "Message sent" confirmation
✅ **Form Reset** — Form clears after successful submission
✅ **Responsive Design** — Works on all devices
✅ **Accessibility** — Proper labels and ARIA attributes

## Email Fields Captured

The form automatically captures:
- **name** — Full name
- **email** — Email address
- **phone** — Phone number
- **reason** — Reason for enquiry
- **message** — Detailed message

## Troubleshooting

### Emails not arriving?
1. Check that your access key is correct
2. Verify your email is confirmed in Web3Forms
3. Check spam/junk folder
4. Test with a different email address

### Form not submitting?
1. Open browser console (F12) and check for errors
2. Verify the access key is valid
3. Ensure you're connected to the internet
4. Check Web3Forms status page for any service issues

## Security Notes

- The access key is visible in the HTML (this is normal for Web3Forms)
- Web3Forms handles spam protection automatically
- All submissions are encrypted in transit
- No data is stored on your server

## Support

For Web3Forms support, visit: https://web3forms.com/support
