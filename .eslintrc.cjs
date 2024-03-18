/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
//bi linneter kodu yazken biri belli kurallara uygmamız için zorlar.
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
