/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md,astro}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,md,astro}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx,md,astro}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cav: ["Caveat", "cursive"],
        urb: ["Urbanist", "sans-serif"],
        emj: ["Material Symbols Outlined"],
      },
    },
  },
  plugins: [],
};
