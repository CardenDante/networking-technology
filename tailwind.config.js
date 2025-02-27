/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': {
            DEFAULT: '#0F2377', // Deep blue from the flier
            light: '#2E4DA7',
            dark: '#091a59',
          },
          'accent': {
            DEFAULT: '#F5CA00', // Gold/yellow from the flier
            light: '#FFD833',
            dark: '#D9B500',
          },
          'secondary': {
            DEFAULT: '#2E8BC0', // Light blue from the flier
            light: '#50A9D9',
            dark: '#1D6D9B',
          },
          'light': '#FFFFFF',
          'dark': '#121212',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
        },
        borderRadius: {
          'circle': '50%',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  };