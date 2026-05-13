import type { VercelRequest, VercelResponse } from '@vercel/node'

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const RESEND_API_URL = 'https://api.resend.com/emails'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, token } = req.body as {
    name?: string
    email?: string
    message?: string
    token?: string
  }

  if (!name?.trim() || !email?.trim() || !message?.trim() || !token) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // Verify Turnstile token with Cloudflare
  const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  })
  const turnstileData = (await turnstileRes.json()) as { success: boolean }
  if (!turnstileData.success) {
    return res.status(400).json({ error: 'Bot check failed. Please refresh and try again.' })
  }

  // Forward the message via Resend
  const emailRes = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <contact@catalystedgeconnect.com>',
      to: ['rbfonseca.consulting@gmail.com'],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    }),
  })

  if (!emailRes.ok) {
    const body = await emailRes.text()
    console.error('Resend error:', emailRes.status, body)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }

  return res.status(200).json({ success: true })
}
