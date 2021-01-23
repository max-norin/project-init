/**
 * @author max_norin
 * @exports husky
 */

const husky= {
  hooks: {'pre-commit': 'lint-staged' },
}

module.exports = husky
