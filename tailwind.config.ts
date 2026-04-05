import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        muted: '#6b7280',
        line: '#e5e7eb',
        accent: '#2563eb',
      },
    },
  },
  plugins: [],
};

export default config;
