// @ts-nocheck
/**
 * @author max_norin
 * @exports stylelintConfiguration
 */

/**
 * StyleLint Configuration.
 *
 * @see [doc]{@link https://stylelint.io/user-guide/configure}
 */
const stylelintConfiguration = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-8-point-grid',
  ],
  plugins: [
    /**
     * Order-related linting rules.
     *
     * @see [GitHub]{@link https://github.com/hudochenkov/stylelint-order}
     */
    'stylelint-order',
    'stylelint-selector-bem-pattern',
    'stylelint-high-performance-animation',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-csstree-validator',
    'stylelint-at-rule-no-children',
    'stylelint-group-selectors',
    'stylelint-images',
    'stylelint-selector-no-empty',
    'stylelint-z-index-value-constraint',
    'stylelint-no-indistinguishable-colors',
    'stylelint-media-use-custom-media',
    'stylelint-use-nesting',
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-use-logical',
    'stylelint-declaration-use-variable',
    '@signal-noise/stylelint-scales',
  ],
  rules: {
    // TODO are unused classes removed without the below package?
    //  deleting unused classes is organized in EsLint vue-scoped-css/no-unused-selector
    'property-no-unknown': [true, { ignoreProperties: ['font-path'] }], // Doc: https://stylelint.io/user-guide/rules/property-no-unknown
    'declaration-property-value-allowed-list': {}, // Doc: https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list
    'declaration-block-no-duplicate-properties': true, // Doc: https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    'plugin/selector-bem-pattern': { preset: 'bem' }, // Doc: https://github.com/simonsmith/stylelint-selector-bem-pattern
    'plugin/no-low-performance-animation-properties': true,
    'plugin/declaration-block-no-ignored-properties': true, // disallow property values that are ignored due to another property value in the same rule
    'csstree/validator': { ignore: ['font-path', 'z-index'] }, // currently it's only checking declaration values to match W3C specs and browsers extensions
    'aditayvm/at-rule-no-children': [{}], // disallow block declarations inside at rules
    'plugin/stylelint-group-selectors': true,
    'images/broken': true,
    'images/prefer-data-uri': 256, // suggest using data-URIs instead of an external image if its file size (in bytes) is smaller than the limit
    'plugin/stylelint-selector-no-empty': true,
    'plugin/z-index-value-constraint': { min: 1, max: 100 }, // Doc: https://github.com/kristerkari/stylelint-z-index-value-constraint
    'plugin/stylelint-no-indistinguishable-colors': true, // Doc: https://github.com/ierhyna/stylelint-no-indistinguishable-colors
    'csstools/use-nesting': true,
    // TODO make function that returns these blocks with the corresponding variables
    'csstools/media-use-custom-media': [
      'always-known',
      { importFrom: 'assets/style/variables.css' },
    ],
    'csstools/value-no-unknown-custom-properties': [
      true,
      { importFrom: 'assets/style/variables.css' },
    ],
    'csstools/use-logical': true, // Doc: https://github.com/csstools/stylelint-use-logical
    'sh-waqar/declaration-use-variable': [
      ['/color$/', 'background', 'font-size', '/radius$/', { ignoreValues: ['transparent', 'inherit', 'initial', 'none'] }],
    ], // Doc: https://github.com/sh-waqar/stylelint-declaration-use-variable
    'scales/font-weight': [['normal', 'bold']],
  },
}

module.exports = stylelintConfiguration
