module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    family: {
      Roboto: ['Roboto', 'sans-serif']
    },
    boxShadow: {
      customShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    }
  },
  plugins: []
}
