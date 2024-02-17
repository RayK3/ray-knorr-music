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
    },
  },
  plugins: [],
};
