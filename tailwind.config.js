/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        panel: '#0b1220',
        card: '#101a2d',
        line: 'rgba(148, 163, 184, 0.15)',
        primary: '#5ee7ff',
        secondary: '#7c3aed',
        accent: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 30px rgba(94, 231, 255, 0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.09) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        drift: 'drift 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(94, 231, 255, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(94, 231, 255, 0.35)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(15px,-15px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
      },
    },
  },
  plugins: [],
};
