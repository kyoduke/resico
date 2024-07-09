/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "resico-dark-blue": "#0e0a41",
        "resico-white": "#ffffff",
        "resico-light-blue": "#8ea3cd"
      }
    },
  },
  plugins: [],
}

