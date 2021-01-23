/**
 * @author max_norin
 * @exports eslintConfiguration
 */

/**
 * ESLint Configuration.
 *
 * @see [doc]{@link https://eslint.org/docs/user-guide/configuring}
 */
const eslintConfiguration = {
 extends: [
    // # Parent
    '../vue/.eslintrc.js',
    // # Nuxt
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  settings: {
    'import/resolver': 'nuxt',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'],
      extends: [
        // # Nuxt
        '@nuxtjs/eslint-config-typescript',
      ],
    },
  ],
}

module.exports = eslintConfiguration
