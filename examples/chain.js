var Nemo = require("../");
var config = {
  "driver": {
    "browser": "phantomjs"
  },
  'data': {
    'baseUrl': 'http://www.google.com'
  }
};

function recall() {
  console.log('start recall');
  var nemo = Nemo(config, function () {
    nemo.driver.get(nemo.data.baseUrl);
    nemo.driver.quit().then(function () {
      console.log('and again');
      recall();
    });

  });
}
recall();