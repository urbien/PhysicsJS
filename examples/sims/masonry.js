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
			COL_PADDING = 5,
			LEFT_WALL_OFFSET_FROM_CENTER = (COL_WIDTH * NUM_COLS + COL_PADDING * (NUM_COLS - 1)) / 2 | 0,
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
			
        function addBody(el) {
			var style = window.getComputedStyle(el);
			var width = parseInt(style.width);
			var height = parseInt(style.height);
            var body = Physics.body('convex-polygon', {
				vertices: [
					{x: 0, y: height},
					{x: width, y: height},
					{x: width, y: 0},
					{x: 0, y: 0}
				],
				restitution: 0.3,
				view: el
			});
			
            world.add( body );
			return body;
        }

        function addBodyToCanvas(width, height) {
            var body = Physics.body('convex-polygon', {
				name: 'blah' + bodyCount++,
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
        }
		
		function initArray(length, value) {
			var arr = new Array(length);
			while (length--) {
				arr[length] = value;
			}
			
			return arr;
		}
			
/*		function append(n) {
			n = n || 10;
			var newBodies = [],
				topCols = initArray(NUM_COLS, 0),
				scratch = Physics.scratchpad(),
				pos = scratch.vector(),
				maxY,
				currentBodies = world.getBodies(),
				body;

			for (var i = 0; i < currentBodies.length; i++) {
				body = currentBodies[i];
				maxY = body.geometry.vertices.reduce(function(memo, next) {  // get max Y coordinate
					return Math.max(memo, next.get(1));
				}, -Infinity);
				
			}
				
			while (n--) {
				newBodies.push(newBody());
			}
			
		}; */
		
		function makeBrickElements(n) {
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

		function randomWidth() {
			return COL_WIDTH; //Math.ceil(Math.random() * NUM_COLS) * COL_WIDTH;
		}
		
		function randomHeight() {
			return Math.ceil(Math.random() * 4) * COL_WIDTH;
		}
		
		function addBricks(n, prepend) {
			n = n || 1;
			var brickEls = makeBrickElements(n),
				bricks;
				
			for (var i = 0; i < n; i++) {
				container.appendChild(brickEls[i]);
			}
			
			bricks = brickEls.map(addBody);
			mason[prepend ? 'prepended' : 'appended'](bricks);
		};

		function addBricksToCanvas(n, prepend) {
			n = n || 1;
			var bricks = new Array(n);
			for (var i = 0; i < n; i++) {
				bricks[i] = addBodyToCanvas(randomWidth(), randomHeight());
			}
			
			mason[prepend ? 'prepended' : 'appended'](bricks);
		};

		function init() {
			mason = new Mason({
				bounds: bounds
			});
			
			addBricks(1);
		};

		function initCanvas() {
			mason = new Mason({
				bounds: bounds
			});
			
			addBricksToCanvas(n);
		};
		
        // world.subscribe('masonry:append', addBricks.bind(null, 1, false));
		// world.subscribe('masonry:prepend', addBricks.bind(null, 1, true));
        world.subscribe('masonry:append', addBricksToCanvas.bind(null, NUM_COLS, false));
		world.subscribe('masonry:prepend', addBricksToCanvas.bind(null, NUM_COLS, true));

        $(window).on('resize', function(){
            viewWidth = $win.width();
            viewHeight = $win.height();
            bounds = calcBounds();
            edgeBounce.setAABB( bounds );

        }).trigger('resize');

		world.add( Physics.integrator('verlet', { drag: 0.01 }));
        world.add( Physics.behavior('body-collision-detection', { checkAll: false }) );
        world.add( Physics.behavior('sweep-prune') );
        world.add( Physics.behavior('body-impulse-response') );
        world.add( edgeBounce );

        // add anti-gravity
		if (ADD_FORCES) {
			world.add( Physics.behavior('distance-based-force', { n: 3, strength: -1000 }) ); // close distance repulsion
			world.add( Physics.behavior('constant-acceleration', { acc: {x : 0, y: -0.001 } }) );
		}
		
		world.subscribe('add:renderer', function(data) {
			if (data.renderer.name == 'canvas')
				initCanvas();
			else
				init();
		});
    };

    sim.title = "Masonry";
    sim.sourceUrl = "https://github.com/wellcaffeinated/PhysicsJS/blob/master/examples/sims/masonry.js";

    return sim;
});