/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-background': "url('./Image/pexels-tima-miroshnichenko-7567554.jpg')"
      }
    },
    screens: {
      'sm': '320px',
      'lg': '750px',
      'xl': '1200px',

    }
  },
  plugins: [],
}
