module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tuscany: "#B4A495",
        "black-olive": "#3B3B3B",
        shadow: "#847366",
        "sonic-silver": "#767676",
        "deep-taupe": "#7D6C60",
      },
      fontFamily: {
        "logo-font": ["'Poiret One'"],
        sans: ["Lato", "sans-serif"],
      },
      boxShadow: {
        header: "2px 1px 7px 0px rgba(0, 0, 0, 0.25)",
        about1: "1px -1px 10.1px rgba(0, 0, 0, 0.85)",
        about2: "-20px -20px 30px 0px rgba(0, 0, 0, 0.16)",
        btn: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #C0B6AA 50%, #806F62 100%)",
      },
    },
  },
  plugins: [],
};
