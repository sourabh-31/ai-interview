/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryColor: "#1d2b3a",
      },
      width: {
        15: "15%",
        40: "40%",
        45: "45%",
        50: "50%",
        60: "60%",
        80: "80%",
      },
    },
  },
  plugins: [],
};
