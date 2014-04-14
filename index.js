var Transform = require('stream').Transform;
var util = require('util');
var exec = require('child_process').exec;

var Say;

Say = function (voice, options) {
  Transform.call(this, options);
  this.voice = voice || 'Zarvox';
}

util.inherits(Say, Transform);

Say.prototype._transform = function(data, encoding, done) {
  var child = exec('say --interactive="" -v ' + this.voice + ' "' + data.toString() + '"');
  child.stderr.pipe(process.stderr);
  child.stdout.on('data', this.push.bind(this));
  child.stdout.on('finish', done);
};

exports.Say = Say;