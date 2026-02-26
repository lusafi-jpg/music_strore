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
        'brand-primary': '#00A8C5',
        'brand-secondary': '#4A47A3',
        'brand-tertiary': '#A63D8D',
        'brand-quaternary': '#FF4E63',
        'brand-quinary': '#FF9331',
        'accent': '#FF4E63',
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
