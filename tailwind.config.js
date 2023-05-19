/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontFamily:{
      Poppins:["Poppins, sans-seri"],
    },
    container:{
      center: true,
      padding: "lrem",
      screens: {
        lg:"1124px",
        xl:"1124px",
      }
    }
  },
  plugins: [],
}

