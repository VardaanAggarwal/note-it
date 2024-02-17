/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["night", "dark", "cupcake"],
  plugins: [require("daisyui")],
};
