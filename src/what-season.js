const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
     date.getTime()

  } catch (error) {
    throw new Error('Invalid date!');
  }
  if (!(date instanceof Date) ) {
    throw new Error('Invalid date!');
  }
  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  let leapYear = false;

  if (year <=0 || month <= 0 || day <= 0) {
    throw new Error('Invalid date!');
  }
  if (month > 12 || day > 31) {
    throw new Error('Invalid date!');
  }
  if (year % 4 === 0) leapYear = true;

  if (((month === 12 || month === 1) && day >= 1) || (month === 2 && (!leapYear && day <= 28 || leapYear && day <= 29))) {
    return 'winter';
  } else if (month >= 3 && month <= 5) {
    if (month == 4 && day > 30) {
      throw new Error('Invalid date!');
    } else return 'spring';
  } else if (month >= 6 && month <= 8) {
    if (month == 6 && day > 30) {
      throw new Error('Invalid date!');
    } else return 'summer';
  } else if (month >= 9 && month <= 11) {
    if ((month == 9 || month == 11) && day > 30) {
      throw new Error('Invalid date!');
    } else return 'autumn';
  } else {
    throw new Error('Invalid date!');
  }
}


module.exports = {
  getSeason
};
