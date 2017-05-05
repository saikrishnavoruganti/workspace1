var myApp1 = angular.module("myApp1", ["ngRoute"]);
myApp1.config(function($routeProvider) {
    $routeProvider
    .when('/', {
		templateUrl : 'index.html',
		controller  : 'mainController'
	})
    
    .when('/index', {
        templateUrl : 'index1.html',
        controller  : 'indexController'
    })
    .when('/client', {
        templateUrl : 'Client.html',
    	controller  : 'clientController' 
    });
});
myApp1.controller('mainController', function($scope){
	$scope.message='Main';
	
});
myApp1.controller('indexController', function($scope){
	$scope.message='index';
	
});
myApp1.controller('clientController', function($scope){
	$scope.message='Client';
	
});