import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    gridTemplateColumns: {
      "52": "repeat(52, minmax(0, 1fr))", // Define 52 columnas
    },
  },
  plugins: [],
};

export default config;
