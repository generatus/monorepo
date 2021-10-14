module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-black': '#171A1F',
        'brand-blue': '#436ADD',
        'brand-blue-light': '#B5C8F1',
        'brand-blue-bright': '#28DDF6',
        'brand-gray': '#272B34',
        'brand-gray-light': '#B3BDCC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
