qh.getModule('sequencer').directive('trackList', function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: qh.getQHModule('sequencer').getPath()+"/partial/track-list.html",
		controller: [
			"$scope", 
			"sequencer.factory.track", 
			"sequencer.factory.bar", 
		function($scope, track, bar) {
			$scope.tracks = track.list;
			$scope.bars = bar.list;
			$scope.newTrack = track.newTrack;

			$scope.zoom = bar.view;
		}],
	};
});
