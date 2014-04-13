# say-stream

Streaming stuff into macs 'say' command. Isn't it nice to have a computer that will talk to you?

Install it via `npm install say-stream` and make sure to test it with `npm test`.

### Examples

 ```javascript
	 // A robot speaking everything from stdin
	var Say = require('say-stream').Say;
	var robot = new Say();
	process.stdin.pipe(robot);
 ```

 ```javascript
	var http = require('http');
	var choir = new Say("cellos");
	var url = "http://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new";
	http.get(url, function(request) {
	 	request.setEncoding('utf8');
	 	request.pipe(choir).pipe(process.stdout);
	});
```


 ```javascript
	var net = require('net');
	var whisper = new Say('whisper');
	var server = net.createServer(function(socket) {
		socket.pipe(whisper).pipe(process.stdout);
	});
	server.listen(8000);
	console.log("Listening on port 8000");
```
