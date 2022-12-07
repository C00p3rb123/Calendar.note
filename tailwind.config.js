/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        robo: ['Roboto Mono', 'monospace'] 
      },
      colors: {
        maroon: '#510002',
        beige: '#F3EED9',
        lightblue: '#00BDFF',
        redbrown: '#C2625E',
        pinkish: '#FFF5F3'

      }
    },
  },
  plugins: [],
}
