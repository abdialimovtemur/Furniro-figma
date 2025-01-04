/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true, // Containerni markazlashtiradi
      padding: "1rem", // Har ikki tomondan padding qo'shadi
      maxWidth:"1440px",
    },
  },
  plugins: [],
};
