/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanGreen400: "#4EB398",
        oceanGreen100: "#DCFAF0",
        oceanGreen50:"#F3FAF8",
      }
    },
  },
  plugins: [],
}

