import { useEffect, useRef } from 'react'

interface Line {
  text: string
  delay: number
  color?: 'default' | 'accent' | 'muted' | 'green'
}

const LINES: Line[] = [
  { text: '$ python monitor.py --source webcam', delay: 0, color: 'muted' },
  { text: 'Initializing MediaPipe Face Mesh... [468 landmarks]', delay: 600, color: 'muted' },
  { text: 'Loading drowsiness detection model...', delay: 1100, color: 'default' },
  { text: 'Frame 142 — EAR: 0.31 — Status: ALERT', delay: 1600, color: 'default' },
  { text: 'Frame 143 — EAR: 0.28 — Status: ALERT', delay: 2000, color: 'default' },
  { text: 'Frame 144 — EAR: 0.19 — Status: DROWSY ⚠', delay: 2400, color: 'green' },
  { text: '', delay: 2750, color: 'default' },
  { text: '>>> detector.predict(frame)', delay: 2900, color: 'accent' },
  { text: "{'state': 'drowsy', 'ear': 0.19, 'alert': True}", delay: 3400, color: 'green' },
]

export default function TerminalHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      // Show all lines instantly
      LINES.forEach((line) => {
        const el = document.createElement('div')
        el.textContent = line.text || '\u00A0'
        el.className = getLineClass(line.color)
        container.appendChild(el)
      })
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((line) => {
      const t = setTimeout(() => {
        const lineEl = document.createElement('div')
        lineEl.className = getLineClass(line.color)

        if (!line.text) {
          lineEl.innerHTML = '&nbsp;'
          container.appendChild(lineEl)
          return
        }

        let charIndex = 0
        const span = document.createElement('span')
        lineEl.appendChild(span)
        container.appendChild(lineEl)

        // Scroll into view
        container.scrollTop = container.scrollHeight

        // Char-by-char typing
        const charDelay = line.color === 'muted' ? 18 : 22
        const typeChar = () => {
          if (charIndex < line.text.length) {
            span.textContent = line.text.slice(0, charIndex + 1)
            charIndex++
            const nextTimer = setTimeout(typeChar, charDelay)
            timers.push(nextTimer)
          }
        }
        typeChar()
      }, line.delay)
      timers.push(t)
    })

    // Blinking cursor on last line
    const cursorTimer = setTimeout(() => {
      const cursor = document.createElement('span')
      cursor.textContent = '█'
      cursor.className = 'text-accent animate-cursor-blink ml-0.5'
      const lastLine = container.lastElementChild
      if (lastLine) lastLine.appendChild(cursor)
    }, 4200)
    timers.push(cursorTimer)

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="relative w-full max-w-lg rounded-xl border border-border bg-surface overflow-hidden"
      role="img"
      aria-label="Terminal showing a machine learning model training session"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surfaceHigh">
        <span className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted select-none">terminal — model.predict</span>
      </div>
      {/* Terminal body */}
      <div
        ref={containerRef}
        className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-6 overflow-auto max-h-64 sm:max-h-72 space-y-0.5"
        aria-live="polite"
        aria-atomic="false"
      />
    </div>
  )
}

function getLineClass(color?: Line['color']): string {
  const base = 'font-mono text-xs sm:text-sm leading-6 whitespace-pre-wrap break-all'
  switch (color) {
    case 'accent': return `${base} text-accent`
    case 'muted': return `${base} text-muted`
    case 'green': return `${base} text-emerald-400`
    default: return `${base} text-text/90`
  }
}
