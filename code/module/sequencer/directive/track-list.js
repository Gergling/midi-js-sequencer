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
			$scope.zoomSet = bar.view.set;
			$scope.addPattern = function(trackId, $event) {
				var screenPos = $event.offsetX/$event.currentTarget.offsetWidth;
				var chosenBar = (screenPos*bar.view.zoom)+bar.view.offset;
				// Chosen bar is the time chosen by the click in bars.
				// This will be the starting position for the pattern. The pattern length will be a default if the off-click has already happened.
			};
			$scope.select = {
				trackId: 0,
				setStart: function(trackId, $event) {
					var screenPos = $event.offsetX/$event.currentTarget.offsetWidth;
					var chosenBar = (screenPos*bar.view.zoom)+bar.view.offset;

					$scope.select.trackId = trackId;
					$scope.select.start = $event.offsetX;
					$scope.select.changing = true;
				},
				setChange: function($event) {
					if ($scope.select.changing) {
						$scope.select.end = $event.offsetX;
						$scope.select.width = $scope.select.end-$scope.select.start;
						console.log($event.offsetX, $event.offsetY, $scope.select.start, $scope.select.width, $scope.select.end);
					}
				},
				setEnd: function() {
					$scope.select.on = true;
					$scope.select.changing = false;
				},
				start: 0,
				width: 0,
				end: 0,
				changing: false,
				on: false,
			};
		}],
	};
});
