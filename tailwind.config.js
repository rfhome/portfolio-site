/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#f7f8f6',
        ink: '#172226',
        'ink-soft': '#59666a',
        line: '#c5cfcc',
        dark: '#10191c',
        'dark-soft': '#aab7b8',
        'teal-soft': '#ddede9',
        teal: {
          50: '#eff8f6',
          100: '#ddede9',
          200: '#c0e0db',
          300: '#8bc9c0',
          400: '#4caaa0',
          500: '#188b82',
          600: '#0e766e',
          700: '#0b655f',
          800: '#0b514d',
          900: '#0b4542',
        },
      },
    },
  },
  plugins: [],
}
