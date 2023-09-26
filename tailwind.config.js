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
      },
      backgroundImage: {
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

