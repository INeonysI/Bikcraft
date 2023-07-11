/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cor: {
          c12: "#000000",
          c11: "#111111",
          c10: "#2E2E2E",
          c9: "#404040",
          c8: "#595959",
          c7: "#717171",
          c6: "#9C9C9C",
          c5: "#B2B2B2",
          c4: "#CCCCCC",
          c3: "#DEDEDE",
          c2: "#EDEDED",
          c1: "#F7F7F7",

          p5: "#332200",
          p4: "#664400",
          p3: "#A66F00",
          p2: "#E4A30B",
          p1: "#FFBB00",

          botao: {
            l1: "#ffbf00",
            r1: "#f2a50c",
            l2: "#ffb60d",
            r2: "#e59317",
          },
        },
      },
      boxShadow: {
        conteudoVazadoDesktop: "inset 0 -120px #ffffff",
        conteudoVazadoMobile: "inset 0 -60px #ffffff",
        conteudoVazadoYDesktop: "inset 0 120px #ffffff, inset 0 -120px #ffffff",
        conteudoVazadoYMobile: "inset 0 60px #ffffff, inset 0 -60px #ffffff",
      },
      padding: {
        15: "3.725rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      minWidth: {
        bicicleta: "280px",
      },
    },
  },
  plugins: [],
};
