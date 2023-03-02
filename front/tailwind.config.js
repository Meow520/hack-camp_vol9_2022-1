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
        messagebox: "#FFFFFF6B",
        "messagebox-dark": "#00000050",
        "purple-red": "#C76193",
        salmon: "#FFC0B2",
        "orange-pink": "#FF8586",
        memberlist: "#FFFFFF99",
        "memberlist-dark":"#00000060",
        "purple-blue": "#6C4FB2",
        ocean: "#3C6097",
        "deep-blue": "#202EA9",
      },
      // backgroundImage: {
      //   triangle: "url('./src/images/triangle.png')",
      //   "triangle-dark": "url('./src/images/triangle_dark.png')",
      // },
    },
  },
  plugins: [],
};
