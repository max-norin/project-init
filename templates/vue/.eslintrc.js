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
  // parser: 'vue-eslint-parser', issue: does not provide the ability to define the language in the section <script>, <style>
  extends: [
    // # Parent
    '../ts/.eslintrc.js',
    // # Vue
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    // # Prettier
    'prettier/vue',
  ],
  settings: {
    jsdoc: {
      structuredTags: {
        param: { type: false },
        property: { type: false },
        return: { type: false },
        'vue-event': {
          name: 'namepath-defining',
          type: false,
          required: ['name'],
        },
        'vue-prop': {
          name: 'namepath-defining',
          type: false,
          required: ['name'],
        },
      },
    },
  },
  rules: {
    'vue-scoped-css/require-scoped': 'error',
    'vue-scoped-css/no-unused-selector': ['error', { ignoreBEMModifier: true }],
    // #JSDoc
    'jsdoc/check-tag-names': [
      'warn',
      { definedTags: ['vue-prop', 'vue-event'] },
    ],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        tags: [
          'property', // TODO if delete then will work correctly?
          'vue-event', // issue: is malfunctioning
          'vue-prop', // issue: is malfunctioning
        ],
      },
    ],
    'jsdoc/require-hyphen-before-param-description': ['error', 'always',
      {
        tags: {
          '*': 'never',
          param: 'always',
          property: 'always',
          'vue-event': 'always',
          'vue-prop': 'always',
        },
      },
    ],
  },
}

module.exports = eslintConfiguration
