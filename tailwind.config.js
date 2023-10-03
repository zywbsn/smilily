// import colors from "tailwindcss/colors";
// import { withMaterialColors } from "tailwind-material-colors";

const colors = require("tailwindcss/colors");
const { withMaterialColors } = require("tailwind-material-colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

/** @type {import("tailwindcss").Config} */
module.exports = withMaterialColors(
  {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./packages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          ...colors
        }
      }
    },
    plugins: []
  },
  {
    // primary: "#D1FAE5"
    primary: "#fff1f0"
    // primary: "#4F46E5"
    // primary: "#6750A4"
  }
);
