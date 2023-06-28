/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'
export default {
  content: ['./src/**/*.{html,vue,js}', 'node_modules/preline/dist/*.js'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    preline
  ],
}

