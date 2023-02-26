/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "disappear 6s",
      },
      // that is actual animation
      keyframes: {
        disappear: {
          "0%": { opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      colors: {
        messagebox: "rgba(255, 255, 255, 0.42)",
        "purple-red": "#C76193",
        salmon: "#FFC0B2",
        "orange-pink":"#FF8586"
      },
    },
  },
  plugins: [],
};
