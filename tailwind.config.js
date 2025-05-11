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
        primary: '#019D4D', // Your primary green theme color
        'primary-dark': '#016f36', // Darker shade for hover effect
        secondary: '#333333', // Your secondary dark gray theme color
      },
    },
  },
  plugins: [],
};