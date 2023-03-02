/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        message: "message 6s",
        "scale-in-center": "scale-in-center 0.5s both",
        loading: "loading 3s",
        starting: "fadeout 4s",
        "starting-logo": "fadein-out 4s",
        fadein: "fadein 0.5s",
        usersetting: "usersetting 0.8s",
        "loading-charactor": "charactor 3s",
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
        loading: {
          "0%": { width: "0%" },
          to: { width: "97%" },
        },
        fadeout: {
          "0%": {
            opacity: 1,
            "background-color": "#000000",
          },
          "40%": {
            "background-color": "#ffffff",
          },
          "85%": {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        fadein: {
          "0%": { opacity: 0.6 },
          to: { opacity: 1 },
        },
        usersetting: {
          "0%": { opacity: 0.5, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
        "fadein-out": {
          "0%": { opacity: 0 },
          "30%": { opacity: 0 },
          "50%": { opacity: 1 },
          "70%": { opacity: 1 },
          to: { opacity: 0 },
        },
        charactor: {
          "0%": {
            top: "300px",
            left: "350px",
          },
          "20%": {
            top: "290px",
          },
          "40%": { top: "300px" },
          "60%":{top:"290px"},
          "80%":{top:"305px"},
          to: {
            top: "290px",
            left: "950px",
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
