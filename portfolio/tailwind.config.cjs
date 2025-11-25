/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        accent: '#61dafb',
        accent2: '#ff7a59'
      }
    }
  },
  plugins: []
}
