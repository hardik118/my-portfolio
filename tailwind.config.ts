import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"], // Work Sans globally
      },
    },
  },
  plugins: [],
};

export default config;
