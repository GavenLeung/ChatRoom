var socketIO = require('socket.io');
var userList = [];


exports.createSocketIO = function(server){
	var io = socketIO(server);
	return io;
}

exports.socketConnect = function(io){
	io.on('connection', function(socket){
		console.log('a new user on the login html');

		handleWhenUserLoginChatRoom(socket);

	});
}

function handleWhenUserLoginChatRoom(socket){
	console.log('log log');
	socket.on('login', function(data){
		console.log('login data:',data);
	});
}