// A robot speaking everything from stdin
var Say = require('../index.js').Say;
var robot = new Say();
process.stdin.pipe(robot);