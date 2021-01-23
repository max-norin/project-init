// @ts-nocheck
/**
 * @author max_norin
 * @exports eslintConfiguration
 */

// TODO are the lines below necessary?
const commonResetRules = {
  'comma-dangle': ['error', 'always-multiline'],
  'space-before-function-paren': ['error', 'never'],
  'import/extensions': ['error', 'never'],
}

/**
 * ESLint Configuration.
 *
 * @see [doc]{@link https://eslint.org/docs/user-guide/configuring}
 */
const eslintConfiguration = {
 root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    // # Base
    /**
     * ESLint recommended rules.
     *
     * @see [doc]{https://eslint.org/docs/rules/}
     */
    'eslint:recommended',
    /**
     * Airbnb's base rules.
     *
     * @see [GitHub]{@link https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base}
     */
    'airbnb-base',
    // # Stylizations
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:@getify/proper-arrows/getify-says',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:import/errors',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:import/warnings',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:jest/recommended',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:no-use-extend-native/recommended',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:optimize-regex/recommended',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:promise/recommended',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:sonarjs/recommended',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:unicorn/recommended',
    // # JSDoc
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'plugin:jsdoc/recommended',
    // # Prettier
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'prettier',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'prettier/unicorn',
  ],
  plugins: [
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'deprecate',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'no-loops',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'node',
    /**
     * Recommended.
     *
     * @see [GitHub]{@link https://github.com}
     */
    'simple-import-sort',
  ],
  rules: {
    ...commonResetRules,
    'object-curly-newline': 'error',
    '@getify/proper-arrows/name': 'off',
    '@getify/proper-arrows/params': ['error', { count: 3, length: 2, unused: 'trailing' }],
    '@getify/proper-arrows/this': 'off',
    'deprecate/function': 'error',
    'deprecate/member-expression': 'error',
    'deprecate/import': 'error',
    'no-loops/no-loops': 'error',
    'node/no-deprecated-api': 'error',
    'simple-import-sort/sort': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, pascalCase: true, camelCase: true } },
    ],
    // #JSDoc
    'jsdoc/check-indentation': [
      'error',
      { excludeTags: ['description', 'example'] },
    ],
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-values': ['error', { allowedAuthors: ['max_norin'] }],
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/require-description': [
      'warn',
      {
        contexts: [
          'ClassDeclaration',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        tags: [
          'property',
        ],
      },
    ],
    'jsdoc/require-file-overview': [
      'error',
      {
        tags: {
          author: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: false,
          },
          exports: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: false,
          },
        },
      },
    ],
    'jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      {
        tags: {
          '*': 'never',
          param: 'always',
          property: 'always',
        },
      },
    ],
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
        checkConstructors: true,
        checkGetters: true,
        checkSetters: true,
      },
    ],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-throws': 'error',
    'jsdoc/valid-types': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'], // TODO if Vue file has lang="js" then will Eslint work?
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
      extends: [
        // # Base
        /**
         * Recommended.
         *
         * @see [GitHub]{@link https://github.com}
         */
        'airbnb-typescript/base',
        // # Stylizations
        /**
         * Recommended.
         *
         * @see [GitHub]{@link https://github.com}
         */
        'plugin:@typescript-eslint/recommended',
        /**
         * Recommended.
         *
         * @see [GitHub]{@link https://github.com}
         */
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        /**
         * Recommended.
         *
         * @see [GitHub]{@link https://github.com}
         */
        'plugin:import/typescript',
        // # Prettier
        /**
         * Recommended.
         *
         * @see [GitHub]{@link https://github.com}
         */
        'prettier/@typescript-eslint',
      ],
      rules: {
        ...commonResetRules,
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
}

module.exports = eslintConfiguration
