/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00714B',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #00714B 1px, transparent 1px), linear-gradient(to bottom, #00714B 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '20px 20px',
      },
    },
  },
  plugins: [],
}; 