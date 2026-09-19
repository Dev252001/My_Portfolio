import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '../lib/motion'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto =
      `mailto:devpandey252001@gmail.com` +
      `?subject=${encodeURIComponent(`Portfolio contact from ${form.name}`)}` +
      `&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUpVariant} className="section-label">
            Contact
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-3">
            Let's talk
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted text-base mb-12 max-w-md">
            Got a project, internship, or just want to talk AI? My inbox is open.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Links */}
            <motion.div variants={fadeUpVariant} className="space-y-4">
              <ContactLink
                icon={Mail}
                label="Email"
                value="devpandey252001@gmail.com"
                href="mailto:devpandey252001@gmail.com"
              />
              <ContactLink
                icon={GithubIcon}
                label="GitHub"
                value="github.com/Dev252001"
                href="https://github.com/Dev252001"
              />
              <ContactLink
                icon={LinkedinIcon}
                label="LinkedIn"
                value="linkedin.com/in/devashish-pandey-806062230"
                href="https://linkedin.com/in/devashish-pandey-806062230"
              />
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUpVariant}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-10">
                  <CheckCircle size={40} className="text-emerald-400" aria-hidden="true" />
                  <p className="font-display font-semibold text-text">Opening your email client…</p>
                  <p className="text-muted text-sm">
                    Your default mail app should open with the message pre-filled.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-label="Contact form"
                >
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors resize-none"
                      placeholder="What are you working on?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} aria-hidden="true" />
                    Send message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ContactLinkProps {
  icon: React.ElementType<{ size?: number; className?: string }>
  label: string
  value: string
  href: string
}

function ContactLink({ icon: Icon, label, value, href }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-4 hover:border-accent/40 transition-all duration-200 group"
      aria-label={`${label}: ${value}`}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        <Icon size={18} className="text-accent" aria-hidden="true" />
      </div>
      <div className="overflow-hidden">
        <p className="font-mono text-xs text-muted mb-0.5">{label}</p>
        <p className="font-display font-semibold text-sm text-text truncate">{value}</p>
      </div>
    </a>
  )
}
