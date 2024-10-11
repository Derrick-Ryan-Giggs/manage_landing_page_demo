/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './*.html', // This will include all HTML files in the src folder
    './*.js',   // Optional: include all JavaScript files in the src folder if you're using Tailwind with JS
  ],
  theme: {
   Breakpoints : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },

    extend: {
    colors : {
     
    }
    },
  },
  plugins: [],
}
