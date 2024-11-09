import daisyui from 'daisyui'
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
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light"],
  }
}