module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        faintRed: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffb3b3',
          400: '#ff8080',
          500: '#ff4d4d',
          600: '#e60000',
          700: '#b30000',
          800: '#800000',
          900: '#4d0000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
