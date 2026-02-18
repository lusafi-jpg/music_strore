/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'neon-pink': '#ff007f',
        'neon-purple': '#7000ff',
        'neon-cyan': '#00f2ff',
      },
      fontFamily: {
        'urban': ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 10px #ff007f, 0 0 20px #ff007f',
        'neon-purple': '0 0 10px #7000ff, 0 0 20px #7000ff',
        'neon-cyan': '0 0 10px #00f2ff, 0 0 20px #00f2ff',
      }
    },
  },
  plugins: [],
}
