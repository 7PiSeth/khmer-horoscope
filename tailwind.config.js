/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'battambang': ['battambang', 'sans-serif'],
      'content': ['Content', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      'chenla': ['chenla', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
  darkMode: 'class',
}

