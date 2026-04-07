import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        geist: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand
        emerald: '#4DA882',
        'color-blue': '#5DAFE4',
        'color-yellow': '#E4C25D',
        'color-purple': '#B085E4',
        // Surfaces
        'surface-page': '#141514',
        'surface-base': '#1D1F1E',
        'surface-card': '#232625',
        'surface-elevated': '#282A29',
        'surface-divider': '#2E302F',
        // Text
        'text-primary': '#F2F0EB',
        'text-subtitle': '#A8A8A2',
        'text-body': '#9E9E98',
        'text-caption': '#6B6B65',
        'text-tertiary': '#555555',
        'text-muted': '#4A4A46',
      },
    },
  },
  plugins: [],
};

export default config;
