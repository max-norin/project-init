/**
 * @author max_norin
 * @exports lintStaged
 */

const lintStaged = {
 '!(*package).json': 'jsonlint --sort-keys --in-place',
  '*.{js,ts}': 'eslint --no-eslintrc --config ./templates/ts/.eslintrc.js --ignore-pattern !.** --fix',
  '*package.json': 'sort-package-json',
}
module.exports = lintStaged
