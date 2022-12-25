/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    // colors: {
    //   current: 'currentColor',
    //   'orange': '#EC6A30',
    //   'saunaBlue': '#4792F2',
    //   'saunaGreen': '#65DB7C',
    //   'saunaRed': '#EB4D3D',
    //   transparent: 'transparent',
    //   'yellow': '#E4E911'
    // },
    extend: {
      width: {
        128: '500px',
      },
    },
  },
}
