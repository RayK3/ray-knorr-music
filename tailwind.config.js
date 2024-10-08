/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fragment-mono": ['"Fragment Mono Regular"'],
        nanum: ['"Nanum Pen Script Regular"'],
        niconne: ['"Niconne Regular"'],
        raleway: ['"Raleway Regular"'],
        ibmplex: ['"IBMPlexSansArabic Regular"'],
      },
      fontSize: {
        "2.5xl": "1.6875rem",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        full: "100%",
      },
      height: {
        18: "4.5rem",
      },
      width: {
        "9/10": "90%",
      },
      colors: {
        // music palette
        "extreme-light-sunglow": "#fff1bd",
        "very-light-sunglow": "#fce388",
        "light-sunglow": "#FEDB5D",
        sunglow: "#FED33C",
        "dark-sunglow": "#CB9F01",
        "light-seal-brown": "#a16102",
        "seal-brown": "#642816",
        "raisin-black": "#2D2A32",
        "dark-raisin-black": "#211f24",
        "myrtle-green": "#387780",
        "dark-slate-gray": "#2C5C63",

        // sse palette
        mint: "#03CEA4",
        celeste: "#D6FFFD",
        "dark-celeste": "#ADFFFB",
        "cal-poly-green": "#25442E",
        "ultra-violet": "#545479",
      },
    },
  },
  plugins: [],
};
