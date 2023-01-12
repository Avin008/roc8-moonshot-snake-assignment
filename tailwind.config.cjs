/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        30: "repeat(30, 1fr)",
      },
      gridTemplateRows: {
        20: "repeat(20, 1fr)",
      },
    },
  },
  plugins: [],
};
