import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant } from '../lib/motion'

interface SkillGroup {
  label: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'ML / AI',
    skills: ['PyTorch', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'LangChain', 'RAG', 'Grad-CAM', 'Pandas', 'NumPy', 'Streamlit'],
  },
  {
    label: 'Frontend & Backend',
    skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Prisma', 'PostgreSQL', 'Redis', 'ChromaDB', 'MySQL'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Jupyter', 'Google Colab', 'VS Code', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-label="Skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUpVariant} className="section-label">
            Skills
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-12">
            Technical proficiency
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {skillGroups.map((group) => (
              <motion.div key={group.label} variants={fadeUpVariant}>
                <h3 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag text-sm px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
