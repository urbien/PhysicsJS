/**
 * Follow touch
 * Allows bodies to follow the motions of the dragged mouse
 *
 * requires Hammer.js
 * @module behaviors/follow-touch
 */

Physics.behavior('follow-touch', function(parent) {
	var DRAG_TOPIC = 'drag';
	return {
		init: function( options ){
            // call parent init method
            parent.init.call(this, options); // do we need options at all here?
			
			this.touchPos = Physics.vector();
			this.touchPosOld = Physics.vector();
			this.tmp = Physics.vector();
			this.dragged = Physics.vector();
			this.offset = Physics.vector();
			
			this.dragging = false;			
			this._ondrag = this._ondrag.bind(this);
			this._ondragend = this._ondragend.bind(this);
		},

		_ondrag: function(e) {
			var gesture = e.gesture,
				center = gesture.center,
				touch = e.gesture.touches[0];
				
			if (this.dragging) {
				this.touchPosOld.clone(this.touchPos);
				this.touchPos.set(touch.pageX, touch.pageY);
			}
			else {
				this.dragging = true;
				this.touchPos.set(touch.pageX, touch.pageY);
				this.tmp.clone(this.touchPos);
				this.tmp.sub(gesture.deltaY / 2, gesture.deltaY / 2);
				this.touchPosOld.clone(this.tmp);
			}
			
			this.tmp.clone(this.touchPos);
			this.tmp.vsub(this.touchPosOld);
			this.dragged.vadd(this.tmp.mult( 1 / 2 ));
		},

		_ondragend: function(e) {
			if (this.dragging) {
				this.dragging = false;
				this._world.publish({
					topic: 'dragend',
					vector: this.dragged
				});
			}
		},

		connect: function( world ){				
			// subscribe the .behave() method to the position integration step
			world._hammer.on('drag', this._ondrag);
			world._hammer.on('dragend', this._ondragend);
			world.subscribe('integrate:positions', this.behave, this);
		},

		disconnect: function( world ){
			// unsubscribe when disconnected
			world._hammer.off('drag', this._ondrag);
			world._hammer.off('dragend', this._ondragend);
			world.unsubscribe('integrate:positions', this.behave);
		},

		behave: function( data ){
			if (this.dragging && !this.dragged.equals(Physics.vector.zero)) {
				this._world.publish({
					topic: DRAG_TOPIC,
					vector: this.dragged
				});
				
				this.dragged.zero();
			}
		}
	};
});
