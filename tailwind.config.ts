import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        panel: '#111827',
        accent: '#7c3aed',
        accentSoft: '#a78bfa',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.24)',
      },
    },
  },
  plugins: [],
};

export default config;
