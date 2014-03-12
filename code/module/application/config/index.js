qh.getModule('application').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'module/application/partial/dashboard.html'});
	$routeProvider.when('/song/', {templateUrl: 'module/application/partial/tracklist.html'});
	$routeProvider.otherwise({templateUrl: 'module/application/partial/404.html'});
}]);
