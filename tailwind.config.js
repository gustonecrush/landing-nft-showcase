/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        badScript: ["Bad Script", "cursive"],
      },
      colors: {
        background: "#090811",
        text: "#B6B1DE",
        heading: "#FFFFFF",
        sub_heading: "#FEFCFD",
        text_label: "#515151",
        label: "#C7FA76",
        btn_primary: "#2D1959",
        text_btn_primary: "#FAFAFA",
        btn_secondary: "#F9C85A",
        text_btn_secondary: "#564318",
        heading_decoration: "#F2418F",
      },
    },
  },
  plugins: [],
};
