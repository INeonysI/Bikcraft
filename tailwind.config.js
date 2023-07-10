/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        botao: {
          fundo: {
            preto: "#111111",
            hover: "#2E2E2E",
          },
        },
      },
    },
  },
  plugins: [],
};
