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
      'xxs': '280px',  // Galaxy Z Fold closed
      'xs': '320px',   // iPhone SE 1st gen
      'sm': '375px',   // iPhone SE 2nd/3rd, iPhone 8
      'md': '430px',   // iPhone 14 Pro Max
      'lg': '640px',   // Small tablets
      'xl': '768px',   // iPad Mini
      '2xl': '1024px', // iPad Pro
      '3xl': '1280px', // Desktop
      '4xl': '1536px', // Large desktop
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
        // Self-hosted Inter (iOS SF Pro alternative)
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        // Self-hosted Source Serif (premium serif)
        serif: [
          'Source Serif',
          'Georgia',
          'serif',
        ],
      },
      fontSize: {
        // Fluid typography for responsive design
        'fluid-xs': 'clamp(0.625rem, 2.5vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 3vw, 0.875rem)',
        'fluid-base': 'clamp(0.875rem, 3.5vw, 1rem)',
        'fluid-lg': 'clamp(1rem, 4vw, 1.125rem)',
        'fluid-xl': 'clamp(1.125rem, 4.5vw, 1.25rem)',
        'fluid-2xl': 'clamp(1.25rem, 5vw, 1.5rem)',
        'fluid-3xl': 'clamp(1.5rem, 6vw, 1.875rem)',
        'fluid-4xl': 'clamp(1.875rem, 7vw, 2.25rem)',
        'fluid-5xl': 'clamp(2.25rem, 8vw, 3rem)',
        'fluid-6xl': 'clamp(2.5rem, 9vw, 3.75rem)',
      },
      borderRadius: {
        'ios-sm': '8px',
        'ios-md': '12px',
        'ios-lg': '16px',
        'ios-xl': '20px',
        'ios-2xl': '24px',
      },
      boxShadow: {
        'ios-sm': '0 2px 8px rgba(44, 44, 44, 0.06), 0 1px 2px rgba(44, 44, 44, 0.04)',
        'ios-md': '0 4px 16px rgba(44, 44, 44, 0.08), 0 2px 4px rgba(44, 44, 44, 0.04)',
        'ios-lg': '0 8px 32px rgba(44, 44, 44, 0.12), 0 4px 8px rgba(44, 44, 44, 0.06)',
        'ios-xl': '0 16px 48px rgba(44, 44, 44, 0.16), 0 8px 16px rgba(44, 44, 44, 0.08)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      letterSpacing: {
        'ios-tight': '-0.02em',
        'ios-normal': '-0.01em',
      },
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ios-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
