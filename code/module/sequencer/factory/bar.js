qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'bar').getFullName(), [
		"$rootScope", 
	function($scope) {
		var Bar = function() {
			var localScope = this;
			this.id = obj.list.length;
			this.label = this.id;
		};
		var obj = {
			list: [],
			newBar: function() {
				obj.list.push(new Bar());
			},
			view: {
				min: 4,
				zoom: 4, // Number of visible bars
				offset: 0, // First bar on the left
				presets: [],
				zoomIn: function() {
					obj.view.zoom--;
					obj.view.zoom = Math.max(obj.view.zoom, obj.view.min);
					obj.view.update();
				},
				zoomOut: function() {
					obj.view.zoom++;
					obj.view.update();
				},
				set: function(zoom) {
					obj.view.zoom = zoom;
					obj.view.update();
				},
				updateFuncs: [],
				update: function() {
					angular.forEach(obj.view.updateFuncs, function(fnc) {fnc();});
				},
			},
		};
		// Initial bars.
		for(var i=0;i<obj.view.zoom;i++) {obj.newBar();}
		obj.view.presets.push(obj.view.min);
		for(var i=1;i<=4;i++) {obj.view.presets.push(8*i);}
		for(var i=3;i<=8;i++) {obj.view.presets.push(16*i);}
		//for(var i=1;i<=10;i++) {obj.view.presets.push(4*i);}
		return obj;
	}]);
});
