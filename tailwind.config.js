/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode:"class",
  theme: {
    extend: {
      width: {
        container: '1320px',
        colors: {
          hvc: '#F95C19',
        },
      }
    },
  },
  plugins: [],
}

