const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (!(options.hasOwnProperty('additionSeparator'))) options.additionSeparator = "|"
  if (!(options.hasOwnProperty('separator'))) options.separator = '+'
  if (!(options.hasOwnProperty('repeatTimes'))) options.repeatTimes  = 1
  if (!(options.hasOwnProperty('addition'))) options.addition  = '' 
  if (!(options.hasOwnProperty('additionRepeatTimes'))) options.additionRepeatTimes  = 1
  if (str === null) str = 'null'
  if (options.addition === null) options.addition = 'null'
  let arr = []
  let arr2 = []
  for (let i = 0; i < options.additionRepeatTimes; i++){
  arr2.push(options.addition)
  }
  let fulladdition =  arr2.join(options.additionSeparator)
  for (let i = 0; i < options.repeatTimes; i++){
  arr.push(str)
  }
  return arr.join(fulladdition + options.separator) + fulladdition
}

module.exports = {
  repeater
};
