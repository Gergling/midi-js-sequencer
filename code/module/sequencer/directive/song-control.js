qh.getModule('sequencer').directive('songControl', function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: qh.getQHModule('sequencer').getPath()+"/partial/song-control.html",
		controller: [
			"$scope", 
		function($scope) {
		}],
	};
});
