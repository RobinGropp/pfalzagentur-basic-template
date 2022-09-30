module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'vue/no-v-html': 'off',
    'no-prototype-builtins': 'off',
    'vue/v-slot-style': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
