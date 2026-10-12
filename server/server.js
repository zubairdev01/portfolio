import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const { SMTP_HOST = 'smtp.gmail.com', SMTP_PORT = 465, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',') }));

const transporter = SMTP_USER && SMTP_PASS
  ? nodemailer.createTransport({ host: SMTP_HOST, port: +SMTP_PORT, secure: +SMTP_PORT === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } })
  : null;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many messages. Please try again in a few minutes.' },
});
const clean = (v, max) => String(v ?? '').trim().slice(0, max);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', limiter, async (req, res) => {
  const name = clean(req.body?.name, 100).replace(/[\r\n"]/g, ' ');
  const email = clean(req.body?.email, 200);
  const message = clean(req.body?.message, 3000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message)
    return res.status(400).json({ error: 'A name, a valid email address and a message are required.' });
  if (!transporter)
    return res.status(503).json({ error: 'The email service is not configured yet.' });
  try {
    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(502).json({ error: 'Could not send the message. Please try again later.' });
  }
});

// Production: serve the built React app from the same server
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '../client/dist');
app.use(express.static(dist));
app.get('*', (req, res, next) => (req.path.startsWith('/api') ? next() : res.sendFile(path.join(dist, 'index.html'), (e) => e && next())));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
