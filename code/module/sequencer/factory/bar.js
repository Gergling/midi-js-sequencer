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
				zoom: 4, // Number of visible bars
				offset: 0, // First bar on the left
			},
		};
		// Initial bars.
		for(var i=0;i<obj.view.zoom;i++) {obj.newBar();}
		return obj;
	}]);
});
