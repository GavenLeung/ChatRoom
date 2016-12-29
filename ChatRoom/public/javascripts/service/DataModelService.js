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

//  test rebase in master
		this.readyForTestRebase = function(){}
	}]);