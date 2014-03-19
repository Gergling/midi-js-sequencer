qh.getModule('sequencer').directive('trackListBackground', function() {
	var mod = qh.getQHModule('sequencer');
	return {
		restrict: 'A',
		scope: {},
		templateUrl: mod.getPath()+"/partial/track-list-canvas.html",
		controller: [
			"$scope", 
			"$element", 
			mod.getComponent('factory', 'track-list-background').getFullName(), 
		function($scope, $element, bg) {
			var el = $element.children('canvas')[0];
			if (el.getContext) {
				var ctx = el.getContext('2d');
				bg.drawBars(ctx, el.width, el.height);
			} else {
				console.error("No context for you.", el);
			}
		}],
	};
});
