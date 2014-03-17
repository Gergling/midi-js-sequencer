/* 
 * Sequencer
 * 
 * The sequencer is the overall base state of the (track view)
 * 
 * A sequencer has the following:
 * 
 * Tempo
 * Time sig
 * Tracks (array of Track objects);
 * each track has a number of patterns which in turn will be displayed on the "sequencer"
 * 
 * The sequencer should have the ability to:
 * 
 * zoom in
 * zoom out
 * scroll x axis
 * 
 * A scroll for the y axis would be displayed by the "track list" 
 * which also happens to be a dependency of the sequencer :)
 */

qh.component('sequencer', function(ngm, qhm) {
    ngm.factory(qhm.getComponent('factory', 'sequencer').getFullName(), [
        'sequencer.factory.track',
        function(track) {
            // There is only one sequencer hence why this object is instantiated and then returned
            var Sequencer = (function() {
                this.actions = {
                    play: function () { return; },
                    pause: function () { return; },
                    stop: function () { return; },
                    back: function () { return; }
                };
                this.history = {
                    list: [],
                    add: function (state) {
                        this.history.list.push(state);
                    },
                    clear: function () {
                        this.history.list = [];
                    }
                };
                this.track = {
                    list: track.list,
                    create: track.newTrack
                };
                this.pattern = {
                    list: [],
                    create: pattern.newPattern
                };
                this.view = {
                    zoom: 0,
                    offset: 0,
                    zoomIn: function() {
                        this.view.zoom--;
                        this.view.zoom = Math.max(obj.view.zoom, 0);
                    },
                    zoomOut: function() {
                        this.view.zoom++;
                    }
                };
                this.pointer = {
                    position: 0,
                    currentPosition: function() { return; },
                    setPosition: function(pos) {
                        this.pointer.position = pos;
                    }
                };
            })();

            return Sequencer;
        }]);
});