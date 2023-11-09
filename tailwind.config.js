/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#283618",
        "light-green": "#606c38",
        "light-yellow": "#fefae0",
        "light-orange": "#dda15e",
        orange: "#ff914e",
        "dark-orange": "#db6116",
        "dark-white": "#fffffc",
        "light-gray": "#f5f3f4",
        gray: "#b1a7a6",
        "dark-gray": "#353535",
        "light-black": "#161a1d",
      },
      fontFamily: {
        eczar: ["var(--font-eczar)"],
        "pt-sans": ["var(--font-pt-sans)"],
        "abril-fatface": ["var(--font-abril-fatface)"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { transform: "translate3d(0,100%,0)", opacity: 0 },
          "50%": { transform: "translate3d(0,40%,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 },
        },
        "fade-down": {
          "0%": { transform: "translate3d(0,-100,0)", opacity: 0 },
          "50%": { transform: "translate3d(0,-40%,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 1s linear",
        "fade-up": "fade-up 1s linear",
        "fade-down": "fade-down 1s linear",
      },
      backgroundImage: {
        "hero-img": "url('/img/burger-guy.jpg')",
        "section-title-img": "url('/img/section-title.png')",
      },
      screens: {
        xs: "320px",
        sm: "390px",
        md: "768px",
        lg: "1024px",
      },
    },
    plugins: [],
  },
};
