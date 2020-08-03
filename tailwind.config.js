// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./app/**/*.html', './app**/*.hbs'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  ],
};
