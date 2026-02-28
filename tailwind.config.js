/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121417',
        'dark-surface': '#1a1d23',
        'dark-card': '#242830',
        'brand-primary': '#0055BF', // Bleu Électrique - Logo headphones & left wave
        'brand-secondary': '#6A2B8E', // Violet Intense - Logo center wave
        'brand-tertiary': '#F8645C', // Corail/Rouge Doux - Logo text & right wave
        'brand-quaternary': '#F8645C', // Main accent - Logo corail/rouge
        'brand-quinary': '#FF9331', // Warm accent for gradients
        'accent': '#F8645C', // Primary accent - Logo corail/rouge
        'text-primary': '#FFFFFF',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
      },
      fontFamily: {
        'urban': ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.25)',
        'pro': '0 20px 50px -12px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
