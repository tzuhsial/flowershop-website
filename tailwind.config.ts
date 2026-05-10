import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fbf6ee",
          100: "#f5eadc",
        },
        blush: {
          50: "#f8ece8",
          100: "#efd5cf",
        },
        sage: {
          50: "#eef1e8",
          100: "#dde5d4",
          200: "#c6d1bd",
          900: "#384334",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};

export default config;
