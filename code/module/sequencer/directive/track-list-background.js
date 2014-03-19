qh.getModule('sequencer').directive('trackListBackground', function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: qh.getQHModule('sequencer').getPath()+"/partial/track-list-canvas.html",
		controller: [
			"$scope", 
			"$element", 
			"sequencer.factory.track", 
			"sequencer.factory.bar", 
		function($scope, $element, track, bar) {
			console.log($element);
		}],
	};
});
