const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export async function sendContactEmail(data) {
  const { name, company, email, phone, propertyType, location, message, formSource } = data

  const senderEmail = process.env.SENDER_EMAIL
  const senderName = process.env.SENDER_NAME
  const apiKey = process.env.BREVO_API_KEY

  // Multiple admin recipients
  const adminEmails = [
    { email: 'bart@primarydm.com', name: 'Bart' },
    { email: 'Sales@Inflighting.com', name: 'Infinity Lighting Sales' },
    { email: 'mark@inflighting.com', name: 'Mark' }
  ]

  if (!apiKey) {
    throw new Error('Brevo API key not configured')
  }

  // Email to admin
  const adminEmailPayload = {
    sender: {
      name: senderName,
      email: senderEmail
    },
    to: adminEmails,
    replyTo: {
      email: email,
      name: name
    },
    subject: `New Inquiry from ${name} - ${company}`,
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a52929 0%, #8a2323 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background: #f9f9f9;">
          <p style="color: #666; margin-bottom: 20px;">
            <strong>Form Source:</strong> ${formSource}
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                <a href="tel:${phone}">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Property Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${propertyType}</td>
            </tr>
            ${location ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Location:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${location}</td>
            </tr>
            ` : ''}
          </table>

          ${message ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}
        </div>

        <div style="background: #333; padding: 15px; text-align: center;">
          <p style="color: #999; margin: 0; font-size: 12px;">
            Infinity Lighting Solutions - Houston LED Lighting Experts
          </p>
        </div>
      </div>
    `
  }

  // Send email to admin
  const adminResponse = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify(adminEmailPayload)
  })

  if (!adminResponse.ok) {
    const errorData = await adminResponse.json()
    console.error('Brevo API error:', errorData)
    throw new Error('Failed to send email to admin')
  }

  // Send confirmation email to customer
  const customerEmailPayload = {
    sender: {
      name: senderName,
      email: senderEmail
    },
    to: [
      {
        email: email,
        name: name
      }
    ],
    subject: 'Thank You for Contacting Infinity Lighting Solutions',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a52929 0%, #8a2323 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Your Inquiry</h1>
        </div>

        <div style="padding: 30px; background: #f9f9f9;">
          <p style="font-size: 16px; color: #333;">Dear ${name},</p>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for contacting Infinity Lighting Solutions. We have received your inquiry
            and one of our Houston LED lighting specialists will contact you within 24 hours.
          </p>

          <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #a52929; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Inquiry Details:</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Property Type:</strong> ${propertyType}</p>
            ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            If you need immediate assistance, please don't hesitate to call us at
            <a href="tel:2812024625" style="color: #a52929;">(281) 202-4625</a>.
          </p>

          <p style="font-size: 16px; color: #333;">
            Best regards,<br>
            <strong>Infinity Lighting Solutions Team</strong>
          </p>
        </div>

        <div style="background: #333; padding: 20px; text-align: center;">
          <p style="color: white; margin: 0 0 10px 0; font-size: 14px;">
            <strong>Infinity Lighting Solutions</strong>
          </p>
          <p style="color: #999; margin: 0; font-size: 12px;">
            Richmond, TX 77407 | (281) 202-4625 | Sales@Inflighting.com
          </p>
        </div>
      </div>
    `
  }

  const customerResponse = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify(customerEmailPayload)
  })

  if (!customerResponse.ok) {
    console.error('Failed to send confirmation email to customer')
    // Don't throw here - admin email was sent successfully
  }

  return { success: true }
}
