module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "almost-screen": "calc(-16rem + 100vh)",
      },
    },
  },

  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
