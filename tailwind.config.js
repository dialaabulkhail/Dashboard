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
          'second-pattern':
          "url('https://img.freepik.com/free-vector/people-work-open-space-office-vector-flat-illustration-coworking-workplace-interior-teamwork-meeting-freelance-job-women-men-with-laptops-clipboards-presentation-office_107791-9813.jpg?w=826&t=st=1661523309~exp=1661523909~hmac=7011c8a7196a45521bc0059ef102298da763b8a522ffdede6e9c5ed3090b2e3f')",
      
        },
    },
  },
  plugins: [],
}
