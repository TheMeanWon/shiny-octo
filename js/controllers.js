var artistControllers = angular.module('artistControllers', ['ngAnimate']);

//artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
//
//	$http.get('js/data.json').success(function (data) {
//		$scope.artists = data;
//		$scope.artistOrder = 'name';
//	});
//}]);
//
//artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//
//	$http.get('js/data.json').success(function (data) {
//		$scope.artists = data;
//		$scope.whichItem = $routeParams.itemId;
//
//		if ($routeParams.itemId > 0) {
//			$scope.prevItem = Number($routeParams.itemId) - 1;
//		} else {
//			$scope.prevItem = $scope.artists.length - 1;
//		}
//
//		if ($routeParams.itemId < $scope.artists.length - 1) {
//			$scope.nextItem = Number($routeParams.itemId) + 1;
//		} else {
//			$scope.nextItem = 0;
//		}
//	});
//}]);

artistControllers.controller('LabController', ['$scope', function ($scope) {

	$scope.count = 0;
	$scope.lab = [  
   {  
      "site":"JF",
      "lab":"4320",
      "number":"12B1",
      "x":"385",
      "y":"0",
      "w":"30",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4320",
      "number":"12B2",
      "x":"325",
      "y":"0",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4320",
      "number":"12B3",
      "x":"265",
      "y":"0",
      "w":"30",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12B4",
      "x":"205",
      "y":"0",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12B5",
      "x":"145",
      "y":"0",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12B6",
      "x":"85",
      "y":"0",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12B7",
      "x":"25",
      "y":"0",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A1",
      "x":"360",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A2",
      "x":"300",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A3",
      "x":"240",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A4",
      "x":"180",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A5",
      "x":"120",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A6",
      "x":"60",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   },
   {  
      "site":"JF",
      "lab":"4321",
      "number":"12A7",
      "x":"0",
      "y":"120",
      "w":"60",
      "h":"30",
      "active":true,
      "currentUser":"Lab Technician",
      "userTeam":"TMT",
      "id":null,
      "platCount":1
   }
]
	
}]);