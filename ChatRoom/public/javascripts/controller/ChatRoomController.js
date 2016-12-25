var app = angular.module('ChatApp',[]);

app.controller('chatController', ['$scope', 
 	function($scope){
 		var socket = io();
 		var userInfo = {
 			name: '',
 			password: ''
 		};

 		$scope.chatRoom = userInfo;

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
 	}]);