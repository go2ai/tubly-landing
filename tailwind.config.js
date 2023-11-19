/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'custom-gray': '#23262A',
        'custom-blue': '#3D8DB0',
        'custom-purple': '#7138a0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

