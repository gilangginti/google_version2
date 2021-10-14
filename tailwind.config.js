module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
