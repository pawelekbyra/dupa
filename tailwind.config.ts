import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "nav": "#1A1A1A",
        accent: "#FF4081",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B3B3B3",
      },
    },
  },
  plugins: [],
};
export default config;
