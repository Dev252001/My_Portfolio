/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#070B14',
        surface:     '#0D1220',
        surfaceHigh: '#131928',
        border:      '#1C2640',
        text:        '#E8EDF5',
        muted:       '#6B7A99',
        accent:      '#00D4FF',
        accentDim:   '#00A8CC',
        accentGlow:  'rgba(0, 212, 255, 0.15)',
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease forwards',
        'slide-up':     'slideUp 0.6s ease forwards',
        'cursor-blink': 'blink 1s step-end infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
