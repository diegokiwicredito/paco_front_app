module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#5e3ec1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
