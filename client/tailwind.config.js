/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "background-light": "#F5E9D3",
        "background-dark": "#191919",
        "theme-beige": "#F5E9D3",
        "theme-black": "#000000",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
