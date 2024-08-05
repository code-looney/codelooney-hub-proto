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
        "portrait": "url(public/images/47307CAB-0ADE-4396-9A44-A2CFF313D460.jpeg)"
      },
      colors: {
        "themeColor": "#121212"
      }
    },
  },
  plugins: [],
}