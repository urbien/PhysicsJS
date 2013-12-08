/**
 * Newtonian attraction between bodies and a point in the world (inverse square law)
 * @module behaviors/gravity-well
 */
Physics.behavior('gravity-well', function( parent ){

    var defaults = {

        strength: 1,
		mass: 1,
		x: 0,
		y: 0
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
			this.pos = Physics.vector(options.x, options.y);
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
				,mass = this.mass
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normsq
                ,g
                ;

            for ( var i = 0, l = bodies.length; i < l; i++ ){
                
                body = bodies[ i ];
				// clone the position
				pos.clone( this.pos );
				pos.vsub( body.state.pos );
				// get the square distance
				normsq = pos.normSq();

				if (normsq > tolerance){

					g = strength / normsq;

					body.accelerate( pos.normalize().mult( g * mass ) );
				}
            }

            scratch.done();
        }
    };
});
