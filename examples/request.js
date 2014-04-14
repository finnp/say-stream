var Say = require('../index.js').Say;
var http = require('http');
var choir = new Say('cellos');
var url = 'http://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';
http.get(url, function(request) {
  request.setEncoding('utf8');
  request.pipe(choir);
});