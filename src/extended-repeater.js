const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = '';
  let newStr = '';
  let newAddition = '';
  let repeatTimes;
  let additionRepeatTimes;

  if (typeof str !== 'string') {
    newStr = String(str);
  }
  if (typeof options.addition !== 'string') {
    newAddition = String(options.addition);
  }

}

module.exports = {
  repeater
};
