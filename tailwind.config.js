/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(assets/other/bg-header-mobile.svg)",
      },
      colors: {
        purple: "#5964E0",
        veryDarkBlue: "#19202D",
        darkGrey: "#6E8098",
      }
    },
  },
  plugins: [],
}