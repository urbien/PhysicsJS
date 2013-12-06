define([
    
    'jquery',
	'masonry'

], function(
    $,
	Mason
) {
    var sim = function( world, Physics ){

        var $win = $(window),
			container = document.getElementById('viewport'),
            viewWidth = $win.width(),
            viewHeight = $win.height(),
			COL_WIDTH = 30,
			NUM_COLS = 5,
			PADDING = 20,
			LEFT_WALL_OFFSET_FROM_CENTER = (COL_WIDTH * NUM_COLS + PADDING) / 2 | 0,
            bounds = calcBounds(),
            edgeBounce = Physics.behavior('edge-collision-detection', {
                aabb: bounds,
                restitution: 0.3,
                cof: 0.5
            }),
			bodyCount = 0,
			mason,
			ADD_FORCES = false;
			
		function calcBounds() {
			return Physics.aabb(viewWidth / 2 - LEFT_WALL_OFFSET_FROM_CENTER | 0, 0, viewWidth / 2 + LEFT_WALL_OFFSET_FROM_CENTER | 0, viewHeight);
		}
		
		function addBricks(n, prepend) {
			n = n || 1;
			var bricks = new Array(n);
			for (var i = 0; i < n; i++) {
				bricks[i] = addBrick(randomWidth(), randomHeight());
			}
			
			mason[prepend ? 'prepended' : 'appended'](bricks);
		}
			
		function addBrick(width, height) {
			var body = Physics.body('convex-polygon', {
				name: 'blah' + bodyCount++,
				//mass: width * height,
				vertices: [
					{x: 0, y: height},
					{x: width, y: height},
					{x: width, y: 0},
					{x: 0, y: 0}
				],
				restitution: 0.9
			});
			
			world.add( body );
			return body;
		};
				
/*		function makeBrickElements(n) {
			n = n || 1;
			var els = [];
			while (n--) {
				var el = document.createElement('div');
				el.setAttribute('class', 'pjs-convex-polygon');
				el.style.position = 'absolute';
				el.style.width = randomWidth() + 'px'; //Math.ceil(Math.random() * NUM_COLS) * COL_WIDTH + 'px';
				el.style.height = randomHeight() + 'px';
				els.push(el);
			}
			
			return els;
		}
*/
		function randomWidth() {
			return COL_WIDTH; //Math.ceil(Math.random() * NUM_COLS) * COL_WIDTH;
		}
		
		function randomHeight() {
			// return COL_WIDTH; 
			return Math.ceil(Math.random() * 4) * COL_WIDTH | 0;
		}		

		function init() {
			mason = new Mason({
				bounds: bounds
			});
		};

        // $(window).on('resize', function(){
            // viewWidth = $win.width();
            // viewHeight = $win.height();
            // bounds = calcBounds();
            // edgeBounce.setAABB( bounds );

        // }).trigger('resize');

		// world.add( Physics.integrator('verlet', { drag: 0.01 }));
		// world.add( Physics.behavior('newtonian', { strength: 10 }) );
        world.add( Physics.behavior('body-collision-detection', { checkAll: false }) );
        world.add( Physics.behavior('sweep-prune') );
        world.add( Physics.behavior('body-impulse-response') );
        world.add( edgeBounce );
		
		world.subscribe('masonry:append', addBricks.bind(null, NUM_COLS, false));
		world.subscribe('masonry:prepend', addBricks.bind(null, NUM_COLS, true));		

		if (ADD_FORCES) {
			// add close-distance repulsion
			world.add( Physics.behavior('distance-based-force', { n: 3, strength: -10 }) );
			// add anti-gravity
			world.add( Physics.behavior('constant-acceleration', { acc: {x : 0, y: -0.001 } }) );
		}
		
		init();
    };

    sim.title = "Masonry";
    sim.sourceUrl = "https://github.com/wellcaffeinated/PhysicsJS/blob/master/examples/sims/masonry.js";

    return sim;
});