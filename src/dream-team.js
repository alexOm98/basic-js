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
 function createDreamTeam(members) {
  if(Array.isArray(members) === false) return false
  let arr = members.filter(el=> typeof el  === 'string')
  if (arr.length === 0) return false
  else{
    arr = arr.map((el)=> el.trim())
    return arr.map(((el) => el[0].toUpperCase())).sort().join('')
  }
}

module.exports = {
  createDreamTeam
};
