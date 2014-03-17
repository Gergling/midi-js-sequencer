qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'pattern').getFullName(), [
		"$rootScope", 
	function($scope) {
		var Pattern = function() {
			var localScope = this;
			this.id = obj.list.length;
			this.label = "Pattern "+this.id;
		};
		var obj = {
			viewing: 0,
			list: [],
			newPattern: function() {
				obj.list.push(new Pattern());
			},
		};
		return obj;
	}]);
});
