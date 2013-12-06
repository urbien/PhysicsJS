define([
    
    'jquery'

], function(
    $
){
    var sim = function( world, Physics ){

        var $win = $(window)
            ,viewWidth
            ,viewHeight
			,frameLeft
			,frameRight
			,frameTop
			,frameBottom
			,blocks = []
			,numBlocks = 1
			,frameWidth = 10
			,frameCOF = 1
			,frameRestitution = 0.1
			;
			
		function updateBounds(){
            viewWidth = $win.width();
            viewHeight = $win.height();
        };
		
		function init(n) {
			updateBounds();
			frameLeft = Physics.body('convex-polygon', {
				name: 'left',
				vertices: [
					{x: 0, y: 0},
					{x: frameWidth, y: 0},
					{x: frameWidth, y: viewHeight},
					{x: 0, y: viewHeight}
				],
				fixed: true,
				x: frameWidth / 2,
				y: viewHeight / 2,
				restitution: frameRestitution,
				cof: frameCOF
			});

			frameTop = Physics.body('convex-polygon', {
				name: 'top',
				vertices: [
					{x: 0, y: 0},
					{x: viewWidth, y: 0},
					{x: viewWidth, y: frameWidth},
					{x: 0, y: frameWidth}
				],
				fixed: true,
				x: viewWidth / 2,
				y: frameWidth / 2,
				restitution: frameRestitution,
				cof: frameCOF
			});

			frameRight = Physics.body('convex-polygon', {
				name: 'right',
				vertices: [
					{x: 0, y: 0},
					{x: frameWidth, y: 0},
					{x: frameWidth, y: viewHeight},
					{x: 0, y: viewHeight}
				],
				fixed: true,
				x: viewWidth - frameWidth / 2,
				y: viewHeight / 2,
				restitution: frameRestitution,
				cof: frameCOF
			});

			frameBottom = Physics.body('convex-polygon', {
				name: 'bottom',
				vertices: [
					{x: 0, y: 0},
					{x: viewWidth, y: 0},
					{x: viewWidth, y: frameWidth},
					{x: 0, y: frameWidth}
				],
				fixed: true,
				x: viewWidth / 2,
				y: viewHeight - frameWidth / 2,
				restitution: frameRestitution,
				cof: frameCOF
			});
			
			for (var i = 0; i < numBlocks; i++) {
				blocks.push(Physics.body('convex-polygon', {
					name: 'block' + i,
					vertices: [
						{x: 0, y: 0},
						{x: 50, y: 0},
						{x: 50, y: 50},
						{x: 0, y: 50}
					],
					x: viewWidth / 2 + Math.random() * viewWidth / 10,
					y: viewHeight / 2 + Math.random() * viewHeight / 10,
					restitution: 0.1,
					cof: 0.8
				}));
			}

			
			world.add(frameLeft);
			world.add(frameRight);
			world.add(frameTop);
			world.add(frameBottom);
			world.add(blocks);
			
			//reconstrainSpokes();
		}
		
		// need this when using DOM renderer
		// world.subscribe('remove:body', function(data) {
			// var el = data.body.view;
			// if (el && el.parentNode)
				// el.parentNode.removeChild(el);
		// });
		
        $(window).on('resize', updateBounds);
		
		init(10);
		world.add( Physics.integrator('verlet', { drag: 1 }));
        world.add( Physics.behavior('surface-attraction', { strength: 0.5 } ) );
        // world.add( Physics.behavior('newtonian', { strength: -100 } ) );
        world.add( Physics.behavior('body-impulse-response') );
		world.add( Physics.behavior('body-collision-detection') );
		world.add( Physics.behavior('sweep-prune') );
    };

    sim.title = "Frame";
    sim.sourceUrl = "https://github.com/wellcaffeinated/PhysicsJS/blob/master/examples/sims/frame.js";

    return sim;
});