var app = angular.module('myApp', ['ngGrid','ngRoute']);

app.config(function($routeProvider) {
	//$locationProvider.hashPrefix(" ");
    $routeProvider
    .when("/", {
        templateUrl : "default.html"	
    })
    .when("/talks", {
        templateUrl : "angular.html",
        controller : "HelloCntr"	
    })
    .when("/heelomsg", {
        templateUrl : "indexAngular.html",
        controller: "HaiCntr"	
    })
});

app.controller('HelloCntr', function($scope,TalkService, myService)
{
	
    /*$scope.hellomsg = "Hello Message"; 
    
    $scope.Employees=[{ID:1, Name:'Sam', salary:'2000'},
                      {ID:2, Name:'Tim', salary:'2050'},
                      {ID:3, Name:'Ram', salary:'2060'},
                      {ID:4, Name:'Kyle', salary:'2070'},
                     ];
    
    $scope.GetAllData = function () {
        $http.get('Rest/getAll/get')
        .success(function (data, status, headers, config) {
            $scope.Talk = data;
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<br />status: " + status +
                "<br />headers: " + jsonFilter(header) +
                "<br />config: " + jsonFilter(config);
        });
    };*/
    
	//USING SERVICE
  var serv =TalkService.talks(); 
   
   serv.then(function(data) {
       $scope.Talk = data.data;
   })
   
   $scope.gridOptions = { data: 'Talk'}
	
	//USING ng-grid
	/*var serv =TalkService.talks(); 
	   
	   serv.then(function(data) {
		   $scope.mySelections = [];
		   $scope.Talk = data.data;
		   $scope.gridOptions = {data:'Talk',
				   selectedItems: $scope.mySelections,
				   multiSelect: true };
	   })*/
   
	//USING FACTORY
   /*myService.async().then(function(d) {
	    $scope.Talk = d;
	  });*/
   
});

app.controller('HaiCntr', function ($scope, $http) {
	$scope.talk = {};
	
    $scope.addTalk = function(){
    	//console.log($scope.talk);
    	
    	$http.post('Rest/insertTalk/talk', $scope.talk)
    			   .then(function(data, status, headers, config) {
    					alert(data);
    			   });
		/*res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});*/
    }
});

app.service('TalkService', ['$http', function($http){
	
	 this.talks = function () {
		 return $http.get('Rest/getAll/get')
         .success(function (data, status, headers, config) {
             return data;
         })
     };
	
}]);

app.factory('myService', function($http) {
	  var myService = {
	    async: function() {
	      // $http returns a promise, which has a then function, which also returns a promise
	      var promise = $http.get('Rest/getAll/get').then(function (response) {
	        // The then function here is an opportunity to modify the response
	        console.log(response);
	        // The return value gets picked up by the then in the controller.
	        return response.data;
	      });
	      // Return the promise to the controller
	      return promise;
	    }
	  };
	  return myService;
	});
	            
	            

		

