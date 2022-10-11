/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:   `Open Sans, sans-serif`
      },
      colors: {
        blue: {
          800: '#004AAD'
        }
      }
    },
  },
  plugins: [],
}
