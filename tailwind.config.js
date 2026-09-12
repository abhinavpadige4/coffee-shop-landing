/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f8f4f1',
          100: '#f1e9e2',
          200: '#e5d9ce',
          300: '#d4c4b8',
          400: '#c3aea2',
          500: '#b2998c',
          600: '#a18476',
          700: '#806a5c',
          800: '#605042',
          900: '#40362e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}