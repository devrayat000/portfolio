module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB400',
          accent: '#FFB40095'
        },
        paragraph: '#767676',
        title: '#2B2B2B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}