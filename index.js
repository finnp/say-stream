var util = require('util');
var Transform = require('stream').Transform;
var exec = require('child_process').exec;
var cmdliner = require('commandliner');

function Say (voice, options) {
  Transform.call(this, options);
  this.voice = voice || 'Zarvox';
};

util.inherits(Say, Transform);

Say.prototype._transform = function(data, encoding, done) {
  var text = data.toString();
  var saycmd = cmdliner('say', {'interactive' : '""', 'voice': this.voice}, text);
  var child = exec(saycmd);
  child.stderr.pipe(process.stderr);
  child.stdout.on('data', this.push.bind(this));
  child.stdout.on('end', done);
};

module.exports = Say;