const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sampleActivityNumber = Number(sampleActivity);
  if (!Number.isFinite(sampleActivityNumber) || typeof sampleActivity !== 'string') return false;
  if (Number.isFinite(sampleActivityNumber) && sampleActivityNumber > 0 && sampleActivityNumber < MODERN_ACTIVITY) {
    const age = (Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD) / Math.LN2;
    return Math.ceil(age);
  } else return false;
}

module.exports = {
  dateSample
};
