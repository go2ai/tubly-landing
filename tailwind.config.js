/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#23262A',
        'custom-blue': '#3D8DB0',  
      },
    },
  },
  plugins: [require("daisyui")],
}

