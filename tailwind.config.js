module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: '"Anton", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      serif:
        '"DM Serif Text", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
