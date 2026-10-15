import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        vensai: {
          bg: "#070A12",
          surface: "#0C1222",
          card: "#111A2E",
          elevated: "#17233D",
          border: "#1E2D4A",
          blue: "#0066FF",
          electric: "#0A84FF",
          cyan: "#00D2FF",
          sky: "#38BDF8",
          // Map violet to the logo's electric royal blue so all primary accents match the logo
          violet: "#0A84FF",
          text: "#F8FAFC",
          muted: "#94A3B8",
          dark: "#04070D",
          glow: "rgba(10, 132, 255, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "blue-glow": "0 0 30px -5px rgba(10, 132, 255, 0.35)",
        "cyan-glow": "0 0 30px -5px rgba(0, 210, 255, 0.35)",
        "violet-glow": "0 0 30px -5px rgba(10, 132, 255, 0.35)",
        "card-glow": "0 8px 30px -4px rgba(0, 0, 0, 0.6), 0 0 20px -2px rgba(10, 132, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
