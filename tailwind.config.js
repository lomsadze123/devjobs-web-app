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
        tablet: "url(assets/other/bg-header-tablet.svg)",
        desktop: "url(assets/other/bg-header-desktop.svg)",
      },
      colors: {
        purple: "#5964E0",
        veryDarkBlue: "#19202D",
        darkGrey: "#6E8098",
        withOpacity: "rgba(25, 32, 45, 0.1035)"
      }
    },
  },
  plugins: [],
}