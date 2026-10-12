# Muhammad Zubair | Portfolio

A personal portfolio website built with React and Express. It showcases my projects, skills and learning notes, with a contact form that sends messages straight to my inbox.

**Live site:** [LIVE_URL]

## Features
- Dark and light themes that follow the device setting and remember the visitor's choice
- Project gallery with a keyboard-friendly image viewer
- Learning section with my Excalidraw study notes
- Downloadable CV
- Contact form backed by an Express API (validation, rate limiting, Nodemailer)
- Responsive, accessible layout
- All content in one file, so updates are quick

## Tech stack
| Area | Tools |
|---|---|
| Client | React 18, Vite, CSS |
| Server | Node.js, Express, Nodemailer, express-rate-limit |
| Hosting | Vercel (client), Render or Railway (API) |

## Project structure
```
client/   React app (components, data/content.js, public/images, cv.pdf)
server/   Express API for the contact form
```

## Run locally
```bash
# Terminal 1: API
cd server
npm install
cp .env.example .env    # add your SMTP details
npm run dev             # http://localhost:5000

# Terminal 2: website
cd client
npm install
npm run dev             # http://localhost:5173
```

## Update the content
Edit `client/src/data/content.js` to change text, skills, projects and links. Put new screenshots in `client/public/images/` and replace `client/public/cv.pdf` to update the CV.

## Contact form setup
Create a Gmail App Password and set `SMTP_USER`, `SMTP_PASS` and `MAIL_TO` in `server/.env`. Without them, the form shows a clear "not configured" message.

## Deployment
- Client: import the repo on Vercel and set the Root Directory to `client`.
- API: host `server/` on Render or Railway, then set `VITE_API_URL` on Vercel and `CLIENT_ORIGIN` on the API.

## Author
**Muhammad Zubair**: [GitHub](https://github.com/zubairdev01) | [LinkedIn](https://linkedin.com/in/zubairdev01) | zubairdev0@gmail.com
