///**
// * New node file
// */

var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8080);

// routing
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/socket.io.html');
});

io.sockets.on('connection', function(socket) {
	console.log("Client connected");
	
	socket.on("hi", function(greeting) {
		console.log("Client said: " + greeting);
	});
	
	socket.on("bye", function(message) {
		console.log("Client is saying goodbye: " + message);
		io.sockets.emit("byeReply", "Ale, que te den");
	});
});
