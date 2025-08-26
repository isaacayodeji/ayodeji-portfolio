/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "3xl": "1537px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/herobg.png')",
      },
    },
  },
  plugins: [],
}