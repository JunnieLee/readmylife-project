/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        mystical: {
          100: "#f5f0e6", // light beige
          200: "#e6dfd1", // beige
          300: "#d7cfc1", // darker beige
          400: "#b1a89a", // light warm gray
          500: "#8c8274", // warm gray
          600: "#695f54", // darker warm gray
          700: "#4d4639", // brown
          800: "#322d25", // dark brown
          900: "#1a1712", // very dark brown
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "hangi-texture": "url('/assets/hangi-texture.png')",
      },
      animation: {
        "candle-flicker": "flicker 1.5s infinite alternate",
      },
      keyframes: {
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
