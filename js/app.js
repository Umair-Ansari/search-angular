var app = angular.module("app", [
	'ngRoute',
	'main'
 ]);
 app.config(['$routeProvider',function($routeProvider){
 	$routeProvider.
 	when('/list',{
 		templateUrl : 'templates/developer.html',
 		controller : 'ListController'
 	}).
 	when('/detail/:itemId',{
 		templateUrl : "templates/detail.html",
 		controller : 'DetailController'
 	}).
 	otherwise({
 		redirectTo : '/list'
 	})
 }]);