qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'track-list-background').getFullName(), [
		"$rootScope", 
		qhm.getComponent('factory', 'bar').getFullName(), 
	function($scope, bar) {
		var obj = {
			drawBars: function(ctx, width, height) {
				var barWidth = width/bar.view.zoom;
				ctx.beginPath();

				ctx.strokeStyle = "lightgrey";
				ctx.fillStyle = 'lightgrey';
				ctx.lineWidth = 1;
				
				ctx.imageSmoothingEnabled = false;

				var x;
				for(var i=0;i<bar.view.zoom;i++) {
					x = Math.floor(barWidth*i)+0.5;
					ctx.moveTo(x,0);
					ctx.lineTo(x,height);
				}
				ctx.stroke();
			},
		};
		return obj;
	}]);
});
