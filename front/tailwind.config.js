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
          "70%":{
            opacity:1,
          },
          "100%": { opacity: 0 },
        },
        "pop-up": {
          "0%": {
            transform: "translateY(0)",
            "transform-origin": "50% 50%",
            "text-shadow": "none",
          },
          to: {
            transform: "translateY(-50px)",
            "transform-origin": "50% 50%",
            "text-shadow":
              "0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 30px rgba(0, 0, 0, .3)",
          },
        },
      },
      colors: {
        messagebox: "#FFFFFF6B",
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
