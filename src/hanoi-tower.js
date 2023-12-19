const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const secondsInHour = 60 * 60;
  let turns = 0;
  let seconds;

  for (let i = 0; i <= disksNumber - 1; i += 1) {
    turns += Math.pow(2, i);
  }
  seconds = Math.floor((turns * secondsInHour) / turnsSpeed);
  const answer = {
    turns: turns,
    seconds: seconds,
  }
  return answer;
}

module.exports = {
  calculateHanoi
};
