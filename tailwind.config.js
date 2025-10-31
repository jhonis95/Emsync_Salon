/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.edge', './resources/**/*.js', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('daisyui')
  ],
}
