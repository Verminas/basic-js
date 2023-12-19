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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result;
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
    if (date == undefined || date == null) {
      result = 'Unable to determine the time of year!';
      return result;
    }
    if (typeof date !== 'object' || isNaN(date.getTime())) {
      hasErrors += 1;
    }
    if (hasErrors > 0) {
      throw new Error('Invalid date!');
    }
  } catch(e) {
    return e.message;
  }

  if (year % 4 == 0) leapYear = true;

  if (hasErrors == 0) {
    try {
      for (let i = 0; i < seasonsDates.length; i += 1) {
        let seasonDate= seasonsDates[i];
        for (let j = 0; j < seasonDate.period.length; j += 1) {
          if (month == seasonDate.period[j].numberMonth) {
            if (!leapYear) {
              if (day > 0 && day <= seasonDate.period[j].countOfDays) {
                result = seasonDate.name;
              } else {
                hasErrors += 1;
              }
            }
            if (leapYear && month == seasonsDates[0].period[1].numberMonth) {
              if (day > 0 && day <= seasonsDates[0].period[1].countOfDaysLeap) {
                result = seasonsDates[0].name;
              } else {
                hasErrors += 1;
              }
            }
          }
        }
      }
      if (hasErrors > 0) {
        throw new Error('Invalid date!');
      }
      return result;
    } catch(e) {
      return e.message;
    }
  }
}
module.exports = {
  getSeason
};
