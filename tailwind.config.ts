import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image": "url(/images/shortlets/homepage.jpeg)",
        "hero-pattern": "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 44.67%, #000000 85.67%);"
      },
      boxShadow: {
          "faq":"0px 2px 10px 4px #8D42FF2E;"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom:{
          purple:{
            100:"#8D42FF"
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
