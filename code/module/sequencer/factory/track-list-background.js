qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'track-list-background').getFullName(), [
		"$rootScope", 
		qhm.getComponent('factory', 'bar').getFullName(), 
	function($scope, bar) {
		var obj = {
			drawBars: function(ctx, width, height) {
				var barWidth = width/bar.view.zoom;
				// clear the canvas
				ctx.clearRect(0, 0, width, height);

				// Draw the black background
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, width, height);

				ctx.strokeStyle = "lightgrey";
				ctx.lineWidth = 1;
				
				ctx.imageSmoothingEnabled = false;

				var x;
				for(var i=0;i<bar.view.zoom;i++) {
					//ctx.lineCap = "square";
					x = Math.floor(barWidth*i)+0.5;
					//ctx.beginPath();
					ctx.moveTo(x,0);
					ctx.lineTo(x,height);
				}
				ctx.stroke();
			},
		};
		return obj;
	}]);
});
