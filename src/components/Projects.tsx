import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '../lib/motion'
import { GithubIcon } from './BrandIcons'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  accent: string
  inProgress?: boolean
}

const projects: Project[] = [
  {
    title: 'Learnify',
    description:
      'Full-stack Retrieval-Augmented Generation app that lets students upload course PDFs and query them conversationally. FastAPI backend with semantic chunking, ChromaDB vector store, Redis caching layer, and a React/TypeScript frontend.',
    tags: ['React', 'TypeScript', 'FastAPI', 'RAG', 'ChromaDB', 'Redis', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/Dev252001/learnify',
    demo: 'https://learnify-demo.example.com',
    accent: 'from-violet-500/10 to-transparent',
  },
  {
    title: 'AI-Based Smart Driver Monitoring System',
    description:
      'Real-time AI driver monitoring using OpenCV and MediaPipe — runs on standard webcam input with 468-point facial landmark tracking (MediaPipe Face Mesh). EAR threshold tuned at 0.2 for drowsy-state classification. Detects drowsiness, head movement, gaze direction, and inattentiveness. Modular architecture covering detection, state management, fatigue scoring, logging, and audio alerts.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision', 'Real-time'],
    github: 'https://github.com/Dev252001/driver-monitoring',
    accent: 'from-emerald-500/10 to-transparent',
  },
  {
    title: 'HAM10000 Skin Lesion Classifier',
    description:
      'Deep learning classifier for dermatoscopic image classification across 7 skin lesion categories using the HAM10000 dataset. Focus on per-class F1 handling for severe class imbalance.',
    tags: ['Python', 'PyTorch/TensorFlow', 'CNN', 'Computer Vision', 'Medical Imaging'],
    accent: 'from-sky-500/10 to-transparent',
    inProgress: true,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUpVariant} className="section-label">
            Projects
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="section-heading mb-3">
            Things I've built
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-muted text-base mb-12 max-w-xl">
            Real-world AI and full-stack projects — built to solve actual problems.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className="card group relative overflow-hidden flex flex-col"
    >
      {/* Accent gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl`}
        aria-hidden="true"
      />

      <div className="relative flex flex-col h-full">
        {project.inProgress && (
          <span className="absolute top-0 right-0 z-10 px-2.5 py-1 rounded-full border border-border bg-surfaceHigh text-[10px] font-mono uppercase tracking-wide text-muted">
            In Progress
          </span>
        )}

        <h3 className="font-display font-bold text-base sm:text-lg text-text mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-text text-sm font-mono transition-colors focus-visible:text-accent"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-text text-sm font-mono transition-colors focus-visible:text-accent"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon size={15} />
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted/60 text-sm font-mono">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
