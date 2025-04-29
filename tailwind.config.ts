/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A4FF",
        bg: "#101010",
        dark: "#0C0C0C",
        footer: "#0C0C0C"
      },
      fontFamily: {
        sans: "Archivo",
      },
      boxShadow: {
        custom: "0px 3px 7.7px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, #202020 0%, #121212 100%)",
        "custom-radial": "radial-gradient(circle, #202020 0%, #121212 100%)",
      },
    },
  },
  plugins: [],
};