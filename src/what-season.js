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
// function getSeason(date) {
//   // throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
//
//   let result;
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate();
//   const seasonsDates = [
//     {
//       name: 'winter',
//       period: [
//         {
//           numberMonth: 0,
//           countOfDays: 31
//         },
//         {
//           numberMonth: 1,
//           countOfDays: 28,
//           countOfDaysLeap: 29
//         },
//         {
//           numberMonth: 11,
//           countOfDays: 31
//         },
//       ]
//     },
//     {
//       name: 'spring',
//       period: [
//         {
//           numberMonth: 2,
//           countOfDays: 31
//         },
//         {
//           numberMonth: 3,
//           countOfDays: 30
//         },
//         {
//           numberMonth: 4,
//           countOfDays: 31
//         },
//       ]},
//     {
//       name: 'summer',
//       period: [
//         {
//           numberMonth: 5,
//           countOfDays: 30
//         },
//         {
//           numberMonth: 6,
//           countOfDays: 31},
//         {
//           numberMonth: 7,
//           countOfDays: 31
//         },
//       ]},
//     {
//       name: 'autumn',
//       period: [
//         {
//           numberMonth: 8,
//           countOfDays: 30
//         },
//         {
//           numberMonth: 9,
//           countOfDays: 31
//         },
//         {
//           numberMonth: 10,
//           countOfDays: 30
//         },
//       ]},
//   ];
//   let hasErrors = 0;
//   let leapYear = false;
//
//   if (!(date instanceof Date)) {
//     result = 'Unable to determine the time of year!';
//     return result;
//   }
//
//   if (year % 4 == 0) leapYear = true;
//
//   try {
//     for (let i = 0; i < seasonsDates.length; i += 1) {
//       let seasonDate = seasonsDates[i];
//       for (let j = 0; j < seasonDate.period.length; j += 1) {
//         if (month == seasonDate.period[j].numberMonth) {
//           if (!leapYear) {
//             if (day > 0 && day <= seasonDate.period[j].countOfDays) {
//               result = seasonDate.name;
//             } else {
//               hasErrors += 1;
//             }
//           }
//           if (leapYear && month == seasonDate.period[j].numberMonth) {
//             if (day > 0 && day <= seasonDate.period[j].countOfDaysLeap) {
//               result = seasonDate.name;
//             } else {
//               hasErrors += 1;
//             }
//           }
//         }
//       }
//     }
//     if (hasErrors > 0) {
//       result = 'Invalid date!';
//     }
//   } catch (e) {
//     result = e.message;
//   }
//
//   if (!result) {
//     result = 'Invalid date!';
//   }
//
//   return result;
// }
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
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
