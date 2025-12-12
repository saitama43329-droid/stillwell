import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',   // Galaxy Z Fold open, small phones
      'sm': '640px',   // Default Tailwind
      'md': '768px',   // Default Tailwind
      'lg': '1024px',  // Default Tailwind
      'xl': '1280px',  // Default Tailwind
      '2xl': '1536px', // Default Tailwind
    },
    extend: {
      colors: {
        cream: "#F5F1E8",
        sage: "#8B9D83",
        charcoal: "#2C2C2C",
        terracotta: "#C97D60",
        warmWhite: "#FDFBF7",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
