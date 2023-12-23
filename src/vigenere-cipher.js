const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direct) {
    this.direct = direct;
    this.squareVigenere = [];
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.squareVigenere.push(row);
    }
  }
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      message = message.toUpperCase();
      let newKey = '';
      while (newKey.length < message.length) {
        for (let i = 0; i < key.length; i++) {
          newKey += key[i];
          if ( i === key.length) {
            i = 0;
          }
        }
      }
      newKey = newKey.toUpperCase();
      let encryptMessage = '';
      let cipherChar = '';
      for (let i = 0; i < message.length; i++) {
      let indexCharMessage = this.alphabet.indexOf(i);
      let indexCharNewKey = this.alphabet.indexOf(i);
      if (indexCharMessage !== -1) {
        cipherChar = this.squareVigenere[indexCharMessage][indexCharNewKey];
      } else {
        cipherChar = message[i];
      }
      encryptMessage += cipherChar;
      }
      if (this.direct || this.direct === undefined) {
        return encryptMessage;
      } else {
        let invertedenCryptMessage = '';
        for (let index = encryptMessage.length - 1; index > -1; index--) {
          invertedenCryptMessage += encryptMessage[index];
        }
        return invertedenCryptMessage;
      }

    }
  }
  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
