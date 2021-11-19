module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:jest-formatting/recommended',
  ],
  rules: {
    'vue/attribute-hyphenation': 'off',
    camelcase: ['error', { allow: ['^Contentful_'] }],
  },
  overrides: [
    {
      files: ['**/*.{vue,ts}'],
      rules: {
        'import/named': 'off',
      },
    },
    {
      files: ['*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
