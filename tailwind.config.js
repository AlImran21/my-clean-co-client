module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",

          "base-100": "#fafafa",
        },
      },
      {
        darkColor: {
          "primary": "#D9F99D",

          "secondary": "#FDE68A",

          "accent": "#4B5563",

          "neutral": "#F3F4F6",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#F59E0B",

          "error": "#FB7185",

          "base-100": "#1F2937",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
