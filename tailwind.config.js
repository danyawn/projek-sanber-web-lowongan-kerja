/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark" : "#001E3F",
        "main-light" : "#00B4C6",
        "secondary-dark" : "#6F0018",
        "secondary-light" : "#DAF7A6",
      }
    },
  },
  plugins: [],
}