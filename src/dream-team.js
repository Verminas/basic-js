const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// const arr = members.map((item) => item.trim()).sort();
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let nameDreamTeam = '';
  if (!Array.isArray(members)) return false;
  const arr = members.map(function(item) {
    if (typeof item ==='string') {
      return item.toLowerCase().trim();
    }
  }).sort();
  arr.forEach(function(item) {
    if (typeof item === 'string' && item !== null) {
      nameDreamTeam += item[0].toUpperCase();
    }
  });
  return nameDreamTeam;
}

module.exports = {
  createDreamTeam
};
