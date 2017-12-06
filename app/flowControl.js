exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    if(typeof num !== 'number') return false;

    let fizz = num % 3 === 0 ? 'fizz' : '';
    let buzz = num % 5 === 0 ? 'buzz' : '';
    let result = `${fizz}${buzz}`;

    return result ? result : num;
  }
};
