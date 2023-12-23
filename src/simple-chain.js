const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  simpleChain: '(  )',
  // chainWithValue: `(${this.value})~~`,
  resultChain: '',
  currentArray: [],
  checkChain: true,
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let length = this.currentArray.length;
    return length;

  },
  addLink: function(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.checkChain) {
      if (typeof value === 'undefined') {
        this.currentArray.push('(  )');
        return this;
      } else {
        let valueString = '( ' + String(value) + ' )';
        this.currentArray.push(valueString);
        return this;
      }
    } else if (!this.checkChain){
      this.resultChain = '';
      this.currentArray = [];
      this.checkChain = true;
      return this.addLink(value);
    }


  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.getLength() || typeof position !== 'number') {
      this.currentArray = [];
      this.resultChain = '';
      this.checkChain = false;
      throw new Error('You can\'t remove incorrect link!');
    }
    if (this.checkChain && this.currentArray[position - 1]) {
        this.currentArray.splice(position - 1, 1);
      }
      return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.checkChain) {
      return this;
    }
    if (this.checkChain) {
      this.currentArray.reverse();

      return this;
    }
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.resultChain = this.currentArray.join('~~');
    this.currentArray = [];
    return this.resultChain;
  }
};

module.exports = {
  chainMaker
};
