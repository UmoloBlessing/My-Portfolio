/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    screens: {
      'sm': {'min': '535px'},
      // => @media (min-width: 535px) { ... }

      'md': {'min': '640px'},
      // => @media (min-width: 640px) { ... }
  
    },
    extend: {
      
      backgroundColor: {
        'Primary-1': '#181824',
        'Primary-2': '#7562E0',
        'Bakground-Grey': '#F6F6F9',
      },
      colors: {
        'headings': '#6C1BF0',
        'Body-Text': '#131126',
        'color1': '#4EE1A0',
        'color2': '#D9D9D9',
      },

      backgroundImage: {
        'banner': "url('/images/BG.png')",
      }

    },
  },
  plugins: [],
}

