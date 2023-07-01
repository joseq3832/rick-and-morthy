/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        rick: {
          black: {
            100: '#1A1A1A',
            200: '#1E1E20',
            DEFAULT: '#313234'
          },
          primary: {
            DEFAULT: '#11B0C8',
            200: '#42B4CA'
          },
          secondary: '#BFDE42'
        }
      }
    }
  },
  plugins: []
};
