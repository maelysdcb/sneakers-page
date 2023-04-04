/** @type {import('tailwindcss').Config} */
const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Kumbh Sans"],
      },
    },
  },
  plugins: [typography],
};
