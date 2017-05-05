var app=angular.module('myApp',['ngGrid','ngRoute'])

app.directive('myDirective', function () {
	  return {
	    restrict: 'E',
	   
	    templateUrl: 'textbox.html'
	  };
	});

/*app.directive('myDirective', function() {
    return {
        restrict: 'E',
template: '<h1>Hello Custom Directive!</h1>'
    };
});*/

app.config(function($routeProvider) {
    $routeProvider
    .when('/page1', {
        templateUrl : 'page1.html',
        controller : 'myCtrl'
    })
    .when('/page2', {
        templateUrl : 'page2.html',
        controller : 'myCtrl'
    })
    /*.when('/index', {
        templateUrl : 'index.html',
        controller : 'myCtrl'
    });*/
    
});
app.factory('TalkFactory', function($http){
	return {
	talkfac:function(){
	return $http.get("http://localhost:8081/RestfulWebServices_Java_Mysql_JSON/Rest/talkService/talks")
		.then(function(response) {
    	return response.data;
    },function(error){
    	throw error});
	}}
});

app.service('TalkService', function($http){
	this.talks=function(){
	return $http.get("http://localhost:8081/RestfulWebServices_Java_Mysql_JSON/Rest/talkService/talks")
		.then(function(response) {
    	return response.data;
    },function(error){
    	throw error});
	}
});
app.controller('myCntrl', function($scope){
	$scope.Name='abc';
})
app.controller('myCtrl', function($scope, TalkService,TalkFactory) {
	TalkService.talks().then(function(talk){
		$scope.myTalks=talk;
	},function(error){
		$scope.Error1=error;
	});
	$scope.gridOptions={data:'myTalks'};
	
	TalkFactory.talkfac().then(function(talk){
		$scope.Talks=talk;
	},function(error){
		$scope.Error2=error;
	});
	
	$scope.gridOption={data:'Talks'};
});