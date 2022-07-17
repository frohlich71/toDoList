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
      },
      boxShadow: {
        '3xl':'0px 3px 8px rgba(0, 0, 0, 0.24)',
        '4zl': '24px rgba(0.24)'
      }
    },
  },
  plugins: [],
}
