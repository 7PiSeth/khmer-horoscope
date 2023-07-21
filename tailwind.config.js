/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'battambang': ['battambang', 'sans-serif'],
      'content': ['Content', 'serif'],
      'chenla': ['chenla', 'serif'],
      'moul': ['moul', 'serif'], 
      'moulpali': ['moulpali', 'serif'], 
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}

