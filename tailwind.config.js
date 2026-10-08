/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dll: {
          blue: "#1769E8",
          blueDeep: "#124FBA",
          ink: "#123A7A",
          muted: "#5476A9",
          pale: "#F0F6FF",
          line: "#DCE9FB",
          yellow: "#FFD84D",
          yellowPale: "#FFF8DB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Manrope", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 55px rgba(23, 105, 232, 0.09)",
        soft: "0 8px 28px rgba(23, 105, 232, 0.08)",
      },
    },
  },
  plugins: [],
};
