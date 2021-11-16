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
        'morning': "url('/morning.jpg')",
        'afternoon': "url('/afternoon.jpg')",
        'evening': "url('/night.jpg')",
        'night': "url('/night.jpg')",
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
