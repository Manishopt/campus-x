/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2d6886",
        "accent-green": "#28A745",
        "background-light": "#f6f7f8",
        "background-dark": "#141b1e",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
