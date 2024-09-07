/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "portrait": "url(/images/zero-take-sc7EccNtU88-unsplash.jpg)"
      },
      
      colors: {
        "themeColor": "#121212"
      }
    },
  },
  plugins: [],
}