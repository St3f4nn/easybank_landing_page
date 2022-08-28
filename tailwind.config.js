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
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
      },
      fontFamily: {
        publicsans: "'Public Sans', sans-serif",
      },
      width: {
        4.5: "18px",
        34.75: "139px",
        191.75: "767px",
        299.75: "1199px",
      },
      height: {
        70.25: "281px",
      },
      spacing: {
        0.75: "3px",
        2.75: "11px",
        4.75: "19px",
        5.5: "22px",
        5.75: "23px",
        6.5: "26px",
        7.75: "31px",
        8.25: "33px",
        8.5: "34px",
        8.75: "35px",
        10.75: "43px",
        22: "88px",
        42.25: "169px",
        42.5: "170px",
        69.5: "278px",
        128: "512px",
        146: "584px",
      },
      lineHeight: {
        1.15: "1.15",
      },
      boxShadow: {
        "header-nav": "0px 45px 50px 50px rgba(45,49,77,0.5)",
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
