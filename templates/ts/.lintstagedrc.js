/**
 * @author max_norin
 * @exports lintStaged
 */


const lintStaged = {
  '!(*package).json': 'jsonlint --sort-keys --in-place',
  '*.{js,ts}': 'eslint --ignore-pattern !.** --fix',
  '*.{css,sass,scss,less,pcss}': 'stylelint --fix',
  '*package.json': 'sort-package-json',
}
module.exports = lintStaged

