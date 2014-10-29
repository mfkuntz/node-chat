var ngApp = angular.module('ngApp', ['ngRoute']);

ngApp.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/', {
		templateUrl : '/views/home.html'
	})

	.when('/login',{
		templateUrl : '/views/login.html',
		controller : 'loginController'
	})

	.when('/chat',{
		templateUrl : '../private/views/chat.html',
		controller : 'chatController'
	})

	$locationProvider.html5Mode(true);

});


ngApp.controller('mainController', function($scope){
	function setLoginLabels(){
		$scope.lUser = (!isLoggedIn())? "Login" : $scope.userName;
		$scope.lLoginButton = (!isLoggedIn())? "Login" : "Logout";
	}

	$scope.$on('login', function(event, args){
		setLoginLabels();
	});


	setLoginLabels();
	$scope.userName = "Test User";
});

ngApp.controller('loginController', function($scope, $http, $window){
	


	$scope.login = function(){
		var user = {
			username : $scope.user.username,
			password : $scope.user.password
		};
		
		$http
			.post('/login', user)
			.success(function(data, status, headers, config){
				$window.sessionStorage.token = data.token;
				$scope.$emit('login', true);
			})
			.error(function(){
				delete $window.sessionStorage.token;
			});

		
	};

});

ngApp.controller('chatController', function($scope){
	$scope.messages = [
		{
			sender : "Bob",
			text : "Message 1"
		},
		{
			sender : "Bob",
			text : "Message 2"
		},
		{
			sender : "Bob",
			text : "Message 3"
		},
		{
			sender : "Bob",
			text : "Message 4"
		}
	];

	$scope.sendMessage = function(){
		var message = {
			sender : $scope.userName,
			text : $scope.formData.chatMessage
		};

		$scope.formData.chatMessage = "";

		$scope.messages.push(message);

	};
});


function isLoggedIn(){
	return (window.sessionStorage.token != null);
}