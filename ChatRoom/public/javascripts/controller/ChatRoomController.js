var app = angular.module('ChatApp');

app.controller('chatController', ['$scope', 'socketFactory', 'dataModelService',
 	function($scope,socket,dataModelService){

 		$scope.chatRoom = dataModelService.initScope();

 		$scope.login = function(loginName, loginPassword){
 			var info = {
 				loginInfo: {
 					user: loginName,
 					password: loginPassword
 				}
 			}
 			console.log('info:',info);
 			socket.emit('login',info);
 		}

 		$scope.send = function(content){
 			if (content) {
 				dataModelService.sendMessageToRoom($scope.chatRoom.userInfo.name, content);
 			};
 		}

 		listenLoginResponseFromServer(socket,$scope);

 		checkNewMessage(socket)

 		listenOtherClientLogin(socket);

// test master 3
 		console.log($scope);
 	}
]);

function listenLoginResponseFromServer(socket, $scope){
	socket.on('loginResponse', function(loginData){
		if (loginData.loginSucceed) {
			$scope.chatRoom.userInfo.hasLogined = true;
		} else {
			alert('user has logined');
		}
	});
}

function checkNewMessage(socket, $scope){
	socket.on('newMessageShouldShowInRoom', function(allMessage){
		$scope.chatRoom.roomMessage.allMessage = allMessage;
	});
}

function listenOtherClientLogin(socket){
	socket.on('broadcastOtherUser', function(data){
		console.log('other user:',data);
	});
}
