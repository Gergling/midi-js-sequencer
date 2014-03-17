qh.getModule('application').controller("application.controller.index", [
	"$rootScope", 
	"$location", 
	"$route", 
	"sequencer.factory.pattern", 
	"sequencer.factory.navigation", 
	function($scope, $location, $routeConfig, pattern, navigation) {
		$scope.$on('$routeChangeSuccess', function (scope, current, previous) {
			navigation.action = current.action;
			$scope.include = current.include;
			switch(current.action) {
				case 'pattern-editor': {
					pattern.viewing = current.params.id;
				} break;
			}
		});
		$scope.include = "";
	}
]);
