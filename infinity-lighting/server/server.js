import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { sendContactEmail } from './emailService.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, propertyType, location, message, formSource } = req.body

    // Validate required fields
    if (!name || !company || !email || !phone || !propertyType) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      })
    }

    // Send email via Brevo
    await sendContactEmail({
      name,
      company,
      email,
      phone,
      propertyType,
      location,
      message,
      formSource: formSource || 'Contact Page'
    })

    res.json({
      success: true,
      message: 'Your inquiry has been sent successfully. We will contact you within 24 hours.'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send your inquiry. Please try again or call us directly.'
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
