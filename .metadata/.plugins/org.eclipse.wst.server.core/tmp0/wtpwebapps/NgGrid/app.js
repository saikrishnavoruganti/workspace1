var app=angular.module('myApp',['ngGrid'])
app.factory('TalkFactory', function($http){
	return {
	talkfac:function(){
	return $http.get("http://localhost:8081/Talk_SummitWorks_WebServices_Project/Rest/getAll/get")
		.then(function(response) {
    	return response.data;
    },function(error){
    	throw error});
	}}
});

app.service('TalkService', function($http){
	this.talks=function(){
	return $http.get("http://localhost:8081/Talk_SummitWorks_WebServices_Project/Rest/getAll/get")
		.then(function(response) {
    	return response.data;
    },function(error){
    	throw error});
	}
});

app.controller('myCtrl', function($scope, TalkService,TalkFactory) {
	TalkService.talks().then(function(talk){
		$scope.myTalks=talk;
	},function(error){
		$scope.Error1=error;
	});
	
	
	TalkFactory.talkfac().then(function(talk){
		$scope.Talks=talk;
	},function(error){
		$scope.Error2=error;
	});
	
	$scope.gridOptions={data:'Talks'};
});