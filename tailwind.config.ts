module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      clg: "1365px",
      clg2: "1367px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        login: "url('/img/login-bg.jpg')",
      },
      colors: {
        dark: "#141414",
        primary: "#f16134",
        secondary: "#5c57a6",
      },
    },
  },
  plugins: [],
};