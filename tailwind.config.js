/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.edge', './resources/**/*.js','./resources/**/*.ts', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        
      },
    },
  },
  plugins: [
    //require('flowbite/plugin'),
    // require('daisyui')
  ],
}
