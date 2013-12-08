/**
 * Attraction between bodies inversely proportional to the nth power of the distance between them (defaults to n=2, which is newtonian attraction)
 * @module behaviors/distance-proportional-force
 */
Physics.behavior('distance-proportional-force', function( parent ){

    var defaults = {

        strength: 1,
		n: 2, // the strength of the force is proportional to distance^n
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

            this.n = options.n;
            this.strength = options.strength;
            this.tolerance = options.tolerance || 100 * this.strength;
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
                ,other
				,n = this.n
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normPowN
                ,g
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                body = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){
                    
                    other = bodies[ i ];
                    // clone the position
                    pos.clone( other.state.pos );
                    pos.vsub( body.state.pos );
                    // get the square distance
                    normPowN = Math.pow(pos.norm(), n);

                    if (normPowN > tolerance){

                        g = strength / normPowN;

                        body.accelerate( pos.normalize().mult( g * other.mass ) );
                        other.accelerate( pos.mult( body.mass/other.mass ).negate() );
                    }
                }
            }

            scratch.done();
        }
    };
});