/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        form: "var(--form-shadow)"
      },
      colors: {
        bg: "var(--bg)",
        "bg-secondary": "var(--bg-secondary)",
        header: "var(--header)",
        textNormal: "var(--textNormal)",
        textTitle: "var(--textTitle)",
        textLink: "var(--textLink)",
        hr: "var(--hr)",
        "inlineCode-bg": "var(--inlineCode-bg)",
        "inlineCode-text": "var(--inlineCode-text)",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      merriweather: ["var(--font-merriweather)"],
      system: ['system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif']
    },
  },
  plugins: [],
};
