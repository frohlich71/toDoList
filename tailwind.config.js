/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'input': '#333333'
        
      },
      width: {
        128: '90rem',
        110: '39.875rem'
      },
      outlineWidth: {
        10: '12px',
      }
    },
  },
  plugins: [],
}
