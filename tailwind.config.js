module.exports = {
  content: [
    "./components/**/*.{html,njk}",
    "./index.njk",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#E6C200',
        silver: '#C0C0C0',
        sunset: {
          DEFAULT: '#D9A15E',
          dark: '#A86C36',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};