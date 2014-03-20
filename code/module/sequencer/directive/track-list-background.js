qh.getModule('sequencer').directive('trackListBackground', function() {
	var mod = qh.getQHModule('sequencer');
	return {
		restrict: 'A',
		scope: {},
		template: $('<div>').html(),
		controller: [
			"$scope", 
			"$element", 
			mod.getComponent('factory', 'track-list-background').getFullName(), 
		function($scope, $element, bg) {
			var jqCanvas = $('<canvas>').addClass('track-list-background');
			jqCanvas.attr('width', $element.parent().width());
			jqCanvas.attr('height', $element.parent().height());
			$element.append(jqCanvas);
			if (jqCanvas[0].getContext) {
				var ctx = jqCanvas[0].getContext('2d');
				bg.drawBars(ctx, jqCanvas.width(), jqCanvas.height());
			} else {
				console.error("No context available.", jqCanvas);
			}
		}],
	};
});
