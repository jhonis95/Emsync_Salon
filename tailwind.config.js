/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './resources/**/*.edge',
      './resources/**/*.js',
      './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
        // require('daisyui')
    ],
}