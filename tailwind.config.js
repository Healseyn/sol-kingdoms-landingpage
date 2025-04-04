/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        yellowAccent: '#f6e27a',
        bgDark: '#0b0b0c',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
