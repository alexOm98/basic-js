const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct  = direct ;
  }
  encrypt(input, key) {
    if (input === undefined || key === undefined) throw Error('Incorrect arguments!')
    const alphabet  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let output = []
    while (key.length < input.length) {
    key += key
    }
    key = key.slice(0, input.length).toUpperCase().split('')
    input = input.toUpperCase().split('')
    let j = 0 
    for (let i = 0; i < input.length; i++) {
    if (!alphabet.includes(input[i])) output.push(input[i])
    else output.push(alphabet[(alphabet.indexOf(input[i]) + alphabet.indexOf(key[j++])) % 26])
    }
    if (this.direct) return output.join('')
    else return output.reverse().join('')
  }
  decrypt(input, key) {
    if (input === undefined || key === undefined) throw Error('Incorrect arguments!')
    const alphabet  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let output = []
    while (key.length < input.length) {
    key += key
    }
    key = key.slice(0, input.length).toUpperCase().split('')
    input = input.toUpperCase().split('')
    let j = 0 
    for (let i = 0; i < input.length; i++) {
    if (!alphabet.includes(input[i])) output.push(input[i])
    else output.push(alphabet[(alphabet.indexOf(input[i]) + 26 - alphabet.indexOf(key[j++])) % 26])
    }
    if (this.direct) return output.join('')
    else return output.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
