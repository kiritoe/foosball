var app = angular.module('foosball', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: '/js/view/home.html',
		controller: 'homeCtrl'
	})
	.when('/profile', {
		templateUrl: '/js/view/profile/profile.html',
		controller: 'profileCtrl'
	})
	.when('/login/register', {
		templateUrl: '/js/view/login-register/login.html',
		controller: 'loginCtrl'
	})
	.otherwise({
			redirectTo: '/'
	})

})