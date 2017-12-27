exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    let properties = Object.entries(obj);
    return properties.map((valuesArray) => `${valuesArray[0]}: ${valuesArray[1]}`);
  }
};
