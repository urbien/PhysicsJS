/**
 * Newtonian attraction between bodies directed towards closest point on the other body's surface as opposed to the centroid
 * @module behaviors/surface-attraction
 */
Physics.behavior('surface-attraction', function( parent ){

    var defaults = {
        strength: 1,
		mass: 10
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.strength = options.strength;
            this.tolerance = Math.abs(options.tolerance || 100 * this.strength);
			this.mass = options.mass;
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
				,bodyIsFixed
				,other
				,bodyPos
				,mass = this.mass
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,v1 = scratch.vector()
                ,v2 = scratch.vector()
				,vertices
				,numVertices
				,i
				,minDistance = Infinity
				,distanceToLine
				,pt
				,nearestPt
                ,normsq
                ,g
                ;

            for ( var b = 0, l = bodies.length; b < l; b++ ) {
                body = bodies[ b ]; // the body to be accelerated
				if (body.options.fixed)
					continue;
					
				bodyPos = body.state.pos;
                for ( var c = 0; c < l; c++ ) {
					if (c == b)
						continue;
						
                    other = bodies[ c ];
					vertices = other.geometry.vertices;
					if (!vertices)
						nearestPt = other.state.pos;
					else {
						i = numVertices = vertices.length;
						while (i--) {
							v1.clone(vertices[i]);
							v1.vadd(other.state.pos);
							v2.clone(vertices[(i + 1) % numVertices]);
							v2.vadd(other.state.pos);
							pt = Physics.geometry.nearestPointOnLine(bodyPos, v1, v2);
							distanceToLine = pt.dist(bodyPos);
							if (distanceToLine < minDistance) {
								minDistance = distanceToLine;
								nearestPt = pt;
							}
						}
					}
					
					// clone the position
					pos.clone( nearestPt );
					pos.vsub( bodyPos );
					// get the square distance
					normsq = pos.normSq();

					if (normsq > tolerance){

						g = strength / normsq;
						body.accelerate( pos.normalize().mult( g * mass ) );
					}					
				}				
            }

            scratch.done();
        }
    };
});

