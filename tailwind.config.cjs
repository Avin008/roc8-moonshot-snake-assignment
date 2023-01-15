/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "100px",
      md: "500px",
      lg: "1000px",
    },
    extend: {
      gridTemplateColumns: {
        30: "repeat(30, 1fr)",
      },
      gridTemplateRows: {
        20: "repeat(20, 1fr)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
