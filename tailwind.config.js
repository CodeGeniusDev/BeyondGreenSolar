/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#019D4D', // Your primary green theme color
          secondary: '#333333',    // Your secondary dark gray theme color
        },
      },
    },
    plugins: [],
  };