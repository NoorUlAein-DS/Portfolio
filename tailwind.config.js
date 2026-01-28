/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Ye zaroori hai taaki Light/Dark mode switch sahi chale
  theme: {
    extend: {
      colors: {
        lilac: {
          light: '#E9D5FF',
          DEFAULT: '#d4a5e0',
          dark: '#C084FC',
        },
        tealCustom: '#2dd4bf',
      },
      // Gradients aur animations ke liye agar zaroorat ho
    },
  },
  plugins: [],
}