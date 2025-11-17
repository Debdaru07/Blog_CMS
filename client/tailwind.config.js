/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        beige: "#F5E9D3",          // <-- REQUIRED (Your HTML uses this)
        "theme-beige": "#F5E9D3",
        "theme-black": "#000000",
        "background-light": "#F5E9D3",
        "background-dark": "#191919",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  safelist: [
    // Prevent purge for known needed classes
    "text-beige", "bg-beige",
    "text-theme-beige", "bg-theme-beige",
    "text-primary", "bg-primary",
    "text-theme-black",
    "text-white",
    "bg-black",
  ],
  plugins: [
    require("@tailwindcss/forms"),
  ],
};