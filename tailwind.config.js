/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          light: '#FFFFFF',
          dark: '#121212',
          white: '#FFFFFF',
          black: '#000000',
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          red: {
            50: '#fef2f2',
            500: '#ef4444',
            600: '#dc2626',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            700: '#15803d',
            800: '#166534',
          },
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
          display: ['var(--font-montserrat)', 'Georgia', 'serif'],
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