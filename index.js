var util = require('util');
var Transform = require('stream').Transform;
var exec = require('child_process').exec;
var Commandliner = require('commandliner');
var extend = require('extend');

function Say (voice, options) {
  Transform.call(this, options);
  Commandliner.call(this, 'say')
  this.options = {
    'interactive' : '\"\"',
    'voice': voice
  }
};

util.inherits(Say, Transform);
extend(true, Say.prototype, Commandliner.prototype);

Say.prototype._transform = function(data, encoding, done) {
  this.args = data.toString();
  var child = exec(this);
  child.stderr.pipe(process.stderr);
  child.stdout.on('data', this.push.bind(this));
  child.stdout.on('end', done);
};

module.exports = Say;