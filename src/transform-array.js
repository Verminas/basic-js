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
// function transform(arr) {
//   // throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
//
//     if (!Array.isArray(arr)) {
//       throw new Error('\'arr\' parameter must be an instance of the Array!');
//     }
//     if (arr.length === 0) return arr;
//     let arrCopy = arr.slice();
//     const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
//     function checkNotControlSequences(arrCopy) {
//       for (let i = 0; i < arrCopy.length; i += 1) {
//         for (let j = 0; j < controlSequences.length; j += 1) {
//           if (arrCopy[i] !== controlSequences[j]) {
//             return true;
//           }
//         }
//       }
//     }
//     let checkControlsFirst = checkNotControlSequences(arrCopy);
//     if (checkControlsFirst) {
//         return arrCopy;
//     } else {
//         for (let i = 0; i < arrCopy.length; i += 1) {
//             for (let j = 0; j < controlSequences.length; j += 1) {
//                 if (arrCopy[i] == controlSequences[j]) {
//                     if (arrCopy[i].includes('discard')) {
//                         if (arrCopy[i].includes('next') && arrCopy[i + 1] !== undefined) {
//                             arrCopy.splice(i, 2);
//                         }
//                         if (arrCopy[i].includes('next') && arrCopy[i + 1] == undefined) {
//                             arrCopy.splice(i, 1);
//                         }
//                         if (arrCopy[i].includes('prev') && arrCopy[i - 1] !== undefined) {
//                             arrCopy.splice(i - 1, 2);
//                         }
//                         if (arrCopy[i].includes('prev') && arrCopy[i - 1] == undefined) {
//                             arrCopy.splice(i - 1, 1);
//                         }
//                     }
//
//                     if (arrCopy[i].includes('double')) {
//                         if (arrCopy[i].includes('next') && arrCopy[i + 1] !== undefined) {
//                             arrCopy.splice(i, 1, arrCopy[i + 1]);
//                         }
//                         if (arrCopy[i].includes('prev') && arrCopy[i - 1] !== undefined) {
//                             arrCopy.splice(i, 1, arrCopy[i - 1]);
//                         }
//                     }
//                 }
//             }
//         }
//         return arrCopy;
//     }
// }

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    if (arr.length === 0) return arr;

    let arrCopy = arr.slice();
    const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let result = [];

    function checkNotControlSequences(arrCopy) {
        for (let i = 0; i < arrCopy.length; i += 1) {
            if (!controlSequences.includes(arrCopy[i])) {
                return true;
            }
        }
        return false;
    }

    let checkControlsFirst = checkNotControlSequences(arrCopy);

    if (checkControlsFirst) {
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] === '--discard-next') {
                i += 1;
            } else if (arr[i] === '--discard-prev') {
                if (i > 0 && arr[i - 2] !== '--discard-next') {
                    result.pop();
                }
            } else if (arr[i] === '--double-next') {
                if (i < arr.length - 1) {
                    result.push(arr[i + 1]);
                }
            } else if (arr[i] === '--double-prev') {
                if (i > 0 && arr[i - 2] !== '--discard-next') {
                    result.push(arr[i - 1]);
                }
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    } else {
        return arrCopy;
    }
}

module.exports = {
  transform
};
