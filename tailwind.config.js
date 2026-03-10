/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./partials/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d6efd',
          hover: '#0b5ed7'
        }
      }
    },
  },
  plugins: [],
}