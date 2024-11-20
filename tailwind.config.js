import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Playfair", "serif"],
        body: ["Kumbh Sans", "sans-serif"]
      },
      fontSize: {
        text: "1.2rem"
      },
      colors: {
        primary: "#0A207E",
        "primary-dark": "#020d3e",
        dark: "#1e1e1e",
        gradient: "#00000090"
      },
      backgroundImage: {
        hero: "url('./assets/imagen1.jpg')",
        cultoDominical: "url('./assets/imagen1.jpg')",
        jovenes: "url('./assets/imagen2.jpg')",
        oracion: "url('./assets/imagen3.jpg')",
        discipulado: "url('./assets/imagen4.jpg')",
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light"],
  }
};
