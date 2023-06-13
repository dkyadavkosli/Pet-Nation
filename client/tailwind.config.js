/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'wq': '500px',
    // },
    extend: {
      height:{
        "102":"27rem",
        "103":"90vh"
      },
      width:{
        "103":"25vw"
      },
      screens: {
        'wq': '450px',
        'we': '350px',
        'wr': '600px'
      }
    },
  },
  plugins: [],
}
