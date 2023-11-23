/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'blueColor' : '#2a68ff',
        'greyIsh' : '#f1f4f'
      }
    },
  },
  plugins: [],
}

