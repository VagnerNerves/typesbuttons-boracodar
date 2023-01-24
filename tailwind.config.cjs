/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      sansRoboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        zinc: {
          500: '#6A617F',
          600: '#3C3748',
          900: '#0B0911'
        },
        purple: {
          100: '#D9CDF7',
          400: '#9674E5',
          500: '#8257E5',
          800: '#1C162C',
          900: '#130F1E'
        }
      }
    }
  },
  plugins: []
}
