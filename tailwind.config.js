/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // brand: deep teal pulled from logo, tuned darker for premium feel
        brand: {
          50: "#f1f7f9",
          100: "#dceaef",
          200: "#b5d4dd",
          300: "#84b5c5",
          400: "#4d8fa7",
          500: "#2e7390",
          600: "#1f5c78",
          700: "#1c4d65",
          800: "#1a4053",
          900: "#173545",
          950: "#0e2330",
        },
        // accent: warm amber from logo checkmark, used sparingly as highlight
        accent: {
          50: "#fdf6ed",
          100: "#fbe9d1",
          200: "#f6d09b",
          300: "#efb066",
          400: "#e69441",
          500: "#d57a28",
          600: "#b15f1f",
          700: "#8d4a1d",
          800: "#723d1c",
          900: "#5e341a",
          950: "#341a0a",
        },
        ink: {
          950: "#0b1620",
          900: "#11202b",
          800: "#162a36",
          700: "#1d3441",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
