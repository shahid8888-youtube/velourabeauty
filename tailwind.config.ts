import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        "ivory-deep": "#F3EDE4",
        espresso: "#2A211D",
        "espresso-soft": "#5C4F49",
        rosegold: "#B76E79",
        champagne: "#C9A66B",
        blush: "#F1DFDA",
        deeprose: "#8C4550",
        line: "#E4D9CE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1.16) translate(-1.5%,-1%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(183,110,121,0.35)" },
          "50%": { boxShadow: "0 0 0 10px rgba(183,110,121,0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        kenburns: "kenburns 14s ease-in-out infinite alternate",
        floaty: "floaty 3.5s ease-in-out infinite",
        shimmer: "shimmer 1.1s ease",
        pulseGlow: "pulseGlow 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
