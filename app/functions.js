exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (argument) => `${str}, ${argument}`;
  },

  makeClosures: function(arr, fn) {
    return arr.map((value) => () => fn(value))
  },

  partial: function(fn, str1, str2) {
    return (argument) => fn(str1, str2, argument);
  },

  useArguments: function() {
    return [...arguments].reduce((result, currentValue) => result + currentValue, 0);
  },

  callIt: function(fn, ...args) {
    return fn(...args);
  },

  partialUsingArguments: function(fn, ...args) {
    return (...partialArgs) => fn(...args, ...partialArgs);
  },

  curryIt: function(fn) {
    return (a) => (b) => (c) => fn(a, b, c);
  }
};
