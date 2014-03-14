qh.getModule('sequencer').directive('trackList', function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: qh.getQHModule('sequencer').getPath()+"/partial/track-list.html",
		controller: [
			"$scope", 
			"sequencer.factory.track", 
		function($scope, track) {
			$scope.tracks = track.list;
			$scope.newTrack = function() {track.newTrack();};

			$scope.zoomIn = track.view.zoomIn;
			$scope.zoomOut = track.view.zoomOut;
		}],
	};
});
