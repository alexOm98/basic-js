const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = Array.from(arr)
  let temp = [];
  let result = []
  for (let i = 0; i < newArr.length; i++) {
  temp.push(arr[i])
  if (newArr[i+1] && newArr[i] === '--discard-next') {
  arr[i+1] = ''
  }
  if ( newArr[i-1] && newArr[i] === '--discard-prev') {
  temp.pop()
  temp.pop()
  }
  if (newArr[i+1] && newArr[i] === '--double-next'){
  temp.push(arr[i+1])
  } 
  if (newArr[i-1] && newArr[i] === '--double-prev'){
  temp.push(arr[i-1])
  } 
    
  }
  for (let i = 0; i<temp.length; i++){
  if (temp[i] !== '--discard-next' && temp[i] !== '--discard-prev' && temp[i] !== '--double-next' && temp[i] !== '--double-prev' && temp[i] !== ''){
  result.push(temp[i])
  }
  }
  return result
  }

module.exports = {
  transform
};
