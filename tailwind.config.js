/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: '"GT Walsheim", Helvetica'
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 30px rgba(0, 0, 0, 0.1)',
      },
      blur: {
        'xxl': '250px'
      }
    },
  },
  plugins: [],
}