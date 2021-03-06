define([
    
    'jquery'

], function(
    $
){
    var sim = function( world, Physics ){

        var $win = $(window)
            ,viewWidth
            ,viewHeight
			,constrainer = Physics.behavior('verlet-constraints')
			// ,constrainer = Physics.behavior('rigid-constraint-manager')
			,tips = []
			,tipShadows = []
			,centerX
			,centerY
			,center
			,wheelRadius
			,axle
			,rail;

		function updateBounds(){
            viewWidth = $win.width();
            viewHeight = $win.height();
			centerX = viewWidth / 2;
			centerY = viewHeight / 2;
			center = Physics.vector(centerX, centerY);
			wheelRadius = viewWidth / 3;
			if (!axle) {
				axle = Physics.body('circle', {
					x: centerX,
					y: centerY,
					fixed: true,
					radius: 10,
					mass: 10
				});
			}
			
			if (!rail) {
				tail = Physics.body('circle', {
					x: centerX,
					y: centerY,
					fixed: true,
					radius: wheelRadius,
					mass: 10
				});
			}
			
			axle.state.pos.set(centerX, centerY);
        };
		
		function newTip(x, y, vx, vy) {
			return Physics.body('circle', {
				radius: wheelRadius / 5,
				mass: 1,
				cof: 1,
				x: x,
				y: y,
				vx: vx || 0,
				vy: vy || 0
			});
		};
		
		// function addTip() {
			// var tip;
			// if (tips.length == 0) {
				// tip = newTip(centerX + wheelRadius, centerY);
			// }
			// else {
				// var tip0 = tips[0],
					// angle = tips.length == 1 ? Math.PI : tip0.state.pos.angle(tips[1].state.pos) / 2,
					// scratch = Physics.scratchpad(),
					// tmp = scratch.vector(),
					// x, 
					// y, 
					// vx, 
					// vy;
					
				// tmp.clone(tip0.state.pos).rotate(angle, center);
				// x = tmp.get(0);
				// y = tmp.get(1);
				
				// tmp.clone(tip0.state.vel);
				// tmp.rotate(angle, tmp);
				// vx = tmp.get(0);
				// vy = tmp.get(1);
				
				// scratch.done();
				// tip = newTip(x, y, vx, vy);
			// }
				
			// tips.push(tip);
			// world.add(tip);			
			// reconstrainSpokes();
		// };
		
		function reconstrainSpokes() {
			constrainer.drop();
			var distanceBetweenTips = 2 * wheelRadius * Math.sin(Math.PI / tips.length),
				numTips = tips.length,
				tip;
				
			for (var i = 0; i < numTips; i++) {
				tip = tips[i];
				constrainer.constrain( axle, tip, wheelRadius );
			};

			if (numTips > 1) {
				for (var i = 0; i < numTips; i++) {
					tip = tips[i];
					constrainer.constrain(tip, tips[(i + 1)% numTips ], distanceBetweenTips);
				};
			}
		}
		
		function init(n) {
			updateBounds();
			tips.length = tipShadows.length = 0;
			
			var bodies = world.getBodies(),
				distanceBetweenTips = 2 * wheelRadius * Math.sin(Math.PI / n), // http://www.math.rutgers.edu/~erowland/polygons.html
				radiansBetweenTips = 2 * Math.PI / n,
				scratchpad = Physics.scratchpad(),
				nextPoint = scratchpad.vector(),
				prev,
				tip,
				tipShadow;
				
			if (bodies.length)
				world.remove(bodies);				

			nextPoint.set(centerX + wheelRadius, centerY);
			while (n--) {
				nextPoint.rotate(radiansBetweenTips, center);
				tip = newTip(nextPoint.get(0), nextPoint.get(1));
				tipShadow = Physics.body('point', {
					fixed: true,
					x: nextPoint.get(0),
					y: nextPoint.get(1),
					radius: 0
				});
				
				constrain(tip, tipShadow, 0);
				constrain(axle, tipShadow, wheelRadius);
				// if (prev)
					// constrain(tip, prev, distanceBetweenTips);
					
				tips.push(tip);
				tipShadows.push(tipShadow);
				prev = tip;
			};
			
			// if (n > 1)
				// constrain(tips[0], prev, distanceBetweenTips);
				
			world.add(axle);
			world.add(tips);
			//reconstrainSpokes();
		}
		
		function constrain(a, b, distance) {
			//constrainer.distanceConstraint(a, b, 0.1, distance); // verlet
			//constrainer.constrain(a, b, distance); // rigid
		}
		
		// need this when using DOM renderer
		// world.subscribe('remove:body', function(data) {
			// var el = data.body.view;
			// if (el && el.parentNode)
				// el.parentNode.removeChild(el);
		// });
		
        $(window).on('resize', updateBounds);
		
		init(10);
		world.add( constrainer );
		world.add( Physics.integrator('verlet', { drag: 0.01 }));
        //world.add( Physics.behavior('gravity-well', { strength: 10, mass: 20, x: centerX, y: centerY } ) );
        world.add( Physics.behavior('newtonian', { strength: -10 } ) );
        world.add( Physics.behavior('body-impulse-response') );
		world.add( Physics.behavior('body-collision-detection') );
		world.add( Physics.behavior('sweep-prune') );
    };

    sim.title = "Ferris wheel";
    sim.sourceUrl = "https://github.com/urbien/PhysicsJS/blob/master/examples/sims/ferris-wheel.js";

    return sim;
});
