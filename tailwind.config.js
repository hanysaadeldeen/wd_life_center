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
      fontSize: {
        // Body small: 16px, line-height 32px
        base: ['1rem', { lineHeight: '2rem' }],

        // Body medium: 18px, line-height 32px
        lg: ['1.125rem', { lineHeight: '2rem' }],

        // Body lg: 20px, line-height 28px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],

        // Body lg relaxed: 20px, line-height 32px
        'xl-relaxed': ['1.25rem', { lineHeight: '2rem' }],

        // Body xl: 20px, line-height 24px
        'xl-tight': ['1.25rem', { lineHeight: '1.5rem' }],

        // 2xl: 24px, line-height 32px (مثال)
        '2xl': ['1.5rem', { lineHeight: '2rem' }],

        // 3xl: 30px, line-height 36px (مثال)
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],

        // H1 / 4xl: 40px, line-height 60px
        '4xl': ['2.5rem', { lineHeight: '3.75rem' }],
      },
    },
  },
  plugins: [],
};
