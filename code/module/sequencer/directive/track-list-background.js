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
			var jqCanvas = bg.jqCanvas;
			jqCanvas.attr('width', $element.parent().width());
			jqCanvas.attr('height', $element.parent().height());
			$element.append(jqCanvas);
			bg.update();
		}],
	};
});
