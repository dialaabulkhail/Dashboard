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
          "url('https://img.freepik.com/free-vector/diverse-people-team-work-with-analytic-data-dashboard-with-graphs-charts-vector-flat-illustration-business-analysis-teamwork-multiracial-employees_107791-10485.jpg?w=996&t=st=1661459535~exp=1661460135~hmac=804249ae4a0ad25e448834b795d72c0750a76a4390bf05449ab358bbef60f53a')",
      },
    },
  },
  plugins: [],
}
