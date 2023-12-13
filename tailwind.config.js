/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        gray: "#EBEEF0",
        white: "#FFF",
        hoverPrimary: "#313131",
        borderGray: "#DDDDDD",
        grayHover: "#efefef",
        thTextGray: "#969696",
        error: "#E92C2C",

        statusCompleteBG: "#D0F4FF",
        statusCompleteText: "#093E8C",
        statusRunningBG: "#FBF5C4",
        statusRunningText: "#8B5401",

      }
    },
  },
  plugins: [],
}

