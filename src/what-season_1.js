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
function getSeason(date ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result;
  if (typeof date !== 'object') {
    result = 'Unable to determine the time of year!';
    return result;
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const seasonsDates = [
    {
      name: 'winter',
      period: [
        {
          numberMonth: 0,
          countOfDays: 31
        },
        {
          numberMonth: 1,
          countOfDays: 28,
          countOfDaysLeap: 29
        },
        {
          numberMonth: 11,
          countOfDays: 31
        },
      ]
    },
    {
      name: 'spring',
      period: [
        {
          numberMonth: 2,
          countOfDays: 31
        },
        {
          numberMonth: 3,
          countOfDays: 30
        },
        {
          numberMonth: 4,
          countOfDays: 31
        },
      ]},
    {
      name: 'summer',
      period: [
        {
          numberMonth: 5,
          countOfDay: 30
        },
        {
          numberMonth: 6,
          countOfDay: 31},
        {
          numberMonth: 7,
          countOfDay: 31
        },
      ]},
    {
      name: 'autumn',
      period: [
        {
          numberMonth: 8,
          countOfDay: 30
        },
        {
          numberMonth: 9,
          countOfDay: 31
        },
        {
          numberMonth: 10,
          countOfDay: 30
        },
      ]},
  ];
  let hasErrors = 0;
  let leapYear = false;

  try {
      for (let i = 0; i < seasonsDates.length; i += 1) {
       let seasonDate= seasonsDates[i];
        seasonDate.period[0].numberMonth;
      }

      if (hasErrors > 0) {
        throw let e = new Error('Invalid date!');
      }
    return result;
  } catch(e) {
      return e.message;
  }

}

module.exports = {
  getSeason
};
