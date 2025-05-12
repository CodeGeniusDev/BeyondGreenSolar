/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        custom: "1200px",
      },
      colors: {
        primary: '#019D4D',
        'primary-dark': '#016f36',
        secondary: '#333333',
      },
    },
  },
  plugins: [],
};