# Serviclima Landing (Next.js 14 + Tailwind)

Clean, simple, white landing tuned for Google Ads/SEO. Ready for Vercel.

## Quick start asdasdasdasd
```bash
pnpm i # or npm i / yarn
pnpm dev
```
Set envs:
```
NEXT_PUBLIC_SITE_URL=https://serviclim.ar
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX # optional
```
Edit phone/whatsapp/email in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/page.tsx` (Contacto + WhatsApp links)

Form uses Formspree (`action="https://formspree.io/f/TODO_FORM_ID"`). Replace with your ID or switch to Resend/Email API.

## Deploy
Push to GitHub and connect on Vercel, or `vercel` CLI.
