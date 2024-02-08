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
        primary: "#2B67E8",
        input: "#E3ECFF",
        success: "#0A9A38",
        destructive: "#E70000",
      },
    },
  },
  plugins: [],
};
export default config;
