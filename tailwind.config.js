export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { brand: "#2A1830", brand2: "#1C0F22", accent: "#D9A0B8", paper: "#FCF8F9", soft: "#F4E8EC", ink: "#1E1522", mute: "#6E5F68" },
    borderRadius: { r: "0" },
    fontFamily: { display: ['"Bodoni Moda"', "Georgia", "serif"], sans: ["Jost", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
