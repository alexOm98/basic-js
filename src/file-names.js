const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let tempArr = []
  let obj = {}
  names.forEach(el=> obj[el] = (obj[el] || 0) + 1)
  for (let prop in obj) {
  if (prop.includes('(1)')){
  prop = prop + "(1)";
  }
  obj[prop] = obj[prop] - 1
  }
  for (let i = names.length-1; i >= 0; i--){
  if (obj[names[i]] > 0){
  tempArr.unshift(names[i] + "(" + (obj[names[i]]).toString() +")" )
  obj[names[i]] = obj[names[i]] - 1
  }
  else tempArr.unshift(names[i])
  
  }
  return tempArr
  }


module.exports = {
  renameFiles
};
