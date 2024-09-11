/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "0.5px": "0.5px",
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
};
