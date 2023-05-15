/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Space-Grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'basic-light-blue': '#2B99e5',
        'basic-blue': '#2B8CE5',
        'background-dark': '#101313',
        'text-dark': '#101313',
        'input-grey': '#101313',
        'border-grey': 'rgba(255, 255, 255, 0.1)',
        'light-grey': 'rgba(250, 250, 250, 0.1)',
        'selected-category-bg': 'rgba(33, 122, 255, 0.1)',
      },
      fontSize: {
        '3.5xl': '32px',
      },
      borderRadius: {
        '10px': '10px',
        '16px': '16px',
      },
      spacing: {
        '18': '72px'
      }
    },
  },
  plugins: [],
};
