exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    let name = str2, greeting = str1;

    function sayIt() {
      return `${this.greeting}, ${this.name}`;
    }

    let publicAPI = {
      name: name,
      greeting: greeting,
      sayIt: sayIt
    };

    return publicAPI;
  }
};
