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
  let separator = '';
  let additionSeparator = '';

  let changeSepAddit = '';
  let changeBigStr = '';

  if (options.length == 0) return str;

  if (typeof str !== 'string') {
    newStr = String(str);
  } else {
    newStr = str;
  }

  if (!isFalse(newAddition)) {
    if (typeof options.addition !== 'string') {
      newAddition = String(options.addition);
    } else {
      newAddition = options.addition;
    }
  } else {
    newAddition = false;
  }

  if (!options.hasOwnProperty(repeatTimes) || options.repeatTimes == false || options.repeatTimes == '0') {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  }
  if (!options.hasOwnProperty(separator) || options.separator == false) {
    separator = '+';
  } else {
    separator = options.separator;
  }
  if (!options.hasOwnProperty(additionRepeatTimes) || options.additionRepeatTimes == false || options.additionRepeatTimes == '0') {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (!options.hasOwnProperty(additionSeparator) || options.additionSeparator == false) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }
  function repeatStr(string) {
    return string.repeat(repeatTimes);
  }
  function addSeparatorStr(string) {
    if (repeatTimes > 1) {
      return separator + string;
    }
  }
  function addAdditional(string) {
    if (newAddition) {
      return string + newAddition;
    }
  }
  function repeatAdditional(string) {
    return string.repeat(additionRepeatTimes);
  }
  function addAdditionSeparator(string) {
    if (additionRepeatTimes > 1) {
      return additionSeparator + string;
    }
  }
  if (newAddition) {
    if (newAddition) {
      result = addAdditional(newStr);
    }
    if (additionRepeatTimes > 1) {
      result
    }
  }






}

module.exports = {
  repeater
};
