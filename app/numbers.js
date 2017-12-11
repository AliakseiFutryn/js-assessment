exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return Number([...num.toString(2)].reverse()[bit - 1]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let result = num.toString(2);
    return `${'0'.repeat(8 - result.length)}${result}`;
  },

  multiply: function(a, b) {
    
  }
};
