/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fragment-mono": ['"Fragment Mono Regular"'],
        nanum: ['"Nanum Pen Script Regular"'],
        niconne: ['"Niconne Regular"'],
      },
      fontSize: {
        "2.5xl": "1.6875rem",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        full: "100%",
      },
      colors: {
        // music palette
        "light-sunglow": "#FEDB5D",
        sunglow: "#FED33C",
        "dark-sunglow": "#CB9F01",
        "seal-brown": "#642816",
        "raisin-black": "#2D2A32",
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
