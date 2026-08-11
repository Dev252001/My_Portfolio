import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant } from '../lib/motion'

interface Certification {
  title: string
  issuer: string
}

const certifications: Certification[] = [
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
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-6">
            Credentials
          </motion.h2>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center gap-2">
                <span className="font-display font-semibold text-text">{cert.title}</span>
                <span className="font-mono text-xs text-muted/80">— {cert.issuer}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
