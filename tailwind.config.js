/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35', // vibrant orange
          dark: '#E85826',
        },
        secondary: {
          DEFAULT: '#2E7D32', // forest green
          light: '#4CAF50',
        },
      },
    },
  },
  plugins: [],
};