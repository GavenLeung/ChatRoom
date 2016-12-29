var app = angular.module('ChatApp');

app.service('dataModelService', ['socketFactory',
	function(socket){

		this.initScope = function(){
			var initData = {
				userInfo: {
					name: '',
					password: '',
					hasLogined: false	
				},
				roomMessage: {
					sendContent: '',
					allMessage: []	
				}
			};

			return initData;	
		}

//  test rebase in 2 master
//  test rebase in chat_0003
		this.readyForTestRebase = function('aa','bb'){
			for (var i in arguments) {
				
			};
		}

	}]);