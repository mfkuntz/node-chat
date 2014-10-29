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
	$scope.messages = [];
	$scope.roomName = "Public";
	var socket = io();

	$scope.joinRoom = function(){
		socket.emit('joinRoom', $scope.formData.roomName);
		$scope.roomName = $scope.formData.roomName;
		$scope.formData.roomName = "";
		return false;
	};

	$scope.sendMessage = function(){
		var message = {
			reciever : 'User2',
			sender : $scope.userName,
			message : $scope.formData.chatMessage
		};

		socket.emit('message', message);

		$scope.formData.chatMessage = "";

		$scope.messages.push(message);
		return false;
	};

	socket.on('message', function(message){
		console.log("Message rcd: ", message);
		$scope.messages.push(message);		
		$scope.$apply();
	});


});


function isLoggedIn(){
	return (window.sessionStorage.token != null);
}

//figure out a custom directive for an enter event in the future
// ngApp.directive('ng+enter', function(){
// 	return function(scope, element, attrs) {
//         element.bind("keydown keypress", function(event) {
//             if(event.which === 13) {
//                 scope.$apply(function(){
//                     scope.$eval(attrs.ngEnter, {'event': event});
//                 });

//                 event.preventDefault();
//             }
//         });
//     };
// });