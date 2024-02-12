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
        "warm-gray": "#A9A9A9",
        arsenic: "#414141",
        "black-shadows": "#C2B9B2",
        snow: "#FFFBFB",
        "philippine-silver": "#B3B3B3",
        "white-coffee": "#E4DDD5",
        "granite-gray": "#66615C",
      },
      fontFamily: {
        "logo-font": ["'Poiret One'"],
        "playfair-display": ["Playfair Display"],
        montserrat: ["Montserrat"],
        sans: ["Lato", "sans-serif"],
      },
      boxShadow: {
        header: "2px 1px 7px 0px rgba(0, 0, 0, 0.25)",
        img: "1px -1px 10.1px rgba(0, 0, 0, 0.85)",
        about: "-20px -20px 30px 0px rgba(0, 0, 0, 0.16)",
        btn: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        bannerImage: "1px 0px 43.2px rgba(0, 0, 0, 0.69)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #C0B6AA 50%, #806F62 100%)",
        gradient1: "linear-gradient(180deg, #C0B6AA 0%, #837265 100%)",
        servicesBanner: "url('../images/services-banner1.png')",
      },
      screens: {
        desktop: "1120px",
        laptopLg: "1000px",
        laptopMd: "900px",
        laptopSm: "750px",
        tablet: "690px",
        mobile: "630px",
        mobileSm: "450px",
      },
    },
  },
  plugins: [],
};
