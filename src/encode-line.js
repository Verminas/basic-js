const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arrStr = str.split('');
  let result = ``;
  let count = 1;
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i] === arrStr[i + 1]) {
      count += 1;
    } else {
      count > 1 ? result += count + arrStr[i] : result += arrStr[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
