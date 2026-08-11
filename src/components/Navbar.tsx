import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver — track which section is in view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-text text-lg tracking-tight hover:text-accent transition-colors focus-visible:text-accent"
          aria-label="Devashish Pandey — back to top"
        >
          <span className="text-accent font-mono">D</span>
          <span>P</span>
          <span className="text-muted font-mono text-sm ml-1">./</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map(({ label, href, id }) => {
            const isActive = activeId === id
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`relative px-3 py-1.5 font-body text-sm rounded-md transition-colors focus-visible:text-accent ${
                    isActive ? 'text-text' : 'text-muted hover:text-text'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                  {/* Sliding underline indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            )
          })}
          <li className="ml-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-1.5 px-4 text-xs"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-muted hover:text-text transition-colors focus-visible:text-accent"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border"
        >
          <ul className="flex flex-col px-4 py-4 gap-1" role="list">
            {NAV_ITEMS.map(({ label, href, id }) => {
              const isActive = activeId === id
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={close}
                    aria-current={isActive ? 'location' : undefined}
                    className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'text-accent bg-accent/10 font-medium'
                        : 'text-muted hover:text-text hover:bg-surface'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li className="mt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-primary w-full justify-center"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
