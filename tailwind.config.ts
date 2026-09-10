import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'black-grain': '#0a0a0a',
        offwhite: '#f2f2f2',
        acid: '#c7ff3d',
        surface: '#121212',
        panel: '#181818',
        accent: '#c7ff3d',
        accentSoft: '#dfff83',
      },
      boxShadow: {
        glow: '0 0 40px rgba(199, 255, 61, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
