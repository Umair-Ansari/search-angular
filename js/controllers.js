var main = angular.module("main", []).controller("ListController", ['$scope',function($scope){
	$scope.developers = data;
	$scope.order = "name";
	$scope.decending = false;
}]).controller("DetailController", ['$scope', '$routeParams', function($scope,$routeParams){
	$scope.itemId = $routeParams.itemId;
	
	$scope.developers =$scope.developers = data;
	$scope.prevItem = $routeParams.itemId > 0 ? Number($routeParams.itemId) - 1 : $scope.developers.length - 1;
	$scope.nextItem = $routeParams.itemId <  $scope.developers.length - 1 ? Number($routeParams.itemId) + 1 : 0;
 
}]);

var data =  [
		{
			"name" : "Mohsin Niazi",
			"headline" : "AWS Certified Solutions Architect",
			"image" : "mohsin",
			"email" : "mohsin_niazi@outlook.com",
			"intro" : "I am a MEAN stack and Scala enthusiast, I started my career as a freelancer helping clients building web and mobile applications. Since then I have worked with companies and startups both as a full time employee and outsourced developer working on exciting problems like live streaming, addiction recovery apps and engineering simulators. In my free time I work on functional and reactive paradigms, distributed systems and micro-services."
		},
		{
			"name" : "Sibtain Abbas",
			"headline" : "AWS Certified Solutions Architect",
			"image" : "sibtain",
			"email" : "sibtain.abbas10@gmail.com",
			"intro" : "A full stack developer always ready to learn new technologies. An enthusiast of continuous integration, test first, and agile environments"
		},
		{
			"name" : "Imran Shahid",
			"headline" : "Professional Services Consultant at Teradata",
			"image" : "imran",
			"email" : "mk_shahid@hotmail.com",
			"intro" : "Having 1+ years of professional experience, Imran Shahid is working with Teradata GDC as a Professional Services Consultant. Currently, responsible for working with Data Integration team and flourishing expertise in field of Data Warehousing. He is an experienced ETL developer and possesses great problem solving skills. He has strong concepts of Data Warehousing, ETL development and Dimensional Modeling. He is fluent, eloquent and he is exceptionally good with his communication and Interpersonal skills"
		},
		{
			"name" : "Ali Ashraf",
			"headline" : "Chief Innovation Officer at BurqStream.",
			"image" : "ali",
			"email" : "http://aliashraf.net",
			"intro" : "Developer, Innovator, Programmer, Designer and everything in between.aliashraf.net"
		}
	];
