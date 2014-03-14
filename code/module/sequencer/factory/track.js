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
		};
		return obj;
	}]);
});
