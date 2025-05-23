/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'solar-flare': 'solar-flare 1.5s infinite alternate'
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'solar-flare': {
          '0%': {
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
          }
        }
      },
      screens: {
        custom: "1200px",
      },
      colors: {
        primary: '#019D4D',
        secondary: '#333333',
      },
    },
  },
  plugins: [],
};