exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);
    start++;

    let intervalId = setInterval(() => {
      if(start <= end) {
        console.log(start);
        start++;
      }
    }, 100)

    return {
      cancel: () => clearInterval(intervalId)
    }
  }
};
