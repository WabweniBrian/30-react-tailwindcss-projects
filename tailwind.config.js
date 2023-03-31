/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: "Nunito",
      poppins: "poppins",
      questrial: "Questrial",
    },
    extend: {
      colors: {
        darkBlue: "hsl(235, 21%, 11%)",
        darkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        footeTextColor: "hsl(228, 45%, 44%)",
        attributionTextColor: "hsl(234, 11%, 52%)",

        darkBlueLight: "hsl(235, 100%, 96%)",
        darkDesaturatedBlueLight: "hsl(234, 100%, 98%)",
        lightGrayishBlueLight: "hsl(235, 10%, 47%)",
        lightGrayishBlueHoverLight: "hsl(0, 0%, 70%)",
        darkGrayishBlueLight: "hsl(240, 5%, 68%)",
        veryDarkGrayishBlueLight: "hsl(230, 8%, 85%)",
      },
      gridTemplateColumns: {
        "1fr": "repeat(auto-fit, minmax(260px, 1fr))",
        "minmax-uto": "repeat(auto-fit, minmax(250px, 1fr))",
        "minmax-uto-200": "repeat(auto-fit, minmax(200px, 1fr))",
        288: "repeat(auto-fit, minmax(288px, 1fr))",
      },
      backgroundImage: {
        imageLgLight: "url('/public/images/bg-desktop-light.jpg')",
        imageSmLight: "url('/public/images/bg-mobile-light.jpg')",
        imageLgDark: "url('/public/images/bg-desktop-dark.jpg')",
        imageSmDark: "url('/public/images/bg-mobile-dark.jpg')",
        heroBg: "url('/public/images/hero.svg')",
        cartBg: "url('/public/images/products/blob3.png')",
        checkBackground:
          "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".shadow-light": {
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        },
        ".shadow-normal": {
          boxShadow: "0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.2)",
        },
        ".shadow-large": {
          boxShadow: "0.5rem 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.2)",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".border-top-light": {
          borderTop: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".text-shadow": {
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addComponents }) {
      const newComponets = {
        ".form-control": {
          border: "1px solid rgb(174, 200, 206)",
          outline: "none",
          borderRadius: "0.5rem",
          fontFamily: "inherit",
          padding: "0.2rem 0.5rem",
          display: "block",
          fontSize: "1rem",
          width: "100%",
          "&:focus": {
            border: "1px solid rgb(83, 182, 247)",
          },
        },
        ".input-with-icon": {
          border: "1px solid rgb(174, 200, 206)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "0.5rem",
          backgroundColor: "#d6d8f0",
          overflow: "hidden",
          ".form-control": {
            border: "none",
            borderRadius: "0px",
          },
          i: {
            padding: "0 0.5rem",
          },
          "&.transparent": {
            backgroundColor: "transparent",
          },
        },
      };
      addComponents(newComponets);
    }),
  ],
};
