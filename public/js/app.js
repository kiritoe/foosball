var app = angular.module('foosball', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: '/js/view/home.html',
		controller: 'homeCtrl'
	})
	
	.when('/suck/profile', {
		templateUrl: '/js/view/suck/profile.html',
		controller: 'profileCtrl'
	})

	.when('/login/register', {
		templateUrl: '/js/view/login-register/login.html',
		controller: 'loginCtrl'
	})

	
})