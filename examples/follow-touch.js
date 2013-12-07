define(
    [
        'jquery',
        'physicsjs'
    ],
    function(
        $,
        Physics
    ){
        Physics.behavior('follow-touch', function(parent) {
            return {
				addTouchFollower: function(body) {
					this._bodies.push(body);
				},
				
				removeTouchFollower: function(body) {
					this._bodies.splice(this._bodies.indexOf(body), 1);
				},
				
                init: function( options ){
                    var self = this;
					var constrainer;

                    this.touchPos = Physics.vector();
                    this.touchPosOld = Physics.vector();
					this.tmp = Physics.vector();
					this.dragged = Physics.vector();
					this.velocity = Physics.vector();
                    this.offset = Physics.vector();
					
					this.dragging = false;
					this._bodies = [];
					if (options.bodies)
						this._bodies.push.apply(this._bodies(options.bodies));
						
					if (options.body)
						this._bodies.push(options.body);
					
					this._ondrag = this._ondrag.bind(this);
					this._ondragend = this._ondragend.bind(this);
					this._onswipe = this._onswipe.bind(this);
					this._onremoveBody = this._onremoveBody.bind(this);
                },
				
				_onremoveBody: function(data) {
					if (~this._bodies.indexOf(data.body)) {
						this.removeTouchFollower(data.body);
					}
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

				// _setVelocities: function(e) {
					// var bodies = this._bodies,
						// v = this.velocity,
						// i = bodies.length;
						
					// v.set(e.gesture.velocityX, e.gesture.velocityY);
					// if (i)  {
						// while (i--) {
							// bodies[i].state.vel.set(v);
						// }
					// }
					
					// v.zero();
				// },

				_ondragend: function(e) {
					this.dragging = false;
					// this._setVelocities(e);
				},

				_onswipe: function(e) {
					this.dragging = false;
					// this._setVelocities(e);
				},
				
                connect: function( world ){				
                    // subscribe the .behave() method to the position integration step
					world._hammer.on('drag', this._ondrag);
					world._hammer.on('dragend', this._ondragend);
					world._hammer.on('swipe', this._onswipe);
                    world.subscribe('integrate:positions', this.behave, this);
					world.subscribe('remove:body', this._onremoveBody);
                },

                disconnect: function( world ){
                    // unsubscribe when disconnected
					world._hammer.off('drag', this._ondrag);
					world._hammer.off('dragend', this._ondragend);
					world._hammer.off('swipe', this._onswipe);
                    world.unsubscribe('integrate:positions', this.behave);
					world.unsubscribe('remove:body', this._onremoveBody);
                },

                behave: function( data ){
					if (!this.dragging || !this._bodies.length || this.dragged.equals(Physics.vector.zero))
						return;
						
                    var i = this._bodies.length,
						body,
						pos,
						lock,
						dragged = this.dragged,
						draggedX = dragged.get(0),
						draggedY = dragged.get(1);
						
					while (i--) {
						body = this._bodies[i];
						if (body.options.fixed)
							continue;
							
						pos = body.state.pos;
						lock = body.options.lock;
						if (lock)
							pos.add(lock.x ? 0 : draggedX, lock.y ? 0 : draggedY);
						else
							pos.vadd(dragged);
						
						body.state.vel.clone( dragged.mult( 1 / 10 ) );
						body.state.vel.clamp( { x: -1, y: -1 }, { x: 1, y: 1 } );
					}
					
					this.dragged.zero();
                }
            };
        });

        return Physics;
    }
);