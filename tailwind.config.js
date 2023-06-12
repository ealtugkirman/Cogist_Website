/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cats': 'url("./src/assets/images.jpeg")'
      },
      colors: {
        'custom': '#282828',
      }
    },
    fontFamily: {
      'first': ['Poppins'],
      'second': ['Roboto']
    }
  },
  plugins: [],
}
