const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth= 0 ;
    if (Array.isArray(arr) && arr.length > 0) {
      depth +=1;
      for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i]);
        }
      }
    } else {
      depth = 0;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
