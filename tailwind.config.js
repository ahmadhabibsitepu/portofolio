/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "waving": {
          from: { transform: "rotate(-5deg)" },
          to: { transform: "rotate(25deg)" },
        },
        "caret": {
          '0%': {
            opacity: '1',
          },
          '0.1%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0',
          },
          '50.1%': {
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
        },
        "fading-in": {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        "loading-pulse": {
          "0%": { opacity: .3 },
          "30%": { opacity: 1 },
          "100%": { opacity: .3 },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-32px)", opacity: 0 },
          to: { transform: "translateY(0px)", opacity: 1 }
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(32px)", opacity: 0 },
          to: { transform: "translateY(0px)", opacity: 1 }
        },
        "increase-height": {
          from: { "max-height": 0, opacity: 0 },
          to: { "max-height": "200px", opacity: 1 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "waving": "waving 1s linear infinite alternate",
        "caret": "caret 1s linear infinite",
        "fading-in": "fading-in 1s ease-out both",
        "loading-pulse": "loading-pulse 1.5s linear infinite both",
        "slide-in-from-top": "slide-in-from-top 1s both",
        "slide-in-from-bottom": "slide-in-from-bottom 1s both",
        "increase-height": "increase-height 700ms both",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
