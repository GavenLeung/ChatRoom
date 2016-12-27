var app = angular.module('ChatApp',[]);

app.factory('socketFactory',['$rootScope', 
	function($rootScope){
		var socket = io();

		var on = function(eventName, callback){
			socket.on(eventName, function(){
				//arguments is data which return from socket when listen on event
				var args = arguments;
				console.log('args:',args);
				
				$rootScope.$apply(function(){
					callback.apply(socket, args);
				});
			});
		}

		var emit = function(eventName, data, callback){
			socket.emit(eventName, data, function(){
				var args = arguments;
				$rootScope.$apply(function(){
					if (callback) {
						callback.apply(socket, args);	
					};
				});
			});
		}

		return {
			on: on,
			emit: emit
		}
}]);