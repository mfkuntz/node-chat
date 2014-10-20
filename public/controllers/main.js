var ngApp = angular.module('ngApp', ['ngRoute']);
var loggedIn = false;
ngApp.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/', {
		templateUrl : '/views/home.html'
	})

	.when('/login',{
		templateUrl : '/views/login.html',
		controller : 'loginController'
	})

	.when('/contact',{
		templateUrl : '/views/contact.html',
		controller : 'contactController'
	})

	$locationProvider.html5Mode(true);

});


ngApp.controller('mainController', function($scope){
	function setLoginLabels(){
		$scope.lUser = (!loggedIn)? "Login" : "Test User Name";
		$scope.lLoginButton = (!loggedIn)? "Login" : "Logout";
		$scope.loggedIn = (loggedIn);
	}

	$scope.$on('login', function(event, args){
		setLoginLabels();
	});


	setLoginLabels();
});

ngApp.controller('loginController', function($scope){
	
	$scope.login = function(){
		loggedIn = !loggedIn;
		$scope.$emit('login', true);
	};

});

ngApp.controller('contactController', function($scope){
	$scope.message = 'Contact me, or not';
});
