import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '../lib/motion'

interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  link?: string
}

const experiences: Experience[] = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'Edunet Foundation × AICTE',
    location: 'Remote',
    period: 'Jul 2026 – Aug 2026',
    bullets: [
      'Selected for the AICTE-backed Edunet Foundation SkillsBuild AI internship program.',
      'Worked independently on a real-world AI project under mentor guidance via the IBM SkillsBuild platform.',
      'Developed skills in AI, machine learning, and practical project delivery across a structured 6-week program.',
      'Received certification from AICTE and Edunet Foundation on completion.',
    ],
  },
  {
    role: 'Full Stack Web Development Intern',
    company: 'Eduzent',
    location: 'Greater Noida, India',
    period: '2025',
    bullets: [
      'Worked on frontend and backend web development concepts and practical implementations.',
      'Developed understanding of full-stack workflows, responsive web applications, and project structuring.',
    ],
  },
]

const achievements = [
  {
    title: 'Smart India Hackathon (SIH)',
    detail: 'Qualified Pre-Qualifier Round',
    year: '2024',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-label="Experience and Achievements"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Experience */}
          <motion.span variants={fadeUpVariant} className="section-label">
            Experience
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-10">
            Work & Achievements
          </motion.h2>

          <div className="space-y-5 mb-14">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeUpVariant}
                className="card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                      <Briefcase size={16} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-text leading-snug">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs text-accent mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 self-start sm:flex-shrink-0">
                    <span className="font-mono text-xs text-muted bg-surfaceHigh border border-border px-2.5 py-1 rounded-md">
                      {exp.period.replace(' · Current', '')}
                    </span>
                    {exp.period.includes('Current') && (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-1.5 pl-12">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-accent/60 flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/60 block" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.span variants={fadeUpVariant} className="section-label">
            Achievements
          </motion.span>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {achievements.map((ach) => (
              <motion.div
                key={ach.title}
                variants={fadeUpVariant}
                className="card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                  <span className="text-accent text-base font-bold" aria-hidden="true">🏆</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-text leading-snug">
                    {ach.title}
                  </h3>
                  <p className="font-mono text-xs text-muted mt-1">{ach.detail}</p>
                  <p className="font-mono text-xs text-muted/60 mt-0.5">{ach.year}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
