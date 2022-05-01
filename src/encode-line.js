const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = ''
  for (let i=0; i < str.length; i++) {
  let num = 1
  while (i < str.length && str[i] == str[i+1]) {
  num++
  i++
  }
  result += num.toString() + str[i]
  }
  return result.replace(/1/g, "")
  }

module.exports = {
  encodeLine
};
