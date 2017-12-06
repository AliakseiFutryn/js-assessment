exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  },

  remove: function(arr, item) {
    return arr.filter(arrayItem => arrayItem !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for(let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
      if(arr[currentIndex] === item) {
        arr.splice(currentIndex, 1);
        currentIndex--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((result, currentValue) => {
      if (currentValue === item) result++;
      return result;
    }, 0);
    // Might be useful more than previous (not sure as filter is responsible for
    // creating new array). return arr.filter(arrayItem => arrayItem === item).length;
  },

  duplicates: function(arr) {
    // Not sure that this is the best way to do it.
    // TODO: Try to do with set (ES6).
    let results = [];

    arr.forEach((currentValue, index, array) => {
      if(index !== array.lastIndexOf(currentValue) && !results.includes(currentValue)) {
        results.push(currentValue);
      }
    })

    return results;
  },

  square: function(arr) {
    return arr.map((item) => Math.pow(item, 2));
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((container, currentValue, currentIndex) => {
      if(currentValue === target) container.push(currentIndex);
      return container;
    }, []);
  }
};
