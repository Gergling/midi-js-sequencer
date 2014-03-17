qh.getModule('application').config([
		'$routeProvider', 
	function($routeProvider, navigation) {
		$routeProvider.when('/', {templateUrl: 'module/application/partial/dashboard.html'});
		
		/*navigation.loopRoutes(function(route) {
			$routeProvider.when(route.route, route);
		});*/
		
		var routeActions = {
			'/song/':'track-list',
			'/song/pattern/:id/':'pattern-editor',
			'/song/channels/':'channel-manager',
		};
		
		angular.forEach(routeActions, function(action, route) {
			$routeProvider.when(route, {
				templateUrl: 'module/application/partial/song.html',
				action: action,
				include: ['module/sequencer/partial/song-view-', action, '.html'].join(''),
			});
		});

		$routeProvider.otherwise({templateUrl: 'module/application/partial/404.html'});
	}
]);
