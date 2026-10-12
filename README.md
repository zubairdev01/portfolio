# Muhammad Zubair: Portfolio (React + Express)

## Run locally
```bash
# terminal 1: API
cd server && npm install && cp .env.example .env   # then fill in SMTP_USER and SMTP_PASS
npm run dev                                         # http://localhost:5000

# terminal 2: website
cd client && npm install && npm run dev             # http://localhost:5173
```

## Edit content
Everything lives in `client/src/data/content.js`. Images are in `client/public/images`, and your CV is `client/public/cv.pdf`.
Add a repo link by putting `['View on GitHub', 'https://...']` in a project's `l` array.

## Contact form
`server/server.js` sends mail with Nodemailer. For Gmail, enable 2-step verification and create an App Password.
Until SMTP is configured the form shows a clear "not configured" message and the email link still works.

## Deploy
- **Option A (simplest):** `cd client && npm run build`, then deploy the whole repo to Render or Railway
  with start command `cd server && npm install && npm start`. It serves `client/dist` and the API from one URL.
  Set the `.env` values on the host.
- **Option B:** client on Vercel (root directory `client`), API on Render. Set `VITE_API_URL` on Vercel to the API URL
  and `CLIENT_ORIGIN` on the API to your Vercel domain.
