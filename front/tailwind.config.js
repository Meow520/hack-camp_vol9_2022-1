/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        message: "message 6s",
        "scale-in-center": "scale-in-center 0.5s both",
      },
      // that is actual animation
      keyframes: {
        message: {
          "0%": {
            opacity: 0,
            transform: "translateY(25px)",
            "transform-origin": "50% 50%",
            "text-shadow": "none",
          },
          "10%": {
            opacity: 1,
            transform: "translateY(0px)",
            "transform-origin": "50% 50%",
          },
          "70%": {
            opacity: 1,
          },
          to: { opacity: 0 },
        },
        "scale-in-center": {
          "0%": {
            transform: "translateY(5px)",
            opacity: "0.5",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      colors: {
        messagebox: "#FFFFFF8B",
        "messagebox-dark": "#00000050",
        "purple-red": "#C76193",
        salmon: "#FFC0B2",
        "orange-pink": "#FF8586",
        memberlist: "#FFFFFF99",
        "memberlist-dark": "#00000060",
        "purple-blue": "#6C4FB2",
        ocean: "#3C6097",
        "deep-blue": "#202EA9",
      },
    },
  },
  plugins: [],
};
