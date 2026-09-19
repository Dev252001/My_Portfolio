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
    title: 'EcoGround — BioBlitz (SIH)',
    description:
      'Gamified environmental education platform built for Smart India Hackathon. Users earn XP, badges, and avatar upgrades by completing eco challenges, quizzes, and collaborative green missions. Features a habit tracker with streaks, eco leaderboard, course modules, a shop, and JWT-based auth — all built with Next.js 15, Prisma, and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'ShadCN UI', 'SIH'],
    github: 'https://github.com/Dev252001/ecoground',
    accent: 'from-green-500/10 to-transparent',
  },
  {
    title: 'Study Buddy AI',
    description:
      'Full-stack AI study platform where you upload PDFs, DOCX, PPTX, and notes then chat with them via RAG. Auto-generates quizzes (MCQ, True/False, Fill-in-the-blank), flashcards with spaced repetition, multi-style summaries, semantic search, and a study analytics dashboard. Supports Groq, OpenAI GPT-4o, IBM Granite, Llama 3, and Mistral — one env var to switch. Deployed via Docker Compose with Nginx, GitHub Actions CI/CD.',
    tags: ['React', 'TypeScript', 'FastAPI', 'RAG', 'LangChain', 'ChromaDB', 'Redis', 'PostgreSQL', 'Docker', 'Groq'],
    github: 'https://github.com/Dev252001/ai-study-buddy',
    accent: 'from-amber-500/10 to-transparent',
  },
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
      'Real-time driver monitoring system using OpenCV and MediaPipe Face Mesh. Detects drowsiness via Eye Aspect Ratio (EAR), tracks gaze direction (left/right/center), head-down posture, and inattentive behaviour. Features fatigue scoring, blink counting, CSV event logging, priority-based audio alerts (Pygame), user-specific calibration, and a real-time FPS dashboard.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Pygame', 'Computer Vision', 'Real-time'],
    github: 'https://github.com/Dev252001/AI-Based-Smart-Driver-Monitoring-System',
    accent: 'from-emerald-500/10 to-transparent',
  },
  {
    title: 'Spam Email Classifier',
    description:
      'NLP pipeline that classifies SMS/email messages as spam or ham using TF-IDF vectorization (5,000 features, unigrams + bigrams) and two classifiers — Logistic Regression vs Naive Bayes. Naive Bayes selected as final model: accuracy 96.81%, spam precision 0.99, F1 0.857. Includes text cleaning, stratified 80/20 split, confusion matrix plots, and a Streamlit web app for live predictions.',
    tags: ['Python', 'Scikit-learn', 'TF-IDF', 'NLP', 'Naive Bayes', 'Streamlit', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Dev252001/Spam-Classifier',
    accent: 'from-red-500/10 to-transparent',
  },
  {
    title: 'Library Management System',
    description:
      'Offline admin tool for a self-study library serving ~40 students at subsidized rates. Dashboard with 5 live KPI cards (copies, issued, overdue, fines), book catalogue with search/filter, issue/return workflow with auto fine calculation (₹2/day, capped at ₹50), student profiles with borrow history, and an analytics page with Matplotlib charts embedded as base64 PNGs.',
    tags: ['Python', 'Flask', 'SQLite', 'Bootstrap 5', 'Matplotlib', 'Jinja2'],
    github: 'https://github.com/Dev252001/Library-Management-System',
    accent: 'from-orange-500/10 to-transparent',
  },
  {
    title: 'HAM10000 Skin Lesion Classifier',
    description:
      'Dermoscopic image classifier on 10,015 images across 7 skin lesion classes (58:1 imbalance). Progresses from a from-scratch baseline CNN to fine-tuned ResNet18 and EfficientNet-B0, with class-weighted loss, per-class F1 tracking, and Grad-CAM interpretability. Best model: EfficientNet-B0 — macro-F1 0.7715, melanoma recall 0.8323, accuracy 79.44%.',
    tags: ['Python', 'PyTorch', 'EfficientNet', 'ResNet18', 'Grad-CAM', 'CNN', 'Computer Vision', 'Google Colab'],
    github: 'https://github.com/Dev252001/HAM10000',
    accent: 'from-sky-500/10 to-transparent',
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

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
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
