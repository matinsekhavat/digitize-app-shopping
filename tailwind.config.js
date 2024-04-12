/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      fontFamily: {
        // sans: "Vazir",
        vazir: "vazir",
        vazirBold: "vazir-bold",
      },
      dropShadow: {
        nav: "1px 1px 10px  #000",
      },
    },
  },
  plugins: [],
};
