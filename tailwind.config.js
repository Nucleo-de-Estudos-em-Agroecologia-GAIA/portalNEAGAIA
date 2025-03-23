const { keyframes } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        primary: '#2e5942', // Verde escuro
        secondary: '#6b8e23', // Verde oliva
        accent: {
          DEFAULT: "#e4a663", // Cor de terra (argila)
          hover: "#d38e50", // Terra mais escura
        },
        background: '#fefae0', // Bege claro, fundo suave
        highlight: '#f4c430', // Amarelo mostarda para detalhes
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  textColor: {
    "outline": "transparent",
    "outline-hover": "#6b8e23", // verde oliva no hover do texto
  },
  stroke: {
    "outline": "#2e5942", // verde escuro para stroke
    "outline-hover": "#e4a663", // terra no hover
  },
  plugins: [require("tailwindcss-animate")],
};
