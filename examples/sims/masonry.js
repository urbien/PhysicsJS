define([
    
    'jquery',
	'masonry',
	'hammer'

], function(
    $,
	Mason,
	Hammer
) {
    var sim = function( world, Physics ){

        var $win = $(window),
			container = document.getElementById('viewport'),
            viewWidth = $win.width(),
            viewHeight = $win.height(),
			BATCH_SIZE = 10,
			COL_WIDTH = 30,
			INTER_BRICK_MARGIN = 10,
			NUM_COLS = 5,
			MASONRY_WIDTH = COL_WIDTH * NUM_COLS + INTER_BRICK_MARGIN * (NUM_COLS - 1),
			LEFT_WALL_OFFSET_FROM_CENTER = MASONRY_WIDTH / 2 | 0,
            bounds,
			dogman = Physics.body('circle', {
				mass: 1,
				radius: 50
			}),
			hammerOptions = {},
			hammer = new Hammer(container, hammerOptions),
			touchFollower,
			/*
            edgeBounce = Physics.behavior('edge-collision-detection', {
                aabb: bounds,
                restitution: 0.3,
                cof: 0.5
            }),*/
			constrainer = Physics.behavior('verlet-constraints', { iterations: 2 }), // same as default iterations value, but it's good to remember what we can change
			bodyCount = 0,
			mason,
			ADD_FORCES = false;
			
		function calcBounds() {
			//return Physics.aabb(viewWidth / 2 - LEFT_WALL_OFFSET_FROM_CENTER | 0, 0, viewWidth / 2 + LEFT_WALL_OFFSET_FROM_CENTER | 0, viewHeight);
			// return Physics.aabb(viewWidth / 2 | 0, 0, viewWidth / 2 + MASONRY_WIDTH, viewHeight);
			bounds = Physics.aabb(0, 0, viewWidth / 2, viewHeight);
			dogman.state.pos.set(bounds._pos.get(0), viewHeight * 10);
			dogman.state.pos.lock({
				x: 0
			});
			
  		    dogman.state.vel.lock({
			    x: 0
			});

			dogman.state.acc.lock({
			    x: 0
			});
			
			return ;
		}

		function removeBricks(n, fromTheHead) {
			n = n || 1;
			n = Math.min(n, mason.bricks.length);
			if (n) {
				var bricks = fromTheHead ? mason.bricks.slice(0, n) : mason.bricks.slice(mason.bricks.length - n),
					el;
					
				world.remove(bricks);
				world.subscribe('render', function removeElements() {
					world.unsubscribe('render', removeElements);
					while (n--) {
						el = bricks[n].view;
						if (el.parentNode)
							el.parentNode.removeChild(el);
					}					
					
					mason.removed(bricks);
				});	
			}
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
				mass: 0.1,
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
			calcBounds();
			mason = new Mason({
				dogman: dogman,
				constrainer: constrainer,
				gutterWidth: INTER_BRICK_MARGIN,
				bounds: bounds
			});
		};

        // $(window).on('resize', function(){
            // viewWidth = $win.width();
            // viewHeight = $win.height();
            // bounds = calcBounds();
            // edgeBounce.setAABB( bounds );

        // }).trigger('resize');

		// world.add( Physics.behavior('newtonian', { strength: 10 }) );
		world.add( Physics.integrator('verlet', { drag: 0.01 }) );
        // world.add( Physics.behavior('body-collision-detection', { checkAll: false }) );
        // world.add( Physics.behavior('sweep-prune') );
        // world.add( Physics.behavior('body-impulse-response') );
        world.add( constrainer ); 
        // world.add( edgeBounce );
		
		world.subscribe('masonry:append', function() {
			addBricks(Math.random() * BATCH_SIZE | 0, false);
		});

		world.subscribe('masonry:prepend', function() {
			addBricks(Math.random() * BATCH_SIZE | 0, true);
		});

		world.subscribe('masonry:trim-tail', function() {
			removeBricks(Math.random() * BATCH_SIZE | 0, false);
		});
		
		world.subscribe('masonry:trim-head', function() {
			removeBricks(Math.random() * BATCH_SIZE | 0, true);
		});
		
		world._hammer = hammer;
		touchFollower = Physics.behavior('follow-touch');
		world.add(touchFollower);
		touchFollower.addTouchFollower(dogman);
		world.add(dogman);
		
		if (ADD_FORCES) {
			// add close-distance repulsion
			world.add( Physics.behavior('distance-based-force', { n: 3, strength: -100 }) );
			// add anti-gravity
			world.add( Physics.behavior('constant-acceleration', { acc: {x : 0, y: -0.001 } }) );
		}
		
		init();
    };

    sim.title = "Masonry";
    sim.sourceUrl = "https://github.com/wellcaffeinated/PhysicsJS/blob/master/examples/sims/masonry.js";

    return sim;
});