import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crimson: {
          50: "#fff0f0",
          100: "#ffe0e0",
          200: "#ffc5c5",
          300: "#ff9999",
          400: "#ff5c5c",
          500: "#ff2626",
          600: "#e80000",
          700: "#c00000",
          800: "#9c0000",
          900: "#7a0000",
          DEFAULT: "#C41230",
        },
        onyx: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
          dark: "#0d0d0d",
        },
        silver: {
          DEFAULT: "#9ca3af",
          light: "#e5e7eb",
          dark: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(196,18,48,0.7) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
