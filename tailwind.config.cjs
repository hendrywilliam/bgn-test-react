/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "starwars-yellow": "#FFE81F",
      },
    },
  },
  plugins: [],
};
