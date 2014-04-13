
var Stream = require('stream');
var exec = require('child_process').exec;

module.exports = function(voice) {

  voice = voice || "Zarvox";

  var say = exec("trap 'exit' INT; while read line; do echo $line; echo $line | say -v " + voice + " ; done" ,
    function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });

  var stream = new Stream();
  stream.readable = stream.writable = true

  stream.write = function(data) {
    say.stdin.write(data.toString() + "\n");
    return true;
  };

  stream.end = function(data) {
    say.stdin.end();
  };

  say.stdout.on('data', function(data) {
    stream.emit('data', data);
  });
  say.stdout.on('end', function() {
    stream.emit('end');
  });

  return stream;
};