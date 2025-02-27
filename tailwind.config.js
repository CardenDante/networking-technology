/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
          'white': '#FFFFFF', // Add explicit white color
          'black': '#000000', // Add explicit black color
          'gray': {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          'red': {
            50: '#FEF2F2',
            500: '#EF4444',
            600: '#DC2626',
          },
          'green': {
            50: '#F0FDF4',
            100: '#DCFCE7',
            500: '#22C55E',
            700: '#15803D',
            800: '#166534',
          },
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