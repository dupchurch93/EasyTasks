module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        royalBlue: "#395cff",
        royalBlueLight: "#5271ff",
      },
      gridTemplateRows: {
        splash: "100%",
        standardLayout: "auto auto auto"
      },
      gridTemplateColumns: {
        splash: "70% auto",
      },
      margin: {
        twenty: "15%",
      },
      boxShadow: {
        signUp: "3px 3px 2px 1px grey"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
