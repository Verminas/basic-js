const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  simpleChain: '(  )',
  // chainWithValue: `(${this.value})~~`,
  resultChain: '',
  checkChain: true,
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let length = 0;
    for (let char of this.resultChain) {
      if (char === '(') {
        length += 1;
      }
    }
    return length;

  },
  addLink: function(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.checkChain) {
      if (typeof value === 'undefined') {
        this.resultChain += this.simpleChain;
        return this;
      } else {
        let valueString = String(value);
        this.resultChain += `( ${valueString} )~~`;
        return this;
      }
    } else {
      this.resultChain = '';
      this.checkChain = true;
    }


  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position < 1) {
      this.resultChain = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    if (this.checkChain) {
      let arr = [];
      let newArr = [];
      arr = this.resultChain.split('~~');
      if (arr[position - 1] !== undefined) {
        for (let i = 0; i < arr.length; i += 1) {
          if (i !== position - 1) {
            newArr.push(arr[i]);
          }
        }
        this.resultChain = newArr.join('~~');
        arr = [];
        newArr = [];

      } else {
        this.resultChain = '';
        throw new Error('You can\'t remove incorrect link!');
      }
      return this;
    }

  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.checkChain) {
      this.resultChain = '';
      return this;
    }
    if (this.checkChain) {
      let arr = [];
      if (this.getLength() > 1) {
        arr = this.resultChain.split('~~');
        this.resultChain = arr.reverse().join('~~');
        return this;
      } else {
        arr = this.resultChain.split('');
        this.resultChain = arr.reverse().join('');
        return this;
      }

    }
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.resultChain = String(this.resultChain);
    if (this.resultChain.endsWith('~~')) {
      this.checkChain = false;
      return this.resultChain.slice(0, -2);
    }
    if (this.resultChain.startsWith('~~')) {
      this.checkChain = false;
      return this.resultChain.slice(2);
    }
    this.resultChain = '';
  }
};

module.exports = {
  chainMaker
};
