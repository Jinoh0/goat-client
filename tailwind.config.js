/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono"],
      },
      colors: {
        beigegoat: "#F5F5DC",
        graygoat: "#2D3A3A",
        orangegoat: "#D27D4B",
        purplegoat: "#AF9BB6",
      },
    },
  },
  plugins: [],
};
