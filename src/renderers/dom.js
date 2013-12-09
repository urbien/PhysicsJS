/**
 * A pathetically simple dom renderer
 */
Physics.renderer('dom', function( proto ){

    // utility methods
    var thePrefix = {}
        ,tmpdiv = document.createElement("div")
        ,toTitleCase = function toTitleCase(str) {
            return str.replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }
        // return the prefixed name for the specified css property
        ,pfx = function pfx(prop) {

            if (thePrefix[prop]){
                return thePrefix[prop];
            }

            var arrayOfPrefixes = ['Webkit', 'Moz', 'Ms', 'O']
                ,name
                ;

            for (var i = 0, l = arrayOfPrefixes.length; i < l; ++i) {

                name = arrayOfPrefixes[i] + toTitleCase(prop);

                if (name in tmpdiv.style){
                    return thePrefix[prop] = name;
                }
            }

            if (name in tmpdiv.style){
                return thePrefix[prop] = prop;
            }

            return false;
        }
        ;

    var classpfx = 'pjs-'
        ,px = 'px'
        ,cssTransform = pfx('transform')
        ;

    var newEl = function( node, content ){
            var el = document.createElement(node || 'div');
            if (content){
                el.innerHTML = content;
            }
            return el;
        }
        ,drawBody
        ;

    // determine which drawBody method we can use
    if (cssTransform){
        drawBody = function( body, view ){
            var state = body.state,
				pos = state.pos,
				angle = state.angular.pos,
				rendered = state.rendered;
				
			if (!body.rendered() 
				|| pos.dist(rendered.pos) > this._world._opts.positionRenderResolution 
				|| Math.abs(angle - rendered.angular.pos) > this._world._opts.angleRenderResolution) {
				
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
				view.style[cssTransform] = transform;
			}
        };
    } else {
        drawBody = function( body, view ){

            var pos = body.state.pos;
            view.style.left = pos.get(0) + px;
            view.style.top = pos.get(1) + px;
        };
    }

    return {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            // call proto init
            proto.init.call(this, options);

            var viewport = this.el;
            viewport.style.position = 'relative';
            viewport.style.overflow = 'hidden';
            viewport.style[cssTransform] = 'translateZ(0)'; // force GPU accel
            viewport.style.width = this.options.width + px;
            viewport.style.height = this.options.height + px;

            this.els = {};

            if (options.meta){
                var stats = newEl();
                stats.className = 'pjs-meta';
                this.els.fps = newEl('span');
                this.els.ipf = newEl('span');
                stats.appendChild(newEl('span', 'fps: '));
                stats.appendChild(this.els.fps);
                stats.appendChild(newEl('br'));
                stats.appendChild(newEl('span', 'ipf: '));
                stats.appendChild(this.els.ipf);

                viewport.appendChild(stats);
            }
        },

        /**
         * Set dom element style properties for a circle
         * @param  {HTMLElement} el       The element
         * @param  {Geometry} geometry The bodie's geometry
         * @return {void}
         */
        circleProperties: function( el, geometry ){

            var aabb = geometry.aabb();

            el.style.width = (aabb.halfWidth * 2) + px;
            el.style.height = (aabb.halfHeight * 2) + px;
            // el.style.marginLeft = (-aabb.halfWidth) + px;
            // el.style.marginTop = (-aabb.halfHeight) + px;
        },

		/**
         * Set dom element style properties for a convex-polygon
         * @param  {HTMLElement} el       The element
         * @param  {Geometry} geometry The body's geometry
         * @return {void}
         */
        'convex-polygonProperties': function( el, geometry ){

            var aabb = geometry.aabb();

            el.style.width = (aabb.halfWidth * 2) + px;
            el.style.height = (aabb.halfHeight * 2) + px;
            // el.style.marginLeft = (-aabb.halfWidth) + px;
            // el.style.marginTop = (-aabb.halfHeight) + px;
        },

        /**
         * Create a dom element for the specified geometry
         * @param  {Geometry} geometry The bodie's geometry
         * @return {HTMLElement}          The element
         */
        createView: function( geometry ){

            var el = newEl()
                ,fn = geometry.name + 'Properties'
                ;

            el.className = classpfx + geometry.name;
            el.style.position = 'absolute';            
            el.style.top = '0px';
            el.style.left = '0px';
            
            if (this[ fn ]){
                this[ fn ](el, geometry);
            }
            
            this.el.appendChild( el );
            return el;
        },

        /**
         * Draw the meta data
         * @param  {Object} meta The meta data
         * @return {void}
         */
        drawMeta: function( meta ){

            this.els.fps.textContent = meta.fps.toFixed(2);
            this.els.ipf.textContent = meta.ipf;
        },

        /**
         * Update dom element to reflect bodie's current state
         * @param  {Body} body The body to draw
         * @param  {HTMLElement} view The view for that body
         * @return {void}
         */
        drawBody: drawBody
    };
});