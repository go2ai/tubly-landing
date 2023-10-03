/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#23262A',
      },
    },
  },
  plugins: [require("daisyui")],
}

