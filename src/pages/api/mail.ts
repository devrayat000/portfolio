import { NextApiHandler } from 'next'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
  host: 'smtp.sendgrid.net',
  secure: process.env.NODE_ENV === 'production',
  // port: 465,
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_API_KEY,
  },
})

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).send(`${req.method} not allowed!`)

  const { name, email, subject, message } = req.body

  transporter.sendMail(
    {
      from: `"${name}" <${email}>`,
      to: 'dev.rayat000@gmail.com',
      date: new Date(),
      subject: `Portfolio - ${subject}`,
      html: `<p>${message}</p>`,
      text: message,
    },
    (err, info) => {
      if (!err) res.status(200).json({ status: 'ok', id: info.messageId })
      else res.status(500).json({ status: 'error', error: err.message })
    }
  )
}

export default handler
