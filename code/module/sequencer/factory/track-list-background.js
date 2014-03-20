qh.component('sequencer', function(ngm, qhm) {
	ngm.factory(qhm.getComponent('factory', 'track-list-background').getFullName(), [
		"$rootScope", 
		qhm.getComponent('factory', 'bar').getFullName(), 
	function($scope, bar) {
		var obj = {
			jqCanvas: jQuery('<canvas>').addClass('track-list-background'),
			update: function() {
				var canvas = obj.jqCanvas[0];
				var width = obj.jqCanvas.width();
				var height = obj.jqCanvas.height();
				if (canvas.getContext) {
					var ctx = canvas.getContext('2d');
					obj.drawBackground(ctx, width, height);
					obj.drawBars(ctx, width, height);
				} else {
					console.error("No context available.", obj.jqCanvas);
				}
			},
			drawBackground: function(ctx, width, height) {
				ctx.fillStyle = 'white';
				ctx.fillRect(0,0,width,height);
				ctx.fill();
			},
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
		bar.view.updateFuncs.push(obj.update);
		return obj;
	}]);
});
