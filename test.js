var assert = require('assert');
var say = require('./index.js');
var Say = require('./index.js').Say;
var promptly = require('promptly');


describe('say', function() {
  this.timeout(0);
  describe('robot', function() {
    var robot = new Say();
    it('should friendly great the user', function(done) {
      console.log('');
      console.log('You should now hear a robot greeting you.');
      console.log('Disclaimer: You need speakers turned on for this.');
      console.log('(If you hear a robot anyway, make sure to greet back.)');
      robot.write('Hello, friend.');
      robot.end();
      promptly.confirm('Did the robot greet friendly?', function(err, agreed) {
        assert(agreed);
        done();
      });
    });
  });
  describe('victoria', function() {
    var victoria = new Say('victoria');
    it('should be nice to have a computer that will talk to you', function(done) {
      var question = 'Isn\'t it nice to have a computer that will talk to you?';
      victoria.write(question);
      promptly.confirm(question, function(err, agreed) {
        assert(agreed);
        done();
      });
    });
  });
});