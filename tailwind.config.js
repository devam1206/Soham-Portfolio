import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        "muted-foreground": "#71717a",
        border: "#27272a",
        surface: "#18181b",
        "surface-elevated": "#27272a",
        accent: "#7dd3fc",
        "accent-hover": "#bae6fd",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Source Serif 4"', "Georgia", "serif"],
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-invert-body": theme("colors.muted"),
            "--tw-prose-invert-headings": theme("colors.foreground"),
            "--tw-prose-invert-lead": theme("colors.muted"),
            "--tw-prose-invert-links": theme("colors.accent"),
            "--tw-prose-invert-bold": theme("colors.foreground"),
            "--tw-prose-invert-bullets": theme("colors.muted-foreground"),
            "--tw-prose-invert-quotes": theme("colors.muted"),
            "--tw-prose-invert-quote-borders": theme("colors.border"),
            "--tw-prose-invert-captions": theme("colors.muted-foreground"),
            "--tw-prose-invert-code": theme("colors.foreground"),
            "--tw-prose-invert-pre-code": theme("colors.muted"),
            "--tw-prose-invert-pre-bg": theme("colors.surface"),
            "--tw-prose-invert-th-borders": theme("colors.border"),
            "--tw-prose-invert-td-borders": theme("colors.border"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
