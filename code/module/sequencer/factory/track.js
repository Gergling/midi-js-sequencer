qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'track').getFullName(), [
		"$rootScope", 
	function($scope) {
		var Track = function() {
			var localScope = this;
			this.id = obj.list.length;
			this.channel = 0;
			this.label = "Track "+this.id;
		};
		var obj = {
			list: [],
			newTrack: function() {
				obj.list.push(new Track());
			},
			view: {
				zoom: 0, // 0 is maximum zoom-in. Increasing zoom zooms out.
				offset: 0,
				zoomIn: function() {
					obj.view.zoom--;
					obj.view.zoom = Math.max(obj.view.zoom, 0);
				},
				zoomOut: function() {
					obj.view.zoom++;
				},
			},
		};
		return obj;
	}]);
});
