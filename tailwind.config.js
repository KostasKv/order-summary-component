/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    colors: {
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'white': 'hsl(0, 100%, 100%)',
      'grey': '#f8f9fe',
    },
    fontFamily: {
      'sans': ['Red Hat Display', 'sans-serif'],
    },
    screens: {
      'sm': '520px',
    }
  },
  plugins: [],
}
