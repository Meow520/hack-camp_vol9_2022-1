/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    theme: {
      extend: {
        backgroundImage: theme => ({
         'triangle-img': "url('../images/triangle.png')",
        })
      }
    }
  },
  plugins: [],
}