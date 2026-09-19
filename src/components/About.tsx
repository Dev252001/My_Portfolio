import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant } from '../lib/motion'
import { GraduationCap, Brain, Target, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BCA — Galgotias University (CGPA: 8.59)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Greater Noida, India',
  },
  {
    icon: Brain,
    label: 'Specialization',
    value: 'ML, Data Science & DSA',
  },
  {
    icon: Target,
    label: 'Goal',
    value: 'MS in AI/ML — Future intake',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-label="About"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUpVariant} className="section-label">
            About
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-8">
            Who I am
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Bio text + photo */}
            <motion.div variants={fadeUpVariant} className="space-y-5">
              {/* Profile photo */}
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-border bg-surfaceHigh">
                  {/* Replace /profile.jpg with your actual photo in public/ */}
                  <img
                    src="/profile.jpg"
                    alt="Devashish Pandey"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget
                      t.style.display = 'none'
                      t.parentElement!.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-accent font-display">DP</div>'
                    }}
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-text">Devashish Pandey</p>
                  <p className="font-mono text-xs text-accent mt-0.5">Aspiring ML Engineer</p>
                  <p className="font-mono text-xs text-muted mt-0.5">Greater Noida, India</p>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p className="text-text/90">
                  BCA student at Galgotias University (CGPA 8.59, 2024–2027), focused on building explainable, defensible AI and computer vision systems rather than black-box demos. Currently working through a structured ML roadmap covering classical ML fundamentals through deep learning, alongside full-stack AI application development. Targeting MSc AI/ML programs in France for Fall 2027, with particular interest in applied ML and social media analytics.
                </p>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={containerVariant}
              className="grid gap-3"
            >
              {highlights.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUpVariant}
                  className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-4"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted mb-0.5">{label}</p>
                    <p className="font-display font-semibold text-sm text-text">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
