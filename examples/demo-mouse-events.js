define(
    [
        'jquery',
        'physicsjs'
    ],
    function(
        $,
        Physics
    ){

        Physics.behavior('demo-mouse-events', function( parent ){
            return {

                init: function( options ){

					var constrainer;
                    var self = this;

                    this.mousePos = Physics.vector();
                    this.mousePosOld = Physics.vector();
                    this.offset = Physics.vector();
                    
                    this.el = $(options.el).on({
                        mousedown: function(e){
							var world = self._world;
							if (!constrainer) {
								constrainer = Physics.behavior('verlet-constraints');
								world.add(constrainer);
							}
							else	
								constrainer.drop();
								
                            var offset = $(this).offset();
                            self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);
                            self.mouseDown = true;
                            
                            var body = world.findOne({ $at: self.mousePos }) ;
                            if ( body ){

                                // we're trying to grab a body

                                // fix the body in place
                                body.fixed = true;
                                // remember the currently grabbed body
                                self.body = body;
                                // remember the mouse offset
                                self.offset.clone( self.mousePos ).vsub( body.state.pos );
								
								var bodies = world.getBodies();
								for (var i = 0; i < bodies.length; i++) {
									var b = bodies[i];
									constrainer.distanceConstraint(b, body, 1, b.state.pos.dist(body.state.pos));
								}
								
                                return;
                            }

                        },
                        mousemove: function(e){
                            var offset = $(this).offset();
                            self.mousePosOld.clone( self.mousePos );
                            // get new mouse position
                            self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);
                        },
                        mouseup: function(e){
                            var offset = $(this).offset();
                            self.mousePosOld.clone( self.mousePos );
                            self.mousePos.set(e.pageX - offset.left, e.pageY - offset.top);

                            // release the body
                            if (self.body){
                                self.body.fixed = false;
                                self.body = false;
                            }
                            self.mouseDown = false;
                        }
                    });
                },

                connect: function( world ){

                    // subscribe the .behave() method to the position integration step
                    world.subscribe('integrate:positions', this.behave, this);
                },

                disconnect: function( world ){

                    // unsubscribe when disconnected
                    world.unsubscribe('integrate:positions', this.behave);
                },

                behave: function( data ){

                    var scratch = Physics.scratchpad()
                        ,v = scratch.vector();
						
                    /*if ( this.body ){

                        // if we have a body, we need to move it the the new mouse position.
                        // we'll also track the velocity of the mouse movement so that when it's released
                        // the body can be "thrown"
						var bodyPos = this.body.state.pos;
						var lock = this.body.options.lock || {};
						v.clone(this.mousePos).vsub(this.offset);
						bodyPos.set(lock.x ? bodyPos.get(0) : v.get(0), lock.y ? bodyPos.get(1) : v.get(1));
                        this.body.state.vel.clone( this.body.state.pos ).vsub( this.mousePosOld ).vadd( this.offset ).mult( 1 / 30 );
                        this.body.state.vel.clamp( { x: -1, y: -1 }, { x: 1, y: 1 } );
						scratch.done();
                        return;
                    }
					*/

                    if ( !this.mouseDown ){
						scratch.done();
                        return;
                    }
					
                    // if we don't have a body, then just accelerate
                    // all bodies towards the current mouse position

                    var bodies = data.bodies
                        // use a scratchpad to speed up calculations
                        ,body
                        ;

                    for ( var i = 0, l = bodies.length; i < l; ++i ){
                            
                        body = bodies[ i ];

                        // simple linear acceleration law towards the mouse position
                        v.clone(this.mousePos)
                         .vsub( body.state.pos )
                         .normalize()
                         .mult( 0.01 )
                         ;
						
                        body.accelerate( v );
                    }

                    scratch.done();
                }
            };
        });

        return Physics;
    }
);