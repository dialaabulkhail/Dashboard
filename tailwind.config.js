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
        'navColor': '#afeeee'
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1654793182455-83e2a50f3494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
}
