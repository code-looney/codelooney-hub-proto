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
        "portrait": "url(/images/IMG_0263.jpeg)"
      },
      
      colors: {
        "themeColor": "#121212"
      }
    },
  },
  plugins: [],
}