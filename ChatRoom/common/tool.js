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
	socket.on('login', function(data){
		console.log('login data:',data);
		var newUser = data.loginInfo.user;
		console.log('has logined userList:',userList);
		if (newUser) {
			if (userList.indexOf(newUser) >= 0) {
				console.log('in');
				var loginResponse = {
					loginSucceed : false
				}
				socket.emit('loginResponse', loginResponse);
			} else {
				var loginResponse = {
					loginSucceed : true,
					user : newUser
				}
				console.log('loginResponse:',loginResponse);
				socket.broadcast.emit('broadcastOtherUser', data.loginInfo);
				socket.emit('loginResponse', loginResponse);
				userList.push(newUser);
			}
		}else {
			// TO DO
		}
	});
}
