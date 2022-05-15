  // tailwind.config.js
  module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'Sky':'#075985',
          'Cyan':'#0891b2',
          'violet':'#7c3aed',
          'Rose':'#be123c',
          'Orange':'#c2410c',
          'Skylight':'#f0f9ff',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }