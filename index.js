var Writable = require('stream').Writable;
var util = require('util');
var exec = require('child_process').exec;

var Say = function (voice, options) {
  Writable.call(this, options);
  var voice = voice || "Zarvox";
  this.say = exec("trap 'exit' INT; while read line; do echo $line; echo $line | say -v " + voice + " ; done" ,
  function (error, stdout, stderr) {
    if (error !== null) {
      console.error('exec error: ' + error);
    }
  });
}

util.inherits(Say, Writable);

Say.prototype._write = function(data, encoding, done) {
  this.say.stdin.write(data.toString() + "\n");
  done();
};

Say.prototype.kill = function() {
  this.say.kill();
};

exports.Say = Say;