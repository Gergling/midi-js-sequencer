qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'song').getFullName(), [
		function() {
			var obj = {
				name: "Untitled song",
			};
			return obj;
		}
	]);
});
