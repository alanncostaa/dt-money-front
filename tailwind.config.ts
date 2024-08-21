import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)'],
      },
      colors: {
        "title": "var(--title)",
        "income": "hsla(var(--income))",
        "outcome": "hsla(var(--outcome))",
        "header": "var(--header)",
        "table-header": "var(--table-header)",
        "income-value": "var(--income-value)",        
        "button" : "var(--button)",
        "background": "var(--background)",
        "modal-background": "var(--modal-background)",
        "input": "var(--input)",
        "input-border": "var(--input-border)",
        "transaction-border": "var(--transaction-border)",
      },
    },
  },
  plugins: [],
};
export default config;
