/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument-sans)'],
        serif: ['var(--font-instrument-serif)'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
