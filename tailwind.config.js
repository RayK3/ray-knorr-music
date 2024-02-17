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
      colors: {
        sunglow: "#FED33C",
        "seal-brown": "#642816",
        "raisin-black": "#2D2A32",
        "myrtle-green": "#387780",
        "dark-slate-gray": "#2C5C63",
        mint: "#03CEA4",
      },
    },
  },
  plugins: [],
};
