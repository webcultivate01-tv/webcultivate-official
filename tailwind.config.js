/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* ========================================
           🎨 CENTRALIZED COLOR THEME
           Colors are defined in src/index.css as CSS variables
           This allows changing the entire project theme from one place
           ======================================== */
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
          light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          light: 'rgb(var(--color-accent-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        sunRotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        moonGlow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        spinCustom: {
           from: { transform: 'rotate(0deg)' },
           to: { transform: 'rotate(360deg)' },
          },

      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delay-1': 'float 4s ease-in-out 1s infinite',
        'float-delay-2': 'float 4s ease-in-out 2s infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        rotate: 'rotate 20s linear infinite',
        'sun-rotate': 'sunRotate 20s linear infinite',
        'moon-glow': 'moonGlow 2s ease-in-out infinite',
        spinCustom: 'spinCustom 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}
