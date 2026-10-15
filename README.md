<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/61d13e65-cd59-4c9b-b9c7-b75fab29892f

## Run Locally

**Prerequisites:** Node.js 20.19+ or 22.12+


1. Install dependencies:
   `npm install`
2. Configure EmailJS in `.env.local` using the variables from [.env.example](.env.example).
   In the EmailJS template, set the recipient to `{{to_email}}` and use
   `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, and `{{message}}` for the message fields.
   The recipient is the portfolio owner's email configured in `src/data/profile.ts`.
3. Run the app:
   `npm run dev`

The contact form sends the message directly through EmailJS; visitors do not need to open an email app.
