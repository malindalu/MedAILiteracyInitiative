import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
