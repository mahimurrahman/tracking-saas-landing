import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        background: "var(--background)",
        border: "var(--border)",
        card: "var(--card)",
        foreground: "var(--text)",
        muted: "var(--muted)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(79, 70, 229, 0.16)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at top, rgba(79,70,229,0.18), transparent 35%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-radial": "100% 100%, 64px 64px, 64px 64px"
      }
    }
  },
  plugins: []
};

export default config;
