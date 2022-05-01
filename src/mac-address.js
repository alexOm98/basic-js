const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let arr = n.split('-')
  let count = 0;
  for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
  if (arr[i][j] < 10 || arr[i][j] === 'A' || arr[i][j] === 'B'|| arr[i][j] === 'C'|| arr[i][j] === 'D'|| arr[i][j] === 'E'|| arr[i][j] === 'F'){
  count ++
  }
  }
  }
  if (count === 12) return true
  else return false
  }
module.exports = {
  isMAC48Address
};
