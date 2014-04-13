# say-stream

Streaming stuff through macs 'say' command. Isn't it nice to have a computer that will talk to you?

Install it via `npm install say-stream` and make sure to test it with `npm test`.

### Examples

 ```javascript
	 // A robot speaking everything from stdin
	var say = require('say-stream');
	var robot = say();
	process.stdin.pipe(robot);
 ```

 ```javascript
	var http = require('http');
	var choir = say("cellos");
	var url = "http://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new";
	http.get(url, function(request) {
	 	request.setEncoding('utf8');
	 	request.pipe(choir).pipe(process.stdout);
	});
```


 ```javascript
	var net = require('net');
	var whisper = say('whisper');
	var server = net.createServer(function(socket) {
		socket.pipe(whisper).pipe(process.stdout);
	});
	server.listen(8000);
	console.log("Listening on port 8000");
```
