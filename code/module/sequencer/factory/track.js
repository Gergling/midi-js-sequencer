/*
 * Track
 * 
 * A track has the following:
 * 
 * A unique identifier (as close to unique as possible :) )
 * Name (Optional string)
 * Patterns (array of Pattern objects)
 * Channel (currently an int)
 * 
 * A track can be:
 * 
 * Selected
 * Muted
 * Solo'd
 * And the opposite of the above
 */

qh.component('sequencer', function(ngm, qhm) {
    ngm.factory(qhm.getComponent('factory', 'track').getFullName(), [
        "application.factory.uid",
        function(uid) {
            var Track = function() {
                this.id = uid.new();
                this.channel = 0;
                this.label = "Track " + (obj.list.length + 1);
                this.canSolo = true;
                this.solo = false;
                this.canMute = true;
                this.mute = false;
                this.selected = false;
            };
            Track.prototype = {
                setLabel: function() {
                    var label = prompt('Track name?');
                    this.label = (label) ? label : this.label;
                },
                solo: {
                    toggle: function() {
                        console.log('toggling solo:', this);
                        if (this.canSolo) {
                            this.solo = (this.solo) ? false : true;
                        }
                        return this;
                    },
                    disable: function() {
                        this.canSolo = false;
                        return this;
                    },
                    enable: function() {
                        this.canSolo = true;
                        return this;
                    }
                },
                mute: {
                    toggle: function() {
                        if (this.canMute) {
                            console.log('toggling mute:', this);
                            this.mute = (this.mute) ? false : true;
                            this.canMute = (this.mute) ? false : true;
                        }
                        return this;
                    },
                    disable: function() {
                        this.canMute = false;
                        return this;
                    },
                    enable: function() {
                        this.canMute = true;
                        return this;
                    }
                },
                select: function(many) {
                    var scope = this;
                    this.selected = true;
                    console.log('selected:', this, 'disabling others');
                    if (!many) {
                        angular.forEach(obj.list, function(track) {
                            if (track.id !== scope.id) {
                                track.setSelected(false);
                            }
                        });
                    }
                },
                setSelected: function(b) {
                    this.selected = b;
                    return this;
                }
            };

            var obj = {
                list: [],
                newTrack: function() {
                    obj.list.push(new Track());
                },
                view: {
                    zoom: 0, // 0 is maximum zoom-in. Increasing zoom zooms out.
                    offset: 0,
                    zoomIn: function() {
                        obj.view.zoom--;
                        obj.view.zoom = Math.max(obj.view.zoom, 0);
                    },
                    zoomOut: function() {
                        obj.view.zoom++;
                    }
                }
            };
            return obj;
        }]);
});
