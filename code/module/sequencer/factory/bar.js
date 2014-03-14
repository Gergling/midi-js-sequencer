qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'bar').getFullName(), [
		"$rootScope", 
	function($scope) {
		var Bar = function() {
			var localScope = this;
			this.id = obj.list.length;
			this.label = this.id;
			this.width = 1;
			this.updateWidth = function() {
				this.width = (100/obj.view.zoom)+"%";
			};
		};
		var obj = {
			list: [],
			newBar: function() {
				obj.list.push(new Bar());
			},
			view: {
				zoom: 4, // Number of visible bars
				offset: 0, // First bar on the left
			},
			update: function() {
				angular.forEach(obj.list, function(bar) {bar.updateWidth();});
			},
			zoomIn: function() {
				obj.view.zoom--;
				obj.view.zoom = Math.max(obj.view.zoom, 0);
				obj.update();
			},
			zoomOut: function() {
				obj.view.zoom++;
				obj.update();
			},
		};
		// Initial bars.
		for(var i=0;i<obj.view.zoom;i++) {obj.newBar();}
		
		// And another one for testing the zoom.
		for(var i=0;i<obj.view.zoom;i++) {obj.newBar();}
		
		obj.update();
		return obj;
	}]);
});
