const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let numbers = [];
  let digits = n.toString().split('');
  for (let i = 0; i < digits.length; i++){
    let str = digits[i];
    digits[i] = undefined;
    numbers.push(digits.join(''));
    digits[i] = str;
  }
  return Math.max(...numbers.map(Number));
}

module.exports = {
  deleteDigit
};
