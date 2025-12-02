/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        bg: "#F59E0B",
        bgT: "#F6F7F5",
        Secondary: "#DDDECC",
        primary50: "#E4DACB",
        primary10: "#F4F1ED",
      },
    },
  },
  plugins: [],
};
