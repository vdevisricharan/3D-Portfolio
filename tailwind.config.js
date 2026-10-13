/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Strict Phase 2.1 Neon Cyber-Noir Palette
        "void-black": "#08060F",
        "midnight-purple": "#171126",
        "neon-purple": "#9B4DFF",
        "electric-lavender": "#C4A2FF",
        "spider-red": "#FF304F",
        "neon-white": "#F7F5FF",
        "muted-silver": "#BDB4CC",

        // Legacy semantic aliases mapped to the new design tokens
        primary: "#08060F",
        secondary: "#BDB4CC",
        tertiary: "#171126",
        "black-100": "#120D1E",
        "black-200": "#0C0916",
        "white-100": "#F7F5FF",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "Impact", "sans-serif"],
        sans: ['"Space Grotesk"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0px 24px 64px -16px rgba(8, 6, 15, 0.9), 0px 0px 1px 1px rgba(155, 77, 255, 0.18)",
        "neon-purple": "0 0 25px -4px rgba(155, 77, 255, 0.45)",
        "neon-red": "0 0 25px -4px rgba(255, 48, 79, 0.45)",
        "comic-frame": "4px 4px 0px 0px rgba(155, 77, 255, 0.35)",
        "comic-frame-red": "4px 4px 0px 0px rgba(255, 48, 79, 0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 72% 38%, rgba(155, 77, 255, 0.20) 0%, rgba(23, 17, 38, 0.45) 42%, rgba(8, 6, 15, 0.98) 80%)",
      },
    },
  },
  plugins: [],
};