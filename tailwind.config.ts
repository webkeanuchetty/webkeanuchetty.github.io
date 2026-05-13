import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#2D3436",
          50: "#F5F6F7",
          100: "#E6E8EA",
          200: "#C8CCCF",
          300: "#A4AAAE",
          400: "#6C7378",
          500: "#2D3436",
          600: "#262C2E",
          700: "#1F2426",
          800: "#171B1D",
          900: "#0F1213"
        },
        clinical: {
          DEFAULT: "#0984E3",
          50: "#EAF5FE",
          100: "#CFE7FC",
          200: "#9FCFF9",
          300: "#6FB7F6",
          400: "#3F9FF3",
          500: "#0984E3",
          600: "#076BB8",
          700: "#05528C",
          800: "#033961",
          900: "#022036"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(45, 52, 54, 0.15)",
        card: "0 4px 24px -8px rgba(9, 132, 227, 0.12)"
      },
      letterSpacing: {
        tightish: "-0.015em"
      }
    }
  },
  plugins: []
};

export default config;
