const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  simpleChain: '( )',
  getLength: function() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here


  },
  addLink: function (value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value == undefined || value == null) {
      return this.simpleChain;
    } else (
        return this.simpleChain;
    )

  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
