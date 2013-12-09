define([
    
	'masonry',
	'hammer'

], function(
	Mason,
	Hammer
) {
    var sim = function( world, Physics ){

			var containerEl = document.getElementById('viewport'),
					groupEl = containerEl.querySelector('.group'),
					groupPt = Physics.body('point', { view: groupEl, mass: 10 }),
					viewWidth = window.innerWidth,
					viewHeight = window.innerWidth,
					BATCH_SIZE = 10,
					COL_WIDTH = 30,
					INTER_BRICK_MARGIN = 10,
					NUM_COLS = 5,
					MASONRY_WIDTH = COL_WIDTH * NUM_COLS + INTER_BRICK_MARGIN * (NUM_COLS - 1),
					//LEFT_WALL_OFFSET_FROM_CENTER = MASONRY_WIDTH / 2 | 0,
					bounds,

					// CONFIG
					// anti-gravity and brick->brick close quarters repulsion (HINT: don't use these ever)
					ADD_FORCES = false,
					// move all bricks as a group - easy on the CPU as the world only tracks one body
					DO_GROUP = false,
					// END CONFIG
					
					dogman = Physics.body('point', {
						mass: 1,
						hidden: true
					}),
					hammerOptions = {},
					hammer = new Hammer(containerEl, hammerOptions),
					followTouch,
					touchFollowers = [],
						/*
									edgeBounce = Physics.behavior('edge-collision-detection', {
											aabb: bounds,
											restitution: 0.3,
											cof: 0.5
									}),*/
					constrainer = Physics.behavior('verlet-constraints', { iterations: 1 }), // same as default iterations value, but it's good to remember what we can change
					bodyCount = 0,
					// worker = new Worker('sims/masonryWorker.js'),
					mason;
			
		function calcBounds() {
			//return Physics.aabb(viewWidth / 2 - LEFT_WALL_OFFSET_FROM_CENTER | 0, 0, viewWidth / 2 + LEFT_WALL_OFFSET_FROM_CENTER | 0, viewHeight);
			// return Physics.aabb(viewWidth / 2 | 0, 0, viewWidth / 2 + MASONRY_WIDTH, viewHeight);
			bounds = Physics.aabb(0, 0, viewWidth / 2, viewHeight);
			if (DO_GROUP) {
				groupPt.state.pos.set(bounds._pos.get(0) - bounds._hw, bounds._pos.get(1) - bounds._hh); // 0, 0 of the viewport - all brick positions are relative this one
				groupPt.state.pos.lock({
					x: 0
				});
			}
			else {
				dogman.state.pos.set(bounds._pos.get(0), viewHeight * 10);
				dogman.state.pos.lock({
					x: 0
				});
/*				
				dogman.state.vel.lock({
					x: 0
				});

				dogman.state.acc.lock({
					x: 0
				});
*/
			}
			
			return ;
		}

		function removeBricks(n, fromTheHead) {
			n = n || 1;
			n = Math.min(n, mason.bricks.length);
			if (n) {
				var bricks = fromTheHead ? mason.bricks.slice(0, n) : mason.bricks.slice(mason.bricks.length - n),
					el;
				
				if (!DO_GROUP)
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
			
			if (!DO_GROUP)
				updateDogmanMass();
		}
		
		function updateDogmanMass() {
			dogman.mass = Math.pow(mason.bricks.length, 1/3) * mason.bricks.reduce(function(mass, brick) { return mass + brick.mass }, 0) / 2;
			dogman.recalc();
		}
		
		function addBricks(n, prepend) {
			// n = n || 1;
			n = 10;
			var bricks = new Array(n);
			for (var i = 0; i < n; i++) {
				bricks[i] = addBrick(randomWidth(), randomHeight());
			}
			
			mason[prepend ? 'prepended' : 'appended'](bricks);
			if (!DO_GROUP) {
				var brick,
					i = bricks.length;
					
				while (i--) {
					brick = bricks[i];
					constrainer.distanceConstraint(brick, dogman, 0.02, brick.state.pos.dist(dogman.state.pos));
				}

				updateDogmanMass();
			}
		}
			
		function addBrick(width, height) {
			var el = document.createElement('div');
			el.setAttribute('class', 'pjs-convex-polygon');
			el.style.position = 'absolute';
			el.style.width = width + 'px';
			el.style.height = height + 'px';
			groupEl.appendChild(el);
			
			var body = Physics.body('convex-polygon', {
				name: 'blah' + bodyCount++,
				fixed: DO_GROUP,
				mass: 0.1,
				vertices: [
					{x: 0, y: height},
					{x: width, y: height},
					{x: width, y: 0},
					{x: 0, y: 0}
				],
				view: el,
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
				dogman: DO_GROUP ? null : dogman,
				constrainer: DO_GROUP ? null : constrainer,
				gutterWidth: INTER_BRICK_MARGIN,
				bounds: bounds
			});
			
			// setInterval(function() {
				// dogman.mass++;
				// dogman.recalc();
				// dogman.mass = mason.bricks.reduce(function(mass, brick) { return mass + brick.mass }, 0);
			// }, 1000);
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
		
		world.subscribe('masonry:append', function(data) {
			addBricks(Math.random() * BATCH_SIZE | 0, false);
		});

		world.subscribe('masonry:prepend', function(data) {
			addBricks(Math.random() * BATCH_SIZE | 0, true);
		});

		world.subscribe('masonry:trim-tail', function(data) {
			removeBricks(Math.random() * BATCH_SIZE | 0, false);
		});
		
		world.subscribe('masonry:trim-head', function(data) {
			removeBricks(Math.random() * BATCH_SIZE | 0, true);
		});
		
		world._hammer = hammer;
		followTouch = Physics.behavior('follow-touch');
		world.add(followTouch);
		world.subscribe('drag', function(data) {
			var i = touchFollowers.length,
				follower;
				
			while (i--) {
				follower = touchFollowers[i];
				follower.state.pos.vadd(data.vector);
				follower.state.vel.zero();
				// follower.state.vel.clone( data.vector.mult( 1 / 10 ) )
								  // .clamp( { x: -1, y: -1 }, { x: 1, y: 1 } );
			}
		});

		world.subscribe('dragend', function(data) {
			var i = touchFollowers.length,
				follower;
				
			while (i--) {
				follower = touchFollowers[i];
				follower.state.vel.clone( data.vector.mult( 1 / 10 ) );
			}
		});
		
		if (DO_GROUP) {
			//touchFollower.addTouchFollower(groupPt);
			touchFollowers.push(groupPt);
			world.add(groupPt);
		}
		else {
			//touchFollower.addTouchFollower(dogman);
			touchFollowers.push(dogman);
			world.add(dogman);
		}
		
		
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