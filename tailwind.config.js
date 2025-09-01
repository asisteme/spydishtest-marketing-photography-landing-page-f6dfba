/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#f1f1f6',
        brandDark: '#323261',
        brandMid: '#4c4c96',
        accent: '#ff9f43',
        soft: '#fafafa'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
