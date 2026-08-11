import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} Devashish Pandey. Built with React + Vite + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:devpandey252001@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors focus-visible:text-accent"
          >
            <Mail size={16} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Dev252001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors focus-visible:text-accent"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/devashish-pandey-806062230"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors focus-visible:text-accent"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
