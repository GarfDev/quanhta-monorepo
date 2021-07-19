module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // workspace packages
        '@quanhta/mobile-app',
        '@quanhta/shared-types',
        'eslint',
        '*',
      ],
    ],
  },
}