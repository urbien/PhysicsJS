var ArrayProto = Array.prototype,
		indexOf = ArrayProto.indexOf,
		world,
		// dogman,
		constrainer,
		// group,
		mason,
		allowedObjects,
		touchFollowers = [];

function index(obj, i) {
	return obj[i];
};

// resolve string path to object, e.g. 'Physics.util' to Physics.util
function leaf(obj, path, separator) {
	return path.split(separator||'.').reduce(index, obj);
}

this.onmessage = function(e){
	if (!world) {
		importScripts('../physicsjs.js', 
						'../../src/bodies/point.js', 
						'../../src/geometries/convex-polygon.js', 
						'../../src/bodies/convex-polygon.js');

		world = Physics( function(world, Physics) {
			initWorld(world, e.data.bounds, e.data.masonrySettings, e.data.dogman);
		});
		
		allowedObjects = {
			world: world,
			Physics: Physics
		};
		
		return;
	}
	
	var obj = e.data.object ? leaf(self, 'allowedObjects.' + e.data.object) : API,
		method = obj[e.data.method],
		args = e.data.args;

	if (obj instanceof Physics.util.pubsub) {
		if (method == 'subscribe')
			return subscribe.apply(obj, args);
		else if (method == 'unsubscribe')
			return unsubscribe.apply(obj, args);
	}
	
	method.apply(obj, args);
};

function updateBounds(minX, minY, maxX, maxY) {
	self.bounds = Physics.aabb.apply(Physics, arguments);
	// if (group) {
		// group.state.pos.set(minX, minY); // 0, 0 of the viewport - all brick positions are relative this one
		// group.state.pos.lock({
			// x: 0
		// });
	// }
	// else if (dogman) {
		// dogman.state.pos.set((minX + maxX) / 2, minY + (maxY - minY) * 10);
		// dogman.state.pos.lock({
			// x: 0
		// });
	// }
};

function addBehavior(behavior, options) {
	world.add( Physics.behavior(behavior, options) );
};

function pluck(obj, prop1, prop2 /* etc. */) {
	var subset = {};
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop) && indexOf.call(arguments, prop) > 0) {
			subset[prop] = obj[prop];
		}
	}
	
	return subset;
}

function toJSON(obj) {
	var json = {};
	for (var prop in obj) {
		if (typeof obj[prop] != 'function')
			json[prop] = obj[prop];
	}
	
	return json;
};

function render() {
	var bodies = world.getBodies(),
		body,
		transforms = [],
		transform,
		update = false;

	for (var i = 0; i < bodies.length; i++) {
		body = bodies[i];
		if (body._id) {
			transform = renderBody(body);
			if (transform) {
				update = true;
				transforms[body._id] = transform;
			}
		}
	}

	if (update) {
		postMessage({
			topic: 'render',
			bodies: transforms
		});	
	}
}

function renderBody(body) {
	var state = body.state,
			pos = state.pos,
			angle = state.angular.pos,
			rendered = state.rendered;
				
	if (!body.rendered() 
		|| pos.dist(rendered.pos) > world._opts.positionRenderResolution 
		|| Math.abs(angle - rendered.angular.pos) > world._opts.angleRenderResolution) {
		
		body.rendered(true);
		rendered.angular.pos = angle;
		rendered.pos.clone(pos);
		
		// compute translation matrix * z rotation matrix
		// TODO: adjust for 3d (x, y rotation matrices, z translation)
		var cosC = Math.cos(angle),
				sinC = Math.sin(angle),
				sinNC = Math.sin(-angle),
				transform = 'matrix3d(',
				aabb = body.geometry._aabb,
				x = pos.get(0) - (aabb._hw || 0),
				y = pos.get(1) - (aabb._hh || 0);
			
		// 4 rows of the transform matrix
		transform += cosC + ', ' + sinNC + ', 0, 0, ';
		transform += sinC + ', ' + cosC + ', 0, 0, ';
		transform += '0, 0, 1, 0, ';
		transform += (x * cosC + y * sinC) + ', ' + (x * sinNC + y * cosC) + ', 0, 1)';
		return transform;
	}
};

function initWorld(_world, bounds, masonrySettings) {
	world = _world;
	world.add(Physics.integrator('verlet', { drag: 0.01 }));
	
	Physics.util.ticker.subscribe(function( time, dt ){
		world.step( time );
		// only render if not paused
		if ( !world.isPaused() ) {
			render();
		}
	});
	
	// if (useDogman) {
		// dogman = Physics.body('point', {
			// mass: 1,
			// hidden: true
		// });
	
		// dogman.state.pos.lock({ x: 0 });
		// constrainer = Physics.behavior('verlet-constraints', { iterations: 1 }), // same as default iterations value, but it's good to remember what we can change
		// world.add(constrainer);
		// touchFollowers.push(dogman);
		// world.add(dogman);
	// }
	
	updateBounds.apply(null, bounds);
	world.subscribe('drag', function(data) {
		var bodies = data.bodies,
			body,
			i = bodies.length;
			
		while (i--) {
			body = bodies[i];
			body.state.pos.vadd(data.vector);
			body.state.vel.zero();
		}
	});

	world.subscribe('dragend', function(data) {
		var bodies = data.bodies,
			body,
			i = bodies.length;
			
		while (i--) {
			body = bodies[i];
			body.state.vel.clone( data.vector.mult( 1 / 10 ) );
		}
	});
	
	Physics.util.ticker.start();
};

// function updateDogmanMass() {
	// dogman.mass = Math.pow(mason.bricks.length, 1/3) * mason.bricks.reduce(function(mass, brick) { return mass + brick.mass }, 0) / 2;
	// dogman.recalc();
// }

function getBodies(/* ids */) {
	var bodies = world.getBodies(),
		body,
		filtered = [],
		i = bodies.length;
		
	while (i--) {
		body = bodies[i];
		if (body._id && ~indexOf.call(arguments, body._id)) {
			filtered.push(body);
		}
	}
	
	return filtered;
}

/**
 * Event system hack - these proxy to PubSub.prototype.subscribe/unsubscribe
**/

function subscribe(topic, handlerName, scope, priority) {
	var _subscribe = this.subscribe,
			_unsubscribe = this.unsubscribe;
		
	if (Physics.util.isObject(topic)) {
		for ( var t in topic ){                    
			this.subscribe( t, topic[ t ], handlerName, scope );
		}
		
		return;
	};
	
	function proxy(data) {
		postMessage({
//			topic: topic,
			handler: handlerName,
			data: data
		});
	};

	if (!this._workerSubscribers)
		this._workerSubscribers = {};
		
	if (!this._workerSubscribers[topic])
		this._workerSubscribers[topic] = [];
	
	this._workerSubscribers[topic].push(handlerName); // store by name
	_subscribe.call(this, topic, proxy, scope, priority);
};

function unsubscribe(topic, handlerName) {
	var _unsubscribe = this.unsubscribe;
	if (!this._workerSubscribers)
		throw "I never subscribed to events";
		
	var subscribed = this._workerSubscribers[topic],
		idx;
		
	if (!subscribed)
		throw "I never subscribed to this topic";
		
	idx = subscribed.indexOf(handlerName);
	if (~idx)
		_unsubscribed.call(this, subscribed.splice(idx, 1));
};
	
/** END Event system hack **/

/*
* API
*/

var API = {
	removeBodies: function(/* ids */) {
		getBodies.apply(null, arguments).map(world.removeBody);
	},
	removeBody: function(id) {
		this.removeBodies([id]);
	},
	// addBodies: function() {
	// },
	addBody: function(type, options) {
		var body = 	Physics.body(type, options);
		if (options._id)
			body._id = options._id;
		if (options.lock)
			body.state.pos.lock(options.lock);
		
		world.add( body );
		return body;
	},
	addBricks: function addBricks(options, prepend) {
		var bricks = [],
			brick,
			opts;
				
		for (var i = 0, l = options.length; i < l; i++) {
			bricks[i] = brick = this.addBody('convex-polygon', options[i]);
		}
		
		mason[prepend ? 'prepended' : 'appended'](bricks);
		// if (dogman) {
			// var brick,
				// i = bricks.length;
				
			// while (i--) {
				// brick = bricks[i];
				// constrainer.distanceConstraint(brick, dogman, 0.02, brick.state.pos.dist(dogman.state.pos));
			// }

			// updateDogmanMass();
		// }
	},
	
	// removeBricks: function removeBricks(ids, fromTheHead) {
	removeBricks: function removeBricks(n, fromTheHead) {
		var bricks = fromTheHead ? mason.bricks.slice(0, n) : mason.bricks.slice(mason.bricks.length - n),
			el;
		
		world.remove(bricks);
		mason.removed(bricks);		
		// if (dogman)
			// updateDogmanMass();
	},
	
	drag: function drag(dragVector, ids) {
		var v,
			bodies = getBodies.apply(null, ids);
		
		if (bodies.length) {
			v = Physics.vector();
			v._ = dragVector;
			world.publish({
				topic: 'drag', 
				vector: v,
				bodies: bodies
			});
		}
	},

	dragend: function dragend(dragVector, ids) {
		var v,
			bodies = getBodies.apply(null, ids);
		
		if (bodies.length) {
			v = Physics.vector();
			v._ = dragVector;
			world.publish({
				topic: 'dragend', 
				vector: v,
				bodies: bodies
			});
		}
	},
	
	distanceConstraint: function(bodyAID, bodyBID, stiffness, targetLength) {
		if (!constrainer) {
			importScripts('../../src/behaviors/verlet-constraints.js');
			constrainer = Physics.behavior('verlet-constraints');
			world.add(constrainer);
		}
		
		var ab = getBodies(bodyAID, bodyBID);
		constrainer.distanceConstraint(ab[0], ab[1], stiffness, typeof targetLength == 'number' ? targetLength : ab[0].state.pos.dist(ab[1].state.pos));
	},
	
	masonry: function(settings) {
		settings = settings || {};
		if (!mason)
			importScripts('../masonryLayout.js');
		
		if (settings.dogman)
			settings.dogman = getBodies(settings.dogman)[0];
		
		mason = new Mason(Physics.util.extend({
			dogman: settings.dogman,
			constrainer: constrainer,
			// gutterWidth: INTER_BRICK_MARGIN,
			bounds: self.bounds
		}, settings));	
	},
	
	updateBounds: updateBounds
}