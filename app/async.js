exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
      let resource = `http://127.0.0.1:4444${url}`;

      if(typeof window !== 'undefined') {
        return fetch(resource).then((res) => res.json()).then((jsonResult) => {
          if(jsonResult) {
            return jsonResult.people.map((item) => item.name).sort();
          }
        })
      } else {
        return new Promise((resolve, reject) => {
          let http = require('http');
          http.get(resource, (response) => {
            let data = '';

            response.on('data', (chunk) => {
              data += chunk;
            });

            response.on('end', () => {
              let jsonResult = JSON.parse(data);
              if(jsonResult) {
                let sortedArray = jsonResult.people.map((item) => item.name).sort();
                resolve(sortedArray);
              }
            });

            response.on('error', (error) => {
              reject(new Error(error.message));
            });
          });
      })
    }
  }
};
