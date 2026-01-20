'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

interface SubmitState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [submit, setSubmit] = useState<SubmitState>({
    status: 'idle',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!form.name || !form.email || !form.message) {
      setSubmit({
        status: 'error',
        message: 'Please fill in all fields',
      })
      return
    }

    setSubmit({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (data.success) {
        setSubmit({
          status: 'success',
          message: 'Message sent successfully!',
        })
        setForm({ name: '', email: '', message: '' })
      } else {
        setSubmit({
          status: 'error',
          message: data.message || 'Failed to send message',
        })
      }
    } catch (error) {
      setSubmit({
        status: 'error',
        message: 'An error occurred. Please try again.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-2xl animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
          <label className="block text-sm font-semibold text-text-light mb-3">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-lg text-text-light placeholder-text-lighter focus:outline-none focus:border-accent-gold focus:shadow-lg focus:shadow-accent-gold/20 transition smooth-transition"
            placeholder="Your name"
            required
          />
        </div>

        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <label className="block text-sm font-semibold text-text-light mb-3">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-lg text-text-light placeholder-text-lighter focus:outline-none focus:border-accent-gold focus:shadow-lg focus:shadow-accent-gold/20 transition smooth-transition"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
        <label className="block text-sm font-semibold text-text-light mb-3">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-lg text-text-light placeholder-text-lighter focus:outline-none focus:border-accent-gold focus:shadow-lg focus:shadow-accent-gold/20 transition smooth-transition resize-none"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={submit.status === 'loading'}
        className="w-full sm:w-auto bg-accent-gold text-dark-bg py-3 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base hover:bg-accent-gold-light transition smooth-transition disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent-gold/30 active:scale-95 animate-slide-up"
        style={{animationDelay: '0.4s'}}
      >
        {submit.status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {submit.message && (
        <div
          className={`p-4 rounded-lg animate-slide-up border ${
            submit.status === 'success'
              ? 'bg-green-900/30 text-green-400 border-green-700'
              : 'bg-red-900/30 text-red-400 border-red-700'
          }`}
        >
          {submit.message}
        </div>
      )}
    </form>
  )
}
