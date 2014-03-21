/* 
 * Pattern
 * 
 * A pattern is a collection of notes.
 * 
 * A pattern has the following:
 * 
 * UID 
 * Length int
 * Start point int
 * End point int
 * Name String (Optional)
 * Notes (Array of Note objects)
 */

qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'pattern').getFullName(), [
		"$rootScope", 
		'collection.factory.Collection',
	function($scope, Collection) {
		var Pattern = function() {
			var localScope = this;
			this.id = obj.list.length;
			this.label = "Pattern "+this.id;
		};
		var obj = {
			viewing: 0,
			list: new Collection([], ['id'], ['trackId']),
			newPattern: function() {
				obj.list.push(new Pattern());
			},
		};
		return obj;
	}]);
});
