exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let resultArray = [];
    data.files.forEach(element => {
      if(typeof(element) == "object") {
        let dirToPass = data.dir === dirName ? element.dir : dirName;
        resultArray = resultArray.concat(this.listFiles(element, dirToPass));
      } else {
        if(data.dir === dirName || !dirName) {
          resultArray.push(element);
        }
      }
    });
    return resultArray;
  },

  permute: function(arr) {
      let result = [];

      const permute = (array, tmpArray = []) => {
        if(array.length === 0) {
          result.push(tmpArray);
        } else {
          for (let index = 0; index < array.length; index++) {
            let current = array.slice();
            let next = current.splice(index, 1);
            permute(current.slice(), tmpArray.concat(next))
          }
        }
      }
      permute(arr);
      return result;
  },

  fibonacci: function(n) {
    if(n === 0) {
      return 0;
    } else if(n === 1) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    
  }
};
