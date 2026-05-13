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
          DEFAULT: "#1A1A1A",
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#D9D9D9",
          300: "#B3B3B3",
          400: "#7A7A7A",
          500: "#1A1A1A",
          600: "#141414",
          700: "#0F0F0F",
          800: "#0A0A0A",
          900: "#000000"
        },
        clinical: {
          DEFAULT: "#1A1A1A",
          50: "#F2F2F2",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#A6A6A6",
          400: "#666666",
          500: "#333333",
          600: "#1A1A1A",
          700: "#111111",
          800: "#0A0A0A",
          900: "#000000"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0, 0, 0, 0.15)",
        card: "0 4px 24px -8px rgba(0, 0, 0, 0.10)"
      },
      letterSpacing: {
        tightish: "-0.015em"
      }
    }
  },
  plugins: []
};

export default config;
