const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let maxNumber = 0;
  const strN = String(n);
  const arrDigits = strN.split('');
  for (let i = 0; i < arrDigits.length; i += 1) {
    let arrDigitsCopy = arrDigits.slice();
    arrDigitsCopy.splice(i, 1);
    const newNumber = Number(arrDigitsCopy.join(''));
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
    arrDigitsCopy = arrDigits.slice();
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
