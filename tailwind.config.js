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
        primary: '#006cb7',
        secondary: '#4e9ed0',
        accent: '#004a7f',
        surface: '#f8f8f6',
        neutral: '#e6ebef',
      },
    },
  },
  plugins: [],
}
