module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7e5',
          100: '#fff0cc',
          200: '#ffe099',
          300: '#ffd166',
          400: '#ffc233',
          500: '#ffb300',
          DEFAULT: '#ffb300',
          600: '#e6a100',
          700: '#b37d00',
          800: '#805900',
          900: '#664700',
          accent: '#FFB40095',
        },
        paragraph: '#767676',
        title: '#2B2B2B',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
}
