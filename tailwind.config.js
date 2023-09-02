/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'black-main': '#0B0D17',
        'sky-blue': '#D0D6F9',
      },
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sans: ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

