/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    '@mistjs/eslint-config-vue',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.app.json",
    createDefaultProgram: false,
    extraFileExtensions: [".vue"],
  },
  rules: {
    "vue/multi-word-component-names": "off",
    // 'no-console': 'off',
  },
}
