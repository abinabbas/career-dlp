import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '32kb' }));

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function createTransport() {
  return nodemailer.createTransport({
    host: requireEnv('SMTP_HOST'),
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: requireEnv('SMTP_USER'),
      pass: requireEnv('SMTP_PASS'),
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

app.post('/api/consult', async (req, res) => {
  try {
    const body = req.body || {};
    const firstName = String(body.firstName ?? '').trim();
    const lastName = String(body.lastName ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const careerStage = String(body.careerStage ?? '').trim();
    const careerGoal = String(body.careerGoal ?? '').trim();
    const challenge = String(body.challenge ?? '').trim();

    if (!firstName || !lastName || !email || !phone || !careerStage || !careerGoal) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }

    const referenceId = `DLP-${Math.floor(100000 + Math.random() * 900000)}`;
    const notifyTo = requireEnv('CONSULT_NOTIFY_TO');
    const from = process.env.SMTP_FROM || requireEnv('SMTP_USER');

    const rows = [
      ['Reference', referenceId],
      ['Name', `${firstName} ${lastName}`],
      ['Email', email],
      ['Phone / WhatsApp', phone],
      ['Career Stage', careerStage],
      ['Career Goal', careerGoal],
      ['Biggest Struggle', challenge || '—'],
    ];

    const html = `
      <h2>New career consultation enquiry</h2>
      <p>Reference: <strong>${escapeHtml(referenceId)}</strong></p>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">${escapeHtml(label)}</td>
            <td style="border:1px solid #e2e8f0">${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
    `;

    const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

    const transporter = createTransport();
    await transporter.sendMail({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `Consultation enquiry — ${firstName} ${lastName} (${referenceId})`,
      text,
      html,
    });

    return res.json({ ok: true, referenceId });
  } catch (err) {
    console.error('[consult] email failed:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send consultation email.' });
  }
});

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
