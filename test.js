var assert = require('assert');
var say = require('./index.js');
var Say = require('./index.js').Say;
var promptly = require('promptly');


describe('Say', function() {
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
      var question = 'Isnt it nice to have a computer that will talk to you?';
      victoria.write(question);
      promptly.confirm(question, function(err, agreed) {
        assert(agreed);
        done();
      });
    });
  });
  describe('karaoke', function() {
    var choir = new Say('cellos');
    it('should display the lyrics line by line as they are singing', function(done) {
      console.log('You should now here the choir and see the lines as they are singing them');
      var lyrics = 'Because I am happy\nYour mummy is happy too\nlalala';
      choir.on('data', function(chunk) {
        process.stdout.write(chunk);
      });
      choir.on('end', function() {
        promptly.confirm('Did you hear the choir?', function(err, agreed) {
          assert(agreed);
          done();
        });
      });
      choir.write(lyrics);
      choir.end();
    });
  });
});