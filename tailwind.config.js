module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tuscany: "#B4A495",
        "black-olive": "#3B3B3B",
        shadow: "#847366",
      },
      fontFamily: {
        "logo-font": ["'Poiret One'"],
        sans: ["Lato", "sans-serif"],
      },
      boxShadow: {
        header: "2px 1px 7px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #C0B6AA 50%, #806F62 100%)",
      },
    },
  },
  plugins: [],
};
