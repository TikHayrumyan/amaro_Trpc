import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "905px",
      // => @media (min-width: 768px) { ... }

      lg: "1240px",
      // => @media (min-width: 1024px) { ... }
      
      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        
      },
      boxShadow: {
        customShadow:
        "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        darkTik: "#272727",
        redTik: "#D9002B",
        whiteTik: "#ffffff",
        "gray-dark-Tik": "#25282B",
        "gray-light_Tik": "#52575C",
        "gray-light-text-Tik": "#606060",
        TikAccountMenuIcon : "#8C0025"
      },
      
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
} satisfies Config;
