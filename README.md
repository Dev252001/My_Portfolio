# Devashish Pandey — AI/ML Portfolio

A fully responsive, animated portfolio website built with **Vite + React + TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
# Output: dist/
```

## Deploy

The `dist/` folder is a self-contained static site — deploy to:

- **Vercel**: `vercel --prod` or drag-drop `dist/`
- **Netlify**: drag-drop `dist/` or connect repo
- **GitHub Pages**: push `dist/` to `gh-pages` branch

## Tech Stack

| Layer | Tech |
|-------|------|
| Bundler | Vite 6 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk, JetBrains Mono, Inter |

## Customisation

- **Personal info**: edit `src/components/Hero.tsx`, `About.tsx`
- **Projects**: edit the `projects` array in `src/components/Projects.tsx`
- **Skills**: edit `skillGroups` in `src/components/Skills.tsx`
- **Certifications**: edit the `certifications` array in `src/components/Certifications.tsx`
- **Contact links**: update emails/URLs in `Contact.tsx` and `Footer.tsx`
- **Resume PDF**: place your `resume.pdf` in the `public/` folder

## Features

- Terminal-style hero animation simulating a real ML training run
- Scroll-triggered section reveals with Framer Motion `whileInView`
- Animated proficiency bars with ARIA `progressbar` roles
- Respects `prefers-reduced-motion`
- Keyboard-navigable with visible focus states
- Semantic HTML throughout
- Responsive down to 360 px
