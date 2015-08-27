var app = angular.module('foosball', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: '/js/view/home.html',
		controller: 'homeCtrl'
	})
	.when('/profile', {
		templateUrl: '/js/view/prfile/profile.html',
		controller: 'profileCtrl'
	})
	.otherwise({
			redirectTo: '/'
	})

})