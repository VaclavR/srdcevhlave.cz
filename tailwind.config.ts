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
        'overlay': 'rgba(13,31,48,0.7)'
      },
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
