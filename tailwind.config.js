module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        'big': '10rem',
        'biggest': '12rem',
      },
      backgroundImage: {
        'day': "url('/day.jpg')",
        'valley': "url('/valley.png')",
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
