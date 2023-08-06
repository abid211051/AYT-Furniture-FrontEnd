/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D0E8E4', // Replace with your desired color value
        secondary: '#00FF00',
        third: '#EDEDED',
        fourth:'#E3E7ED',
        contact: '#F6F6F6'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

