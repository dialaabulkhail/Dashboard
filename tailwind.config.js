/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#5a8cc80f',
        'main-bg-dark': '#20232A',
        'second-bg-dark': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
}
