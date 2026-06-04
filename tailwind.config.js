/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        card: "#1E293B",
        accent: "#38BDF8",
        ink: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 36px rgba(56, 189, 248, 0.2)",
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle at top, rgba(56,189,248,0.22), transparent 34rem)",
      },
    },
  },
  plugins: [],
};
