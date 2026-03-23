import { useState } from 'react'
import './ChatBot.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState('options')
  const [contactType, setContactType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setView('options')
      setStatus('')
    }
  }

  const handleSelect = (type) => {
    setContactType(type)
    setView('form')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formSource: `Chatbot - ${contactType}`,
          message: `[${contactType}] ${formData.preferredDate ? 'Preferred date: ' + formData.preferredDate + '. ' : ''}${formData.message}`
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' })
        setTimeout(() => {
          setView('options')
          setIsOpen(false)
          setStatus('')
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleBack = () => {
    setView('options')
    setStatus('')
  }

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <div className="chatbot-bubble">
          Hi there! Click me to help you find what you're looking for
        </div>
      )}

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-panel-header">
            <div className="chatbot-panel-header-left">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Infinity Lighting</span>
            </div>
            <button className="chatbot-close" onClick={handleOpen} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="chatbot-panel-body">
            {view === 'options' && (
              <>
                <div className="chatbot-message">
                  <p>Hi there! How would you like to connect with us?</p>
                </div>
                <div className="chatbot-options">
                  <button className="chatbot-option" onClick={() => handleSelect('Phone Call')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <div>
                      <strong>Schedule a Phone Call</strong>
                      <span>We'll call you at your preferred time</span>
                    </div>
                  </button>
                  <button className="chatbot-option" onClick={() => handleSelect('In-Person Consultation')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <div>
                      <strong>In-Person Consultation</strong>
                      <span>Meet with our lighting experts</span>
                    </div>
                  </button>
                </div>
              </>
            )}

            {view === 'form' && (
              <>
                <button className="chatbot-back" onClick={handleBack}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back
                </button>
                <div className="chatbot-message">
                  <p>Great choice! Fill out the form below and we'll get back to you shortly to schedule your <strong>{contactType.toLowerCase()}</strong>.</p>
                </div>

                {status === 'success' ? (
                  <div className="chatbot-success">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A22828" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <p>Thank you! We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form className="chatbot-form" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                    <input
                      type="text"
                      name="preferredDate"
                      placeholder="Preferred Date & Time"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                    <textarea
                      name="message"
                      placeholder="Anything else we should know?"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      disabled={submitting}
                    />
                    {status === 'error' && (
                      <p className="chatbot-error">Something went wrong. Please try again.</p>
                    )}
                    <button type="submit" className="chatbot-submit" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={handleOpen} aria-label="Open chat">
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  )
}

export default ChatBot