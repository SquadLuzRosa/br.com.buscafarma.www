/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanGreen100: "#DCFAF0",
      }
    },
  },
  plugins: [],
}

