const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  simpleChain: '(  )',
  // chainWithValue: `(${this.value})~~`,
  resultChain: '',
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let length = 0;
    for (let char of this.resultChain) {
      if (char == '(') {
        length += 1;
      }
    }
    return length;

  },
  addLink: function(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined || value === null) {
      this.resultChain = this.simpleChain;
      return this.resultChain;
    } else {
      this.resultChain += `( ${value} )~~`;
      return this;
    }

  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (typeof position == 'number' && this.resultChain.includes(position)) {
      let index = this.resultChain.indexOf(position);
      let lastIndex = this.resultChain.lastIndexOf(position);
      if (index !== 2 || lastIndex !== 2) {
        this.resultChain = this.resultChain.slice(0, index - 2) + this.resultChain.slice(index + 5);
        return this;
      } else if (index === 2) {
        this.resultChain = this.resultChain.slice(5);
        return this;
      } else if (lastIndex === 2) {
        this.resultChain = this.resultChain.slice(0, index - 2);
        return this;
      }

    } else {
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = [];
    arr = this.resultChain.split('~~');
    this.resultChain = arr.reverse().join('~~');
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.resultChain.endsWith('~~')) {
      return this.resultChain.slice(0, -2);
    }
    if (this.resultChain.startsWith('~~')) {
      return this.resultChain.slice(2);
    }
  }
};

module.exports = {
  chainMaker
};
