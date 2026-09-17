/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0a0a0a',
        surface: '#121212',
        elevated: '#1a1a1a',
        border: '#2a2a2a',
        muted: '#8a8a8a',
        brand: {
          DEFAULT: '#7c3aed',
          soft: '#6d28d9',
          deep: '#5b21b6',
          glow: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
};
