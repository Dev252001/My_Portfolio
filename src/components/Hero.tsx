import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { FileText, ChevronDown } from 'lucide-react'
import TerminalHero from './TerminalHero'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 37, 51, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 37, 51, 0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, #0B0E14 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-label mb-6 inline-block"
            >
              Open to Internships &amp; MS AI/ML Programs
            </motion.span>

            {/* Staggered word reveal on heading */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5"
              aria-label="Devashish Pandey"
            >
              {['Devashish', 'Pandey'].map((word) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="font-mono text-base sm:text-lg text-accent font-medium mb-4"
            >
              BCA Student · AI / ML · Computer Vision
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.48 }}
              className="text-muted text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
            >
              BCA @ Galgotias University · Building real-world AI, Computer Vision &amp; Full Stack projects — one commit at a time.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.62 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Download Resume PDF"
              >
                <FileText size={16} aria-hidden="true" />
                Resume
              </a>
              <a
                href="https://github.com/Dev252001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/devashish-pandey-806062230"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-lg"
          >
            <TerminalHero />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  )
}
