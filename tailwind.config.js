/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
