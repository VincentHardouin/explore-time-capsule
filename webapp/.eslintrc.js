module.exports = {
  globals: {
    include: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    '../.eslintrc.js',
  ],
  parserOptions: {
    parse: 'babel-eslint',
  },
  plugins: [],
  // add your custom rules here
  rules: {},
}
