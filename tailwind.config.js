/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A38B71',
        BG: '#F3F0EA',
        BGG: '#F6F7F5',
        Secondary: '#DDDECC',
        primary50: '#E4DACB',
        primary10: '#F4F1ED',
      },
      textColor: {
        Text: '#2A2118',
        Paragraph: '#5D5D5D',
      },
    },
  },
  plugins: [],
};
