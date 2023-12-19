const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    if (!Array.isArray(arr)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    if (arr.length === 0) return arr;
    let arrCopy = arr.slice();
    const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    function checkControlSequences(arrCopy) {
      for (let i = 0; i < arrCopy.length; i += 1) {
        for (let j = 0; j < controlSequences.length; j += 1) {
          if (arrCopy[i] !== controlSequences[j]) {
            return arrCopy;
          }
        }
      }
    }
    let checkControlsFirst = checkControlSequences(arrCopy);
     return checkControlsFirst;

    for (let i = 0; i < arrCopy.length; i += 1) {
        for (let j = 0; j < controlSequences.length; j += 1) {
            if (arrCopy[i] == controlSequences[j]) {
                if (arrCopy[i].includes('discard')) {
                    if (arrCopy[i].includes('next') && arrCopy[i + 1] !== undefined) {
                        arrCopy.splice(i, 2);
                    }
                    if (arrCopy[i].includes('next') && arrCopy[i + 1] == undefined) {
                        arrCopy.splice(i, 1);
                    }
                    if (arrCopy[i].includes('prev') && arrCopy[i - 1] !== undefined) {
                        arrCopy.splice(i - 1, 2);
                    }
                    if (arrCopy[i].includes('prev') && arrCopy[i - 1] == undefined) {
                        arrCopy.splice(i - 1, 1);
                    }
                }

                if (arrCopy[i].includes('double')) {
                    if (arrCopy[i].includes('next') && arrCopy[i + 1] !== undefined) {
                        arrCopy.splice(i, 1, arrCopy[i + 1]);
                    }
                    if (arrCopy[i].includes('prev') && arrCopy[i - 1] !== undefined) {
                        arrCopy.splice(i, 1, arrCopy[i - 1]);
                    }
                }
            }
        }
    }

    return arrCopy;

}

module.exports = {
  transform
};
