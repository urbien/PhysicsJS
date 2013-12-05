define([
    
    'jquery'

], function(
    $
){
    var sim = function( world, Physics ){

        var $win = $(window)
            ,viewWidth = $win.width()
            ,viewHeight = $win.height()
            ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
			,constrainer = Physics.behavior('rigid-constraint-manager')
			,tips = [];
            // ,edgeBounce = Physics.behavior('edge-collision-detection', {
                // aabb: viewportBounds,
                // restitution: 0.99,
                // cof: 0.99
            // });

        $(window).on('resize', function(){

            viewWidth = $win.width();
            viewHeight = $win.height();
            //viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
            //edgeBounce.setAABB( viewportBounds );

        }).trigger('resize');

        // begin
		var centerX = viewWidth / 2,
			centerY = viewHeight / 2,
			center = Physics.vector(centerX, centerY),
			wheelRadius = viewWidth / 3;
			
        var axle = Physics.body('circle', {
			x: centerX,
			y: centerY,
			fixed: true,
			radius: 10,
			mass: 10
		});

			// numTips = 4,
			// distanceBetweenTips = 2 * wheelRadius * Math.sin(Math.PI / numTips), // http://www.math.rutgers.edu/~erowland/polygons.html
			// radiansBetweenTips = 2 * Math.PI / numTips,
			// nextPoint = Physics.vector(centerX + wheelRadius, centerY);
		
		// for (var i = 0; i < numTips; i++) {
			// nextPoint.rotate(radiansBetweenTips, center);
			// var tip = Physics.body('circle', {
				// radius: 100,
				// mass: 1,
				// x: nextPoint.get(0),
				// y: nextPoint.get(1)
			// });
			
			// tips.push(tip);
			// constrainer.constrain( axle, tip, wheelRadius );
			// if (i != 0)
				// constrainer.constrain( tip, tips[i - 1], distanceBetweenTips);
				
			// world.add(tip);
		// }

		// constrainer.constrain( tips[0], tips[tips.length - 1], distanceBetweenTips);
		
		// setInterval(function() {
			// var tip = Physics.body('circle', {
				// radius: 20,
				// mass: 100,
				// x: 300 * Math.random() | 0,
				// y: 300 * Math.random() | 0
			// });
			
			// tips.push(tip);
			// constrainer.constrain( axle, tip, targetLength );
			// world.add(tip);
		// }, 1000);

		// setInterval(function() {
			// if (tips.length && Math.random() > 0.5)
				// world.remove(tips.shift());
		// }, 1000);
		
        // add things to world
		
        //world.add( edgeBounce );
		

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
		
		function addTip() {
			var tip;
			if (tips.length == 0) {
				tip = newTip(centerX + wheelRadius, centerY);
			}
			else {
				var tip0 = tips[0],
					angle = tips.length == 1 ? Math.PI : tip0.state.pos.angle(tips[1].state.pos) / 2,
					scratch = Physics.scratchpad(),
					tmp = scratch.vector(),
					x, 
					y, 
					vx, 
					vy;
					
				tmp.clone(tip0.state.pos).rotate(angle, center);
				x = tmp.get(0);
				y = tmp.get(1);
				
				tmp.clone(tip0.state.vel);
				tmp.rotate(angle, tmp);
				vx = tmp.get(0);
				vy = tmp.get(1);
				
				scratch.done();
				tip = newTip(x, y, vx, vy);
			}
				
			tips.push(tip);
			world.add(tip);			
			reconstrainSpokes();
		};
		
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
			tips.length = 0;			
			var bodies = world.getBodies(),
				distanceBetweenTips = 2 * wheelRadius * Math.sin(Math.PI / n), // http://www.math.rutgers.edu/~erowland/polygons.html
				radiansBetweenTips = 2 * Math.PI / n,
				scratchpad = Physics.scratchpad(),
				nextPoint = scratchpad.vector(),
				prev,
				tip;
				
			if (bodies.length)
				world.remove(bodies);				

			nextPoint.set(centerX + wheelRadius, centerY);
			while (n--) {
				nextPoint.rotate(radiansBetweenTips, center);
				tip = newTip(nextPoint.get(0), nextPoint.get(1));
				constrainer.constrain(axle, tip, wheelRadius);
				if (prev)
					constrainer.constrain(tip, prev, distanceBetweenTips);
					
				tips.push(tip);
				prev = tip;
			};
			
			if (n > 1)
				constrainer.constrain(tips[0], prev, distanceBetweenTips);
				
			world.add(axle);
			world.add(tips);
		}
		
		world.subscribe('remove:body', function(data) {
			var el = data.body.view;
			if (el && el.parentNode)
				el.parentNode.removeChild(el);
		});
		
		//document.addEventListener('keydown', addTip);
		world.add( constrainer );
		world.add( Physics.behavior('body-impulse-response') );
		//world.add( Physics.behavior('newtonian', { strength: -1000 }) );
		world.add( Physics.behavior('body-collision-detection') );
		world.add( Physics.behavior('sweep-prune') );
//		world.add( Physics.behavior('simple-air-resistance') );
		world.add( Physics.integrator('verlet', { drag: 0.01 }));
		init(10);
    };

    sim.title = "Ferris wheel";
    sim.sourceUrl = "https://github.com/wellcaffeinated/PhysicsJS/blob/master/examples/sims/ferris-wheel.js";

    return sim;
});