/**
 * jQuery Masonry v2.0.110517 beta
 * The flip-side of CSS Floats.
 * jQuery plugin that rearranges item elements to a grid.
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */

define('masonry', ['physicsjs'], function( Physics ) {
  // ========================= Masonry ===============================

  var ArrayProto = Array.prototype;
  var slice = ArrayProto.slice;
  var concat = ArrayProto.concat;
  var _ = {
	difference: function(array) {
		var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
		return array.filter(function(value){ return rest.indexOf(value) == -1; });
    }
  }
  
  function outerHeight(brick, includeMargin) {
	return $(brick).outerHeight(includeMargin);
  }
  
  function outerWidth(brick, includeMargin) {
	return $(brick).outerWidth(includeMargin);
  }
  
  var cssTransform = '-webkit-transform';
  
  // our "Widget" object constructor
  function Mason( options, bricks ){
	this.dogman = options.dogman;
	this.initialYOffset = this.dogman.state.pos.get(1);
	this.trainer = options.constrainer;
    this.bricks = bricks || [];
    this._create( options );
	if (this.bricks.length)
		this._init();
  };

  // function cleanData(bricks) {
    // var i = bricks.length,
        // data;
    
    // while (i--) {
      // data = bricks[i].view.dataset;
      // delete data.outerWidth;
      // delete data.outerHeight;
      // delete data.masonryColSpan;
      // delete data.x;
      // delete data.y;
    // }
  // }
  
//  function getXYZ(brick) {
//    return DOM.parseTranslation(brick.style[CSS.transformLookup]);
//  };
  
  // styles of container element we want to keep track of
  //var masonryContainerStyles = [ 'position', cssTransform ];

  Mason.settings = {
    horizontal: false,
    oneElementPerCol: false,
    oneElementPerRow: false,
    stretchRow: false,
    stretchCol: false,
    fromBottom: false,
    isResizable: true,
    gutterWidth: 0
  };

  Mason.prototype = {
    // sets up widget
    _create: function( options ) {
  
      this.options = $.extend( true, {}, Mason.settings, options );
      this.axis = this.options.horizontal ? 'x' : 'y';
//      this.AXIS = this.axis.toUpperCase();
      this.originalFromBottom = this.options.fromBottom;
	  this.bounds = options.bounds;
	  this.offset = {
		x: this.bounds._pos.get(0) - this.bounds._hw,
		y: this.bounds._pos.get(1) - this.bounds._hh
	  };
  
      // get original styles in case we re-apply them in .destroy()
      // var elemStyle = this.element.style;
      // this.originalStyle = {};
      // for ( var i=0, len = masonryContainerStyles.length; i < len; i++ ) {
        // var prop = masonryContainerStyles[i];
        // this.originalStyle[ prop ] = elemStyle[ prop ] || null;
      // }
  
      // this.element.$css(this.options.containerStyle);
    },
  
    // _init fires when your instance is first created
    // (from the constructor above), and when you
    // attempt to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init: function() {
      this.reLayout();
	  this._initialized = true;
    },

    getContentBounds: function() {
      return {
        min: Math.max.apply(Math, this.topColYs),
        max: Math.min.apply(Math, this.bottomColYs)
      }
    },
  
    option: function( key, value ){
  
      // get/change options AFTER initialization:
      // you don't have to support all these cases,
      // but here's how:
  
      // signature: $('#foo').bar({ cool:false });
      if ( $.isPlainObject( key ) ){
        this.options = $.extend(true, this.options, key);
  
        // signature: $('#foo').option('cool');  - getter
      } else if ( key && typeof value === "undefined" ){
        return this.options[ key ];
  
        // signature: $('#foo').bar('option', 'baz', false);
      } else {
        this.options[ key ] = value;
      }
  
      return this; // make sure to return the instance!
    },
  
    // ====================== General Layout ======================  
        
    // used on collection of atoms (should be filtered, and sorted before )
    // accepts atoms-to-be-laid-out to start with
    layout: function( bricks ) {
      var brick, colSpan, groupCount, groupY, groupColY, j, 
		  colYs = this._getColYs(), 
		  extreme = this.options.fromBottom ? Math.min : Math.max;
  
      for (var i=0, len = bricks.length; i < len; i++) {
        brick = bricks[i];
        //how many columns does this brick span
		colSpan = this._getColSpan(brick);
  
        if ( colSpan === 1 ) {
          // if brick spans only one column, just like singleMode
          this._placeBrick( brick, this.cols, colYs );
        } else {
          // brick spans more than one column
          // how many different places could this brick fit horizontally
          groupCount = this.cols + 1 - colSpan;
          groupY = [];
  
          // for each group potential horizontal position
          for ( j=0; j < groupCount; j++ ) {
            // make an array of colY values for that one group
            groupColY = colYs.slice( j, j+colSpan );
            // and get the max value of the array
            groupY[j] = extreme.apply( Math, groupColY );
          }
  
          this._placeBrick( brick, groupCount, groupY );
        }
      }  
    },
  
    // _calcBrickMargin: function() {
      // if (!this.hasOwnProperty('_brickMarginX') && this.bricks.length) {
        // var brick = this.bricks[0].view;
        // this._brickMarginY = outerHeight(brick, true) - brick.offsetHeight;
        // this._brickMarginX = outerHeight(brick, true) - brick.offsetWidth;
        // this._calcOuterDimensions(brick);
      // }
    // },
    
    // calculates number of columns
    // i.e. this.columnWidth = 200
    _getColumns: function() {
      if (this.options.oneElementPerRow || this.options.stretchRow) {
        this.columnWidth = this.element.$data('width');
        this.cols = 1;
        return;
      }
      else if (this.options.oneElementPerCol || this.options.stretchCol) {
        this.columnWidth = this.element.$data('height');
        this.cols = 1;
        return;
      }
      
      var brick = this.bricks[0],
          dimensionMethod = this.options.horizontal ? '_getOuterHeight' : '_getOuterWidth',
          containerWidth = this.bounds._hw * 2;
  
      // this._calcBrickMargin();
      this.columnWidth = this.options.columnWidth ||
                         // or use the size of the first item
                         this[dimensionMethod](brick) ||
                         // if there's no items, use size of container
                         containerWidth;
  
      this.columnWidth += this.options.gutterWidth;
  
      this.cols = Math.floor( ( containerWidth + this.options.gutterWidth ) / this.columnWidth );
      this.cols = Math.max( this.cols, 1 );
  
      return this;
    },
  
    _getColYs: function() {
      return this.options.fromBottom ? this.topColYs : this.bottomColYs;
    },
  
    _getOuterWidth: function(brick) {
      // return parseFloat(brick.view.dataset.outerWidth);
	  if (brick.geometry._aabb)
		return brick.geometry._aabb._hw * 2;
	  else
		return brick.aabb().halfWidth * 2;
    },

    _getOuterHeight: function(brick) {
      // return parseFloat(brick.view.dataset.outerHeight);
	  if (brick.geometry._aabb)
		return brick.geometry._aabb._hh * 2;
	  else
		return brick.aabb().halfHeight * 2;
    },

    // _calcOuterDimensions: function( brick ) {
      // var outerWidth, outerHeight;
      // if (!brick.dataset.outerHeight) {        
        // if (this.options.stretchCol)
          // outerHeight = this.element.$data('height');
        // else {
          // var offsetHeight = brick.offsetHeight;
          // outerHeight = offsetHeight + this._brickMarginY;
        // }
        
        // brick.dataset.outerHeight = outerHeight; 
      // }

      // if (!brick.dataset.outerWidth) {        
        // if (this.options.stretchRow)
          // outerWidth = this.element.$data('width');
        // else {
          // var offsetWidth = brick.offsetWidth;
          // outerWidth = offsetWidth + this._brickMarginX;
        // }
        
        // brick.dataset.outerWidth = outerWidth; 
      // }

    // },
  
    _placeBrick: function( brick, setCount, setY ) {
      // get the minimum Y value from the columns
      var view = brick.view,
		  dimensionMethod = this.options.horizontal ? '_getOuterWidth' : '_getOuterHeight',
          extreme = this.options.fromBottom ? Math.max : Math.min,
          extremeY  = extreme.apply( Math, setY ),
          multiplier = this.options.fromBottom ? -1 : 1,
          setHeight = extremeY + multiplier * (this[dimensionMethod](brick) + this.options.gutterWidth),
          i = setY.length,
          shortCol  = i,
          setSpan   = this.cols + 1 - i,
          style     = {},
          colYs = this._getColYs();
  
      //    Which column has the min/max Y value, 
      //         closest to the left/right, 
      // based on if we're appending/prepending
      while (i--) {
        if ( setY[i] === extremeY ) {
          shortCol = i;
          if (this.options.fromBottom)
            break;
        }
      }
  
      // position the brick
      var top,
          left;
      
      if (this.options.horizontal) {        
        top = this.columnWidth * shortCol + this.offset.y;
        
        if (this.options.fromBottom)
          left = setHeight - this.offset.x;
        else
          left = extremeY + this.offset.x;
      }
      else {
        left = this.columnWidth * shortCol + this.offset.x + brick.geometry._aabb._hw; // columnWidth includes gutterWidth
      
        if (this.options.fromBottom)
          top = extremeY - this.offset.y - brick.geometry._aabb._hh + (this.dogman.state.pos.get(1) - this.initialYOffset);
        else
          top = extremeY + this.offset.y + brick.geometry._aabb._hh + (this.dogman.state.pos.get(1) - this.initialYOffset);
      }

	  console.log("adding", brick.geometry._aabb._hw * 2, "x", brick.geometry._aabb._hh * 2, "brick at (" + left + ", " + top + ")");
	  brick.state.pos.set(left, top);
	  brick.state.pos.lock({
		x: this.options.gutterWidth / 3  // maybe halving is fine, but let's play it safe
	  });

	  /*
	  brick.state.vel.lock({
		x: 0
	  });

	  brick.state.acc.lock({
		x: 0
	  });
	  */
	  
	  this.trainer.distanceConstraint(brick, this.dogman, 0.02, brick.state.pos.dist(this.dogman.state.pos));

      // apply setHeight to necessary columns
      for ( i=0; i < setSpan; i++ ) {
        colYs[ shortCol + i ] = setHeight;
      }
  
    },
  
    resize: function() {
      var prevColCount = this.cols;
      // get updated colCount
      this._getColumns('masonry');
      if ( this.cols !== prevColCount ) {
        // if column count has changed, do a new column cound
        this._reloadLayout();
      }
    },
  
  
    reLayout: function() {
      this._getColumns('masonry');
      this._reloadLayout();
    },
  
    _reloadLayout: function() {
      // reset columns
      this.options.fromBottom = this.originalFromBottom;
      this._resetColYs();
      
      // apply layout logic to all bricks
      this.layout( this.bricks );
    },
  
    _resetColYs: function() {
      var i = this.cols,
          offset = this.offset[this.axis];
      
      if (!this.topColYs)
        this.topColYs = new Array(i);
      if (!this.bottomColYs)
        this.bottomColYs = new Array(i);
      
      while (i--) {
        this.topColYs[i] = offset;
		this.bottomColYs[i] = offset + this.options.gutterWidth;
      }
      
      this.topColYs.length = this.bottomColYs.length = this.cols;
    },
    
    // ====================== Convenience methods ======================
  
    // goes through all children again and gets bricks in proper order
    // reloadItems: function() {
      // this.bricks = this._getBricks();
    // },
  
    setOffset: function(offset) {
      var top = this.topColYs,
          bottom = this.bottomColYs,
          i = this.cols;
      
      while (i--) {
        top[i] = offset;
        bottom[i] = offset;
      }
    },
    
    reload: function() {
      // this.reloadItems();
      this.reLayout();
    },
  
    appended: function( content ) {
      this.options.fromBottom = false;
      this._appended.apply(this, arguments);    
    },
  
    prepended: function(content) {
      this.options.fromBottom = true;
      return this._appended.apply(this, arguments);
    },
  
    // convienence method for working with Infinite Scroll
    _appended: function( newBricks ) {
      // add new bricks to brick pool
      this.bricks = this.options.fromBottom ? newBricks.concat(this.bricks) : this.bricks.concat( newBricks );
	  if (!this._initialized)
		this._init();
	  else
		this.layout( newBricks );
    },
  
    _getLeftmostColumn: function(brick) {
	  var coordIdx = this.options.horizontal ? 1 : 0;
	  var dimProp = this.options.horizontal ? '_hh' : '_hw';
      var offset = brick.state.pos.get(coordIdx) - brick.geometry._aabb[dimProp];
      var edgeCol = Math.round(offset / this.columnWidth);
      return edgeCol;
    },

	/*
    _calcColSpan: function(brick) {
      var span;
      if (this.options.horizontal && this.options.oneElementPerCol || !this.options.horizontal && this.options.oneElementPerRow)
        span = 1;
      else {
        var colSpan = Math.ceil( this[this.options.horizontal ? '_getOuterHeight' : '_getOuterWidth'](brick) / this.columnWidth );
        span = Math.min( colSpan, this.cols );
      }
      
      brick.view.dataset.masonryColSpan = span;
    },
	*/
	
    _getColSpan: function(brick) {
      var colSpan = Math.ceil( this._getOuterWidth(brick) / this.columnWidth );
      return Math.min( colSpan, this.cols );
    },

    _recalcColYs: function() {
      if (!this.bricks.length) {
        this._resetColYs();
        return;
      }
      
      var dimensionMethod = this.options.horizontal ? '_getOuterWidth' : '_getOuterHeight',
          bricks = this.bricks,
          brick,
          fromCol,
          offset = this.offset.y,
          topColYs = this.bottomColYs.slice(),
          bottomColYs = this.topColYs.slice(),
          cols = this.cols,
          col,
          top,
          height,
          i = bricks.length,
		  dogmanOffset = this.dogman.state.pos.get(1) - this.initialYOffset;

      while (i--) {
        brick = bricks[i];
        fromCol = this._getLeftmostColumn(brick);
        colSpan = this._getColSpan(brick);
        height = this[dimensionMethod](brick);
        top = brick.state.pos.get(1) - brick.geometry._aabb._hh - dogmanOffset;
        while (colSpan--) {
          col = fromCol + colSpan;
          topColYs[col] = Math.min(top - this.options.gutterWidth, topColYs[col]);
          bottomColYs[col] = Math.max(top + height + this.options.gutterWidth, bottomColYs[col]);
        }
      }
    
      this.topColYs = topColYs;
      this.bottomColYs = bottomColYs;
    },

    removed: function(bricks) {
      // cleanData(bricks);      
      this.bricks = _.difference(this.bricks, bricks);      
      this._recalcColYs();
    }
  };

  return Mason;  
});
