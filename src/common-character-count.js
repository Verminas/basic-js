const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let frequencies1 = countFrequencies(s1);

  let frequencies2 = countFrequencies(s2);

  let count = 0;


  for(let char in frequencies1) {
    if(frequencies2[char]) {
      count += Math.min(frequencies1[char], frequencies2[char]);
    }
  }

  return count;

}

function countFrequencies(str) {
  let frequencies = {};
  for(let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  return frequencies;
}

module.exports = {
  getCommonCharacterCount
};
