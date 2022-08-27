/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/js/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          darkblue: "hsl(233, 26%, 24%)",
          limegreen: "hsl(136, 65%, 51%)",
          brightcyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          grayishblue: "hsl(233, 8%, 62%)",
          lightgrayishblue: "hsl(220, 16%, 96%)",
          verylightgray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        publicsans: "'Public Sans', sans-serif",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "688px",
          },
          "@screen md": {
            maxWidth: "816px",
          },
          "@screen lg": {
            maxWidth: "1072px",
          },
          "@screen xl": {
            maxWidth: "1158px",
          },
          "@screen 2xl": {
            maxWidth: "1158px",
          },
        },
      });
    },
  ],
};
