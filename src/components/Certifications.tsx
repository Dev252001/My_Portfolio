import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '../lib/motion'

interface Certification {
  title: string
  issuer: string
  verify?: string
}

const certifications: Certification[] = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    verify: 'https://www.credly.com/badges/620ec1fc-df63-4f7f-8013-5ad6027ad976',
  },
  {
    title: 'Edunet — Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
  },
  {
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy × Galgotias University',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'TheCodingAdda (Rohit Negi)',
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy — Angela Yu',
  },
  {
    title: 'NPTEL Certification in E-Business',
    issuer: 'NPTEL',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-label="Certifications"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUpVariant} className="section-label">
            Certifications
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-3">
            Credentials
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted text-base mb-12 max-w-xl">
            Courses and certifications completed across AI, development, and computer science.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeUpVariant}
                className="card group flex flex-col gap-3"
              >
                <div className="flex-1">
                  <p className="font-display font-semibold text-sm text-text leading-snug mb-1">
                    {cert.title}
                  </p>
                  <p className="font-mono text-xs text-accent">{cert.issuer}</p>
                </div>
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-text text-xs font-mono transition-colors mt-auto"
                    aria-label={`Verify ${cert.title} certificate`}
                  >
                    <ExternalLink size={12} aria-hidden="true" />
                    Verify credential
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
