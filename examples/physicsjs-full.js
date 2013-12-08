/**
 * PhysicsJS v0.5.3 - 2013-12-08
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2013 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

// ---
// inside: src/intro.js

(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. 
        module.exports = factory.call(root);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function(){ return factory.call(root) });
    } else {
        // Browser globals (root is window)
        root.Physics = factory.call(root);
    }
}(this, function () {

'use strict';

var Physics = function Physics(){

    return Physics.world.apply(Physics, arguments);
};

Physics.util = {};


// ---
// inside: lib/lodash.js

/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash exports="none" iife="(function(window){%output%;lodash.extend(Physics.util, lodash);}(this));" include="isObject,isFunction,isArray,isPlainObject,uniqueId,each,random,extend,clone,throttle,bind,sortedIndex,shuffle" --minify --output lib/lodash.js`
 */
;!function(n){function t(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function e(n){n.length=0,S.length<P&&S.push(n)}function r(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var o=Array(0>e?0:e);++r<e;)o[r]=n[t+r];return o}function o(){}function u(n){function t(){if(o){var n=r(o);at.apply(n,arguments)}if(this instanceof t){var a=i(e.prototype),n=e.apply(a,n||arguments);return b(n)?n:a}return e.apply(u,n||arguments)}var e=n[0],o=n[2],u=n[4];return dt(t,n),t
}function a(n,o,u,i,c){if(u){var l=u(n);if(typeof l!="undefined")return l}if(!b(n))return n;var f=nt.call(n);if(!q[f]||!mt.nodeClass&&t(n))return n;var s=ht[f];switch(f){case N:case R:return new s(+n);case M:case K:return new s(n);case z:return l=s(n.source,D.exec(n)),l.lastIndex=n.lastIndex,l}if(f=jt(n),o){var p=!i;i||(i=S.pop()||[]),c||(c=S.pop()||[]);for(var g=i.length;g--;)if(i[g]==n)return c[g];l=f?s(n.length):{}}else l=f?r(n):_t({},n);return f&&(ut.call(n,"index")&&(l.index=n.index),ut.call(n,"input")&&(l.input=n.input)),o?(i.push(n),c.push(l),(f?Ot:At)(n,function(n,t){l[t]=a(n,o,u,i,c)
}),p&&(e(i),e(c)),l):l}function i(n){return b(n)?ft(n):{}}function c(n,t,e){if(typeof n!="function")return E;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(mt.funcNames&&(r=!n.name),r=r||!mt.funcDecomp,!r)){var o=rt.call(n);mt.funcNames||(r=!T.test(o)),r||(r=F.test(o),dt(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)
};case 4:return function(e,r,o,u){return n.call(t,e,r,o,u)}}return j(n,t)}function l(n){function t(){var n=s?c:this;if(u){var h=r(u);at.apply(h,arguments)}return(a||g)&&(h||(h=r(arguments)),a&&at.apply(h,a),g&&h.length<f)?(o|=16,l([e,y?o:-4&o,h,null,c,f])):(h||(h=arguments),p&&(e=n[v]),this instanceof t?(n=i(e.prototype),h=e.apply(n,h),b(h)?h:n):e.apply(n,h))}var e=n[0],o=n[1],u=n[2],a=n[3],c=n[4],f=n[5],s=1&o,p=2&o,g=4&o,y=8&o,v=e;return dt(t,n),t}function f(n,r,o,u,a,i){if(o){var c=o(n,r);if(typeof c!="undefined")return!!c
}if(n===r)return 0!==n||1/n==1/r;if(n===n&&!(n&&V[typeof n]||r&&V[typeof r]))return false;if(null==n||null==r)return n===r;var l=nt.call(n),s=nt.call(r);if(l==B&&(l=$),s==B&&(s=$),l!=s)return false;switch(l){case N:case R:return+n==+r;case M:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case z:case K:return n==r+""}if(s=l==L,!s){var p=ut.call(n,"__wrapped__"),g=ut.call(r,"__wrapped__");if(p||g)return f(p?n.__wrapped__:n,g?r.__wrapped__:r,o,u,a,i);if(l!=$||!mt.nodeClass&&(t(n)||t(r)))return false;if(l=!mt.argsObject&&v(n)?Object:n.constructor,p=!mt.argsObject&&v(r)?Object:r.constructor,l!=p&&!(h(l)&&l instanceof l&&h(p)&&p instanceof p)&&"constructor"in n&&"constructor"in r)return false
}for(l=!a,a||(a=S.pop()||[]),i||(i=S.pop()||[]),p=a.length;p--;)if(a[p]==n)return i[p]==r;var y=0,c=true;if(a.push(n),i.push(r),s){if(p=n.length,y=r.length,(c=y==p)||u)for(;y--;)if(s=p,g=r[y],u)for(;s--&&!(c=f(n[s],g,o,u,a,i)););else if(!(c=f(n[y],g,o,u,a,i)))break}else St(r,function(t,e,r){return ut.call(r,e)?(y++,c=ut.call(n,e)&&f(n[e],t,o,u,a,i)):void 0}),c&&!u&&St(n,function(n,t,e){return ut.call(e,t)?c=-1<--y:void 0});return a.pop(),i.pop(),l&&(e(a),e(i)),c}function s(n,t,e,o,a,i){var c=1&t,f=4&t,p=16&t,g=32&t;
if(!(2&t||h(n)))throw new TypeError;p&&!e.length&&(t&=-17,p=e=false),g&&!o.length&&(t&=-33,g=o=false);var y=n&&n.__bindData__;return y&&true!==y?(y=r(y),y[2]&&(y[2]=r(y[2])),y[3]&&(y[3]=r(y[3])),!c||1&y[1]||(y[4]=a),!c&&1&y[1]&&(t|=8),!f||4&y[1]||(y[5]=i),p&&at.apply(y[2]||(y[2]=[]),e),g&&ct.apply(y[3]||(y[3]=[]),o),y[1]|=t,s.apply(null,y)):(1==t||17===t?u:l)([n,t,e,o,a,i])}function p(){H.h=I,H.b=H.c=H.g=H.i="",H.e="t",H.j=true;for(var n,t=0;n=arguments[t];t++)for(var e in n)H[e]=n[e];t=H.a,H.d=/^[^,]+/.exec(t)[0],n=Function,t="return function("+t+"){",e=H;
var r="var n,t="+e.d+",E="+e.e+";if(!t)return E;"+e.i+";";e.b?(r+="var u=t.length;n=-1;if("+e.b+"){",mt.unindexedChars&&(r+="if(s(t)){t=t.split('')}"),r+="while(++n<u){"+e.g+";}}else{"):mt.nonEnumArgs&&(r+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+e.g+";}}else{"),mt.enumPrototypes&&(r+="var G=typeof t=='function';"),mt.enumErrorProps&&(r+="var F=t===k||t instanceof Error;");var o=[];if(mt.enumPrototypes&&o.push('!(G&&n=="prototype")'),mt.enumErrorProps&&o.push('!(F&&(n=="message"||n=="name"))'),e.j&&e.f)r+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",o.length&&(r+="if("+o.join("&&")+"){"),r+=e.g+";",o.length&&(r+="}"),r+="}";
else if(r+="for(n in t){",e.j&&o.push("m.call(t, n)"),o.length&&(r+="if("+o.join("&&")+"){"),r+=e.g+";",o.length&&(r+="}"),r+="}",mt.nonEnumShadows){for(r+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)r+="n='"+e.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",e.j||(r+="||(!x[n]&&t[n]!==A[n])"),r+="){"+e.g+"}";r+="}"}return(e.b||mt.nonEnumArgs)&&(r+="}"),r+=e.c+";return E",n("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",t+r+"}")(c,W,X,ut,C,v,jt,m,H.f,Y,V,bt,K,Z,nt)
}function g(n){return typeof n=="function"&&tt.test(n)}function y(n){var e,r;return!n||nt.call(n)!=$||(e=n.constructor,h(e)&&!(e instanceof e))||!mt.argsClass&&v(n)||!mt.nodeClass&&t(n)?false:mt.ownLast?(St(n,function(n,t,e){return r=ut.call(e,t),false}),false!==r):(St(n,function(n,t){r=t}),typeof r=="undefined"||ut.call(n,r))}function v(n){return n&&typeof n=="object"&&typeof n.length=="number"&&nt.call(n)==B||false}function h(n){return typeof n=="function"}function b(n){return!(!n||!V[typeof n])}function m(n){return typeof n=="string"||n&&typeof n=="object"&&nt.call(n)==K||false
}function d(n,t,e){if(t&&typeof e=="undefined"&&jt(n)){e=-1;for(var r=n.length;++e<r&&false!==t(n[e],e,n););}else Ot(n,t,e);return n}function j(n,t){return 2<arguments.length?s(n,17,r(arguments,2),null,t):s(n,1,null,null,t)}function w(n,t,e){var r,o,u,a,i,c,l,f=0,s=false,p=true;if(!h(n))throw new TypeError;if(t=gt(0,t)||0,true===e)var g=true,p=false;else b(e)&&(g=e.leading,s="maxWait"in e&&(gt(t,e.maxWait)||0),p="trailing"in e?e.trailing:p);var y=function(){var e=t-(Ct()-a);0<e?c=setTimeout(y,e):(o&&clearTimeout(o),e=l,o=c=l=_,e&&(f=Ct(),u=n.apply(i,r),c||o||(r=i=null)))
},v=function(){c&&clearTimeout(c),o=c=l=_,(p||s!==t)&&(f=Ct(),u=n.apply(i,r),c||o||(r=i=null))};return function(){if(r=arguments,a=Ct(),i=this,l=p&&(c||!g),false===s)var e=g&&!c;else{o||g||(f=a);var h=s-(a-f),b=0>=h;b?(o&&(o=clearTimeout(o)),f=a,u=n.apply(i,r)):o||(o=setTimeout(v,h))}return b&&c?c=clearTimeout(c):c||t===s||(c=setTimeout(y,t)),e&&(b=true,u=n.apply(i,r)),!b||c||o||(r=i=null),u}}function E(n){return n}function x(){}function O(n){return function(t){return t[n]}}var _,S=[],A=0,C={},P=40,D=/\w*$/,T=/^\s*function[ \n\r\t]+\w/,F=/\bthis\b/,I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),B="[object Arguments]",L="[object Array]",N="[object Boolean]",R="[object Date]",W="[object Error]",M="[object Number]",$="[object Object]",z="[object RegExp]",K="[object String]",q={"[object Function]":false};
q[B]=q[L]=q[N]=q[R]=q[M]=q[$]=q[z]=q[K]=true;var G={leading:false,maxWait:0,trailing:false},J={configurable:false,enumerable:false,value:null,writable:false},H={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},Q=V[typeof n]&&n||this;n=V[typeof global]&&global,!n||n.global!==n&&n.window!==n||(Q=n);var U=[],X=Error.prototype,Y=Object.prototype,Z=String.prototype,nt=Y.toString,tt=RegExp("^"+(nt+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),et=Math.floor,rt=Function.prototype.toString,ot=g(ot=Object.getPrototypeOf)&&ot,ut=Y.hasOwnProperty,at=U.push,it=Y.propertyIsEnumerable,ct=U.unshift,lt=function(){try{var n={},t=g(t=Object.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ft=g(ft=Object.create)&&ft,st=g(st=Array.isArray)&&st,pt=g(pt=Object.keys)&&pt,gt=Math.max,yt=Math.min,vt=Math.random,ht={};ht[L]=Array,ht[N]=Boolean,ht[R]=Date,ht["[object Function]"]=Function,ht[$]=Object,ht[M]=Number,ht[z]=RegExp,ht[K]=String;var bt={};bt[L]=bt[R]=bt[M]={constructor:true,toLocaleString:true,toString:true,valueOf:true},bt[N]=bt[K]={constructor:true,toString:true,valueOf:true},bt[W]=bt["[object Function]"]=bt[z]={constructor:true,toString:true},bt[$]={constructor:true},function(){for(var n=I.length;n--;){var t,e=I[n];
for(t in bt)ut.call(bt,t)&&!ut.call(bt[t],e)&&(bt[t][e]=false)}}();var mt=o.support={};!function(){var n=function(){this.x=1},t={0:1,length:1},e=[];n.prototype={valueOf:1,y:1};for(var r in new n)e.push(r);for(r in arguments);mt.argsClass=nt.call(arguments)==B,mt.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),mt.enumErrorProps=it.call(X,"message")||it.call(X,"name"),mt.enumPrototypes=it.call(n,"prototype"),mt.funcDecomp=!g(Q.WinRTError)&&F.test(function(){return this}),mt.funcNames=typeof Function.name=="string",mt.nonEnumArgs=0!=r,mt.nonEnumShadows=!/valueOf/.test(e),mt.ownLast="x"!=e[0],mt.spliceObjects=(U.splice.call(t,0,1),!t[0]),mt.unindexedChars="xx"!="x"[0]+Object("x")[0];
try{mt.nodeClass=!(nt.call(document)==$&&!({toString:0}+""))}catch(o){mt.nodeClass=true}}(1),ft||(i=function(){function n(){}return function(t){if(b(t)){n.prototype=t;var e=new n;n.prototype=null}return e||Q.Object()}}());var dt=lt?function(n,t){J.value=t,lt(n,"__bindData__",J)}:x;mt.argsClass||(v=function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ut.call(n,"callee")&&!it.call(n,"callee")||false});var jt=st||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&nt.call(n)==L||false
},wt=p({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),Et=pt?function(n){return b(n)?mt.enumPrototypes&&typeof n=="function"||mt.nonEnumArgs&&n.length&&v(n)?wt(n):pt(n):[]}:wt,st={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:Et,g:"if(e(t[n],n,g)===false)return E"};n={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:Et,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"};var xt={i:"if(!B[typeof t])return E;"+st.i,b:false},Ot=p(st),_t=p(n,{i:n.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),St=p(st,xt,{j:false}),At=p(st,xt);
h(/x/)&&(h=function(n){return typeof n=="function"&&"[object Function]"==nt.call(n)});var st=ot?function(n){if(!n||nt.call(n)!=$||!mt.argsClass&&v(n))return false;var t=n.valueOf,e=g(t)&&(e=ot(t))&&ot(e);return e?n==e||ot(n)==e:y(n)}:y,Ct=g(Ct=Date.now)&&Ct||function(){return(new Date).getTime()};o.assign=_t,o.bind=j,o.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return c(n,t,e);if("object"!=r)return O(n);var o=Et(n),u=o[0],a=n[u];return 1!=o.length||a!==a||b(a)?function(t){for(var e=o.length,r=false;e--&&(r=f(t[o[e]],n[o[e]],null,true)););return r
}:function(n){return n=n[u],a===n&&(0!==a||1/a==1/n)}},o.debounce=w,o.forEach=d,o.forIn=St,o.forOwn=At,o.keys=Et,o.property=O,o.shuffle=function(n){var t=-1,e=n?n.length:0,r=Array(typeof e=="number"?e:0);return d(n,function(n){var e;e=++t,e=0+et(vt()*(e-0+1)),r[t]=r[e],r[e]=n}),r},o.throttle=function(n,t,e){var r=true,o=true;if(!h(n))throw new TypeError;return false===e?r=false:b(e)&&(r="leading"in e?e.leading:r,o="trailing"in e?e.trailing:o),G.leading=r,G.maxWait=t,G.trailing=o,w(n,t,G)},o.each=d,o.extend=_t,o.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),a(n,t,typeof e=="function"&&c(e,r,1))
},o.identity=E,o.isArguments=v,o.isArray=jt,o.isFunction=h,o.isObject=b,o.isPlainObject=st,o.isString=m,o.noop=x,o.now=Ct,o.random=function(n,t,e){var r=null==n,o=null==t;return null==e&&(typeof n=="boolean"&&o?(e=n,n=1):o||typeof t!="boolean"||(e=t,o=true)),r&&o&&(t=1),n=+n||0,o?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=vt(),yt(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):n+et(vt()*(t-n+1))},o.sortedIndex=function(n,t,e,r){var u=0,a=n?n.length:u;for(e=e?o.createCallback(e,r,1):E,t=e(t);u<a;)r=u+a>>>1,e(n[r])<t?u=r+1:a=r;
return u},o.uniqueId=function(n){var t=++A;return(null==n?"":n)+""+t},o.VERSION="2.4.1",o.extend(Physics.util,o)}(this);

// ---
// inside: src/util/decorator.js

/**
 * Facilitates creation of decorator service functions
 *
 * @example
 * 
 * var service = Decorator('service', {
 *      // prototype methods...
 *      method: function( args ){
 *      }
 * });
 *
 * // define
 * service( 'name', (optional)'parent-name', function decorator( parent ){
 *
 *      // extend further...
 *      return {
 *          // overrides
 *          init: function( cfg ){
 *              parent.init.call(this, cfg);
 *          }
 *      };
 * });
 * 
 * // instantiate
 * var options = { key: 'val' };
 * var instance = service( 'name', options );
 */
var Decorator = Physics.util.decorator = function Decorator( type, baseProto ){

    var registry = {}
        ,proto = {}
        ;

    // extend callback that only extends functions
    var copyFn = function copyFn( a, b ){

        return Physics.util.isFunction( b ) ? b : a;
    };

    // http://ejohn.org/blog/objectgetprototypeof/
    /* jshint -W103 */
    var getProto = Object.getPrototypeOf;
    if ( typeof getProto !== 'function' ) {
        if ( typeof 'test'.__proto__ === 'object' ) {
            getProto = function(object){
                return object.__proto__;
            };
        } else {
            getProto = function(object){
                // May break if the constructor has been tampered with
                return object.constructor.prototype;
            };
        }
    }
    /* jshint +W103 */

    var objectCreate = Object.create;
    if (typeof objectCreate !== 'function') {
        objectCreate = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    /**
     * Apply mixin methods to decorator base
     * @param  {String|Object} key The method name. OR object with many key: fn pairs.
     * @param  {Function} val The function to assign
     * @return {void}
     */
    var mixin = function mixin( key, val ){

        if ( typeof key === 'object' ){
            proto = Physics.util.extend(proto, key, copyFn);
            proto.type = type;
            return;
        }

        if ( key !== 'type' && Physics.util.isFunction( val ) ){
            proto[ key ] = val;
        }
    };

    // @TODO: not sure of the best way to make the constructor names
    // transparent and readable in debug consoles...
    mixin( baseProto );

    /**
     * Factory function for definition and instantiation of subclasses.
     * If class with "name" is not defined, the "decorator" parameter is required to define it first.
     * @param  {String} name       The class name
     * @param  {String} parentName (optional) The name of parent class to extend
     * @param  {Function} decorator (optional) The decorator function that should define and return methods to extend (decorate) the base class
     * @param  {Object} cfg        (optional) The configuration to pass to the class initializer
     * @return {void|Object}       If defining without the "cfg" parameter, void will be returned. Otherwise the class instance will be returned
     */
    var factory = function factory( name, parentName, decorator, cfg ){

        var instance
            ,result
            ,parent = proto
            ,tmp
            ;

        // set parent if specified
        if ( typeof parentName !== 'string' ){

            // ... otherwise reassign parameters
            cfg = decorator;
            decorator = parentName;

        } else {

            // extend the specified module
            parent = registry[ parentName ];

            if ( !parent ){

                throw 'Error: "' + parentName + '" ' + type + ' not defined';
            }

            parent = parent.prototype;
        }

        if ( typeof decorator === 'function' ){

            result = registry[ name ];

            if ( result ){

                result.prototype = Physics.util.extend(result.prototype, decorator( getProto(result.prototype) ), copyFn);
                
            } else {
                // newly defined
                // store the new class
                result = registry[ name ] = function constructor( opts ){
                    if (this.init){
                        this.init( opts );
                    }
                };

                result.prototype = objectCreate( parent );
                result.prototype = Physics.util.extend(result.prototype, decorator( parent ), copyFn);
            }

            result.prototype.type = type;
            result.prototype.name = name;
            
        } else {

            cfg = decorator || {};
            result = registry[ name ];
            if (!result){

                throw 'Error: "' + name + '" ' + type + ' not defined';
            }
        }

        if ( cfg ) {

            // create a new instance from the provided decorator
            return new result( cfg );
        }
    };

    factory.mixin = mixin;

    return factory;
};

// ---
// inside: src/util/noconflict.js

(function( window ){

    var _Physics = window.Physics;

    /**
     * Restore the original reference to the global window.Physics variable.
     * Does nothing if PhysicsJS doesn't have a reference in global scope
     * @return {Physics} The PhysicsJS reference
     */
    Physics.noConflict = function(){

        if ( window.Physics === Physics ) {
            window.Physics = _Physics;
        }
        
        return Physics;
    };

})( this );

// ---
// inside: src/util/pubsub.js

(function(){

    /**
     * PubSub implementation (fast)
     */
    var PubSub = function PubSub( defaultScope ){

        if (!(this instanceof PubSub)){
            return new PubSub( defaultScope );
        }

        this.initPubsub( defaultScope );
    };

    PubSub.prototype = {

        /**
         * Initialize
         * @param  {Object} defaultScope Default scope to bind events to
         * @return {void}
         */
        initPubsub: function( defaultScope ){
            this._topics = {};
            this._defaultScope = defaultScope || this;
        },

        /**
         * Subscribe a callback (or callbacks) to a topic (topics).
         * 
         * @param  {String|Object}   topic The topic name, or a config with key/value pairs of { topic: callbackFn, ... }
         * @param  {Function} fn The callback function (if not using Object as previous argument)
         * @param  {Object}   scope (optional) The scope to bind callback to
         * @param  {Number}   priority (optional) The priority of the callback (higher = earlier)
         * @return {this}
         */
        subscribe: function( topic, fn, scope, priority ){

            var listeners = this._topics[ topic ] || (this._topics[ topic ] = [])
                ,orig = fn
                ,idx
                ;

            // check if we're subscribing to multiple topics
            // with an object
            if ( Physics.util.isObject( topic ) ){

                for ( var t in topic ){
                    
                    this.subscribe( t, topic[ t ], fn, scope );
                }

                return this;
            }

            if ( Physics.util.isObject( scope ) ){
                
                fn = Physics.util.bind( fn, scope );
                fn._bindfn_ = orig;

            } else if (!priority) {

                priority = scope;
            }

            fn._priority_ = priority;

            idx = Physics.util.sortedIndex( listeners, fn, '_priority_' );

            listeners.splice( idx, 0, fn );
            return this;
        },

        /**
         * Unsubscribe function from topic.
         * @param  {String}   topic Topic name OR true to remove all listeners on all topics
         * @param  {Function} fn The original callback function OR true to remove all listeners
         * @return {this}
         */
        unsubscribe: function( topic, fn ){

            if ( topic === true ){
                this._topics = {};
                return this;
            }

            var listeners = this._topics[ topic ]
                ,listn
                ;

            if (!listeners){
                return this;
            }

            if ( fn === true ){
                this._topics[ topic ] = [];
                return this;
            }

            for ( var i = 0, l = listeners.length; i < l; i++ ){
                
                listn = listeners[ i ];

                if ( listn._bindfn_ === fn || listn === fn ){
                    listeners.splice(i, 1);
                    break;
                }
            }

            return this;
        },

        /**
         * Publish data to a topic
         * @param  {Object|String} data
         * @param  {Object} scope The scope to be included in the data argument passed to callbacks
         * @return {this}
         */
        publish: function( data, scope ){

            if (typeof data !== 'object'){
                data = { topic: data };
            }

            var topic = data.topic
                ,listeners = this._topics[ topic ]
                ,l = listeners && listeners.length
                ;

            if ( !topic ){
                throw 'Error: No topic specified in call to world.publish()';
            }

            if ( !l ){
                return this;
            }
            
            data.scope = data.scope || this._defaultScope;

            while ( l-- ){
                
                data.handler = listeners[ l ];
                data.handler( data );
            }

            return this;
        }
    };
    
    Physics.util.pubsub = PubSub;
})();

// ---
// inside: src/util/request-anim-frame.js

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Moller
// fixes from Paul Irish and Tino Zijdel
 
(function(window) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
 
    if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}(this));

// ---
// inside: src/util/scratchpad.js

/**
 * scratchpad
 * thread-safe management of temporary (voletile)
 * objects for use in calculations
 */
(function(){

    // constants
    var SCRATCH_MAX_SCRATCHES = 100; // maximum number of scratches
    var SCRATCH_MAX_INDEX = 10; // maximum number of any type of temp objects
    var SCRATCH_USAGE_ERROR = 'Error: Scratchpad used after .done() called. (Could it be unintentionally scoped?)';
    var SCRATCH_INDEX_OUT_OF_BOUNDS = 'Error: Scratchpad usage space out of bounds. (Did you forget to call .done()?)';
    var SCRATCH_MAX_REACHED = 'Error: Too many scratchpads created. (Did you forget to call .done()?)';

    // cache previously created scratches
    var scratches = [];
    var numScratches = 0;

    var ScratchCls = function ScratchCls(){

        // private variables
        this.objIndex = 0;
        this.arrayIndex = 0;
        this.vectorIndex = 0;
        this.aabbIndex = 0;
        this.transformIndex = 0;
        this.objectStack = [];
        this.arrayStack = [];
        this.vectorStack = [];
        this.aabbStack = [];
        this.transformStack = [];

        if (++numScratches >= SCRATCH_MAX_SCRATCHES){
            throw SCRATCH_MAX_REACHED;
        }
    };

    ScratchCls.prototype = {

        /**
         * Declare that your work is finished. Release temp objects for use elsewhere. Must be called when immediate work is done.
         */
        done: function(){

            this._active = false;
            this.objIndex = this.arrayIndex = this.vectorIndex = this.aabbIndex = this.transformIndex = 0;
            // add it back to the scratch stack for future use
            scratches.push(this);
        },

        /**
         * Get a temporary object (dirty)
         * @return {Object} The temporary (dirty) object
         */
        object: function(){

            var stack = this.objectStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.objIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.objIndex++ ] || stack[ stack.push({}) - 1 ];
        },

        /**
         * Get a temporary array.
         * @return {Array} Temporary (dirty) array
         */
        array: function(){

            var stack = this.arrayStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.arrIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.arrIndex++ ] || stack[ stack.push([]) - 1 ];
        },

        /**
         * Get a temporary Vector
         * @return {Vector} The temporary (dirty) vector.
         */
        vector: function(){

            var stack = this.vectorStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.vectorIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.vectorIndex++ ] || stack[ stack.push(Physics.vector()) - 1 ];
        },

        /**
         * Get a temporary AABB
         * @return {AABB} The temporary (dirty) AABB
         */
        aabb: function(){

            var stack = this.aabbStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.aabbIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.aabbIndex++ ] || stack[ stack.push(Physics.aabb()) - 1 ];
        },

        /**
         * Get a temporary Transform
         * @return {Transform} The temporary (dirty) transform
         */
        transform: function(){

            var stack = this.transformStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.transformIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.transformIndex++ ] || stack[ stack.push(Physics.transform()) - 1 ];
        }
    };
    
    /**
     * Get a new scratchpad to work from. Call .done() when finished.
     * @return {ScratchCls} The scratchpad
     */
    Physics.scratchpad = function(){

        var scratch = scratches.pop() || new ScratchCls();
        scratch._active = true;
        return scratch;
    };

})();

// ---
// inside: src/util/ticker.js

/**
 * The Ticker singleton for easily binding callbacks to requestAnimationFrame
 */
(function(window){
        
    var lastTime = 0
        ,active = false
        ,listeners = []
        ;

    /**
     * Publish a tick to subscribed callbacks
     * @private
     * @param  {Number} time The current time
     * @return {void}
     */
    function step( time ){

        var fns = listeners;

        if (!active){
            return;
        }

        window.requestAnimationFrame( step );
        
        for ( var i = 0, l = fns.length; i < l; ++i ){
            
            fns[ i ]( time, time - lastTime );
        }

        lastTime = time;
    }

    /**
     * Start the ticker
     * @return {this}
     */
    function start(){
        
        lastTime = (new Date()).getTime();
        active = true;
        step();

        return this;
    }

    /**
     * Stop the ticker
     * @return {this}
     */
    function stop(){

        active = false;
        return this;
    }

    /**
     * Subscribe a callback to the ticker
     * @param  {Function} listener The callback function
     * @return {this}
     */
    function subscribe( listener ){

        // if function and not already in listeners...
        if ( typeof listener === 'function' ){

            for ( var i = 0, l = listeners.length; i < l; ++i ){
                
                if (listener === listeners[ i ]){
                    return this;
                }
            }

            // add it
            listeners.push( listener );
        }
        
        return this;
    }

    /**
     * Unsubscribe a callback from the ticker
     * @param  {Function} listener Original callback added
     * @return {this}
     */
    function unsubscribe( listener ){

        var fns = listeners;

        for ( var i = 0, l = fns.length; i < l; ++i ){
            
            if ( fns[ i ] === listener ){

                // remove it
                fns.splice( i, 1 );
                return this;
            }
        }

        return this;
    }

    /**
     * Determine if ticker is currently running
     * @return {Boolean} True if running
     */
    function isActive(){

        return !!active;
    }

    // API
    Physics.util.ticker = {
        start: start,
        stop: stop,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        isActive: isActive
    };

}(this));

// ---
// inside: src/math/aabb.js

(function(){

    /**
     * Axis Aligned Bounding Box implementation
     * @param {Object|Number} minX Either an object with the aabb values, or the minimum x value
     * @param {Number} minY Minimum y value
     * @param {Number} maxX Maximum x value
     * @param {Number} maxY Maximum y value
     */
    var AABB = function AABB( minX, minY, maxX, maxY ){

        // enforce instantiation
        if ( !(this instanceof AABB) ){

            return new AABB( minX, minY, maxX, maxY );
        }

        this._pos = Physics.vector();
        
        this.set( minX, minY, maxX, maxY );
    };

    /**
     * Set the aabb values
     * @param {Object|Number} minX Either an object with the aabb values, or the minimum x value
     * @param {Number} minY Minimum y value
     * @param {Number} maxX Maximum x value
     * @param {Number} maxY Maximum y value
     * @return {this}
     */
    AABB.prototype.set = function set( minX, minY, maxX, maxY ){

        if ( Physics.util.isObject(minX) ){

            this._pos.clone( minX.pos );
            this._hw = minX.halfWidth;
            this._hh = minX.halfHeight;
            
            return this;
        }

        this._pos.set( 0.5 * (maxX + minX), 0.5 * (maxY + minY) );
        this._hw = 0.5 * (maxX - minX);
        this._hh = 0.5 * (maxY - minY);
        return this;
    };

    /**
     * Get the aabb values as a plain object
     * @return {Object} The aabb values
     */
    AABB.prototype.get = function get(){

        var hw = this.halfWidth()
            ,hh = this.halfHeight()
            ;

        return {
            pos: this._pos.values(),
            halfWidth: hw,
            halfHeight: hh,
            // useful for vector operations
            x: hw,
            y: hh
        };
    };

    /**
     * Get the half-width measurement of the aabb
     * @return {Number} The half-width
     */
    AABB.prototype.halfWidth = function halfWidth(){

        return this._hw;
    };

    /**
     * Get the half-height measurement of the aabb
     * @return {Number} The half-height
     */
    AABB.prototype.halfHeight = function halfHeight(){

        return this._hh;
    };

    /**
     * Check if point is inside bounds
     * @param  {Vectorish} pt The point to check
     * @return {Boolean}    True if point is inside aabb
     */
    AABB.prototype.contains = function contains( pt ){

        var x = pt.x !== undefined ? pt.x : pt.get(0)
            ,y = pt.y !== undefined ? pt.y : pt.get(1)
            ;

        return  (x > (this._pos.get(0) - this._hw)) && 
                (x < (this._pos.get(0) + this._hw)) &&
                (y > (this._pos.get(1) - this._hh)) &&
                (y < (this._pos.get(1) + this._hh));
    };

    /**
     * Apply a transformation to the aabb.
     * Rotation origin is relative to the aabb's center.
     * @param  {Transform} trans The transformation
     * @return {this}
     */
    AABB.prototype.transform = function transform( trans ){

        var hw = this._hw
            ,hh = this._hh
            ,scratch = Physics.scratchpad()
            ,bottomRight = scratch.vector().set( hw, hh )
            ,topRight = scratch.vector().set( hw, -hh )
            ;

        // translate the center
        this._pos.translate( trans );

        // rotate the corners
        bottomRight.rotate( trans );
        topRight.rotate( trans );

        // we need to keep the box oriented with the axis, but expand it to
        // accomodate the rotation
        this._hw = Math.max( Math.abs(bottomRight.get(0)), Math.abs(topRight.get(0)) );
        this._hh = Math.max( Math.abs(bottomRight.get(1)), Math.abs(topRight.get(1)) );

        scratch.done();
        return this;
    };

    // Static methods
    /**
     * Check if a point is inside an aabb
     * @param  {AABB|Object} aabb The aabb instance or aabb values
     * @param  {Vectorish} pt   The point to check
     * @return {Boolean}      True if point is inside aabb
     */
    AABB.contains = function( aabb, pt ){

        var x = pt.x !== undefined ? pt.x : pt.get(0)
            ,y = pt.y !== undefined ? pt.y : pt.get(1)
            ;

        aabb = aabb.get ? aabb.get() : aabb;

        return  (x > (aabb.pos.x - aabb.halfWidth)) && 
                (x < (aabb.pos.x + aabb.halfWidth)) &&
                (y > (aabb.pos.y - aabb.halfHeight)) &&
                (y < (aabb.pos.y + aabb.halfHeight));
    };

    Physics.aabb = AABB;
}());

// ---
// inside: src/math/gjk.js

/**
 * Gilbert–Johnson–Keerthi object collison algorithm
 * For general information about GJK see: 
 *  - http://www.codezealot.org/archives/88
 *  - http://mollyrocket.com/849
 */
(function(){

    // the algorithm doesn't always converge for curved shapes.
    // need these constants to dictate how accurate we want to be.
    var gjkAccuracy = 0.0001;
    var gjkMaxIterations = 100;

    // get the next search direction from two simplex points
    var getNextSearchDir = function getNextSearchDir( ptA, ptB, dir ){

        var ABdotB = ptB.normSq() - ptB.dot( ptA )
            ,ABdotA = ptB.dot( ptA ) - ptA.normSq()
            ;

        // if the origin is farther than either of these points
        // get the direction from one of those points to the origin
        if ( ABdotB < 0 ){

            return dir.clone( ptB ).negate();

        } else if ( ABdotA > 0 ){

            return dir.clone( ptA ).negate();

        // otherwise, use the perpendicular direction from the simplex
        } else {

            // dir = AB = B - A
            dir.clone( ptB ).vsub( ptA );
            // if (left handed coordinate system) 
            // A cross AB < 0 then get perpendicular counter clockwise 
            return dir.perp( (ptA.cross( dir ) < 0) );
        }
    };

    /**
     * Figure out the closest points on the original objects
     * from the last two entries of the simplex
     * @param  {Array} simplex
     * @return {Object}
     */
    var getClosestPoints = function getClosestPoints( simplex ){

        // see http://www.codezealot.org/archives/153
        // for algorithm details

        // we know that the position of the last point 
        // is very close to the previous. (by nature of the distance test)
        // this won't give great results for the closest
        // points algorithm, so let's use the previous two
        var len = simplex.length
            ,last = simplex[ len - 2 ]
            ,prev = simplex[ len - 3 ]
            ,scratch = Physics.scratchpad()
            ,A = scratch.vector().clone( last.pt )
            // L = B - A
            ,L = scratch.vector().clone( prev.pt ).vsub( A )
            ,lambdaB
            ,lambdaA
            ;

        if ( L.equals(Physics.vector.zero) ){

            // oh.. it's a zero vector. So A and B are both the closest.
            // just use one of them
            scratch.done();
            return {

                a: last.a,
                b: last.b
            };
        }

        lambdaB = - L.dot( A ) / L.normSq();
        lambdaA = 1 - lambdaB;

        if ( lambdaA <= 0 ){
            // woops.. that means the closest simplex point
            // isn't on the line it's point B itself
            scratch.done();
            return {
                a: prev.a,
                b: prev.b
            };
        } else if ( lambdaB <= 0 ){
            // vice versa
            scratch.done();
            return {
                a: last.a,
                b: last.b
            };
        }

        // guess we'd better do the math now...
        var ret = {
            // a closest = lambdaA * Aa + lambdaB * Ba
            a: A.clone( last.a ).mult( lambdaA ).vadd( L.clone( prev.a ).mult( lambdaB ) ).values(),
            // b closest = lambdaA * Ab + lambdaB * Bb
            b: A.clone( last.b ).mult( lambdaA ).vadd( L.clone( prev.b ).mult( lambdaB ) ).values()
        };

        scratch.done();
        return ret;
    };

    /**
     * Implementation agnostic GJK function.
     * @param  {Function} support The support function. Must return an object containing 
     *                            the witness points (.a, .b) and the support point (.pt).
     *                            Recommended to use simple objects. Eg: return { a: {x: 1, y:2}, b: {x: 3, y: 4}, pt: {x: 2, y: 2} }
     *                            Signature: function(<Physics.vector> axis).
     *                            axis: The axis to use
     * @param {Physics.vector} seed The starting direction for the simplex
     * @return {Object} The algorithm information containing properties: .overlap (bool), and .simplex (Array)
     */
    var gjk = function gjk( support, seed, checkOverlapOnly, debugFn ){

        var overlap = false
            ,noOverlap = false // if we're sure we're not overlapping
            ,distance = false
            ,simplex = []
            ,simplexLen = 1
            // setup a scratchpad of temporary cheap objects
            ,scratch = Physics.scratchpad()
            // use seed as starting direction or use x axis
            ,dir = scratch.vector().clone(seed || Physics.vector.axis[ 0 ])
            ,last = scratch.vector()
            ,lastlast = scratch.vector()
            // some temp vectors
            ,v1 = scratch.vector()
            ,v2 = scratch.vector()
            ,ab
            ,ac
            ,sign
            ,tmp
            ,iterations = 0
            ;

        // get the first Minkowski Difference point
        tmp = support( dir );
        simplexLen = simplex.push( tmp );
        last.clone( tmp.pt );
        // negate d for the next point
        dir.negate();

        // start looping
        while ( ++iterations ) {

            // swap last and lastlast, to save on memory/speed
            last.swap(lastlast);
            // push a new point to the simplex because we haven't terminated yet
            tmp = support( dir );
            simplexLen = simplex.push( tmp );
            last.clone( tmp.pt );

            if ( debugFn ){
                debugFn( simplex );
            }

            if ( last.equals(Physics.vector.zero) ){
                // we happened to pick the origin as a support point... lucky.
                overlap = true;
                break;
            }
            
            // check if the last point we added actually passed the origin
            if ( !noOverlap && last.dot( dir ) <= 0.0 ) {
                // if the point added last was not past the origin in the direction of d
                // then the Minkowski difference cannot possibly contain the origin since
                // the last point added is on the edge of the Minkowski Difference

                // if we just need the overlap...
                if ( checkOverlapOnly ){
                    break;
                }

                noOverlap = true;
            }

            // if it's a line...
            if ( simplexLen === 2 ){

                // otherwise we need to determine if the origin is in
                // the current simplex and act accordingly

                dir = getNextSearchDir( last, lastlast, dir );
                // continue...

            // if it's a triangle... and we're looking for the distance
            } else if ( noOverlap ){

                // if we know there isn't any overlap and
                // we're just trying to find the distance...
                // make sure we're getting closer to the origin
                dir.normalize();
                tmp = lastlast.dot( dir );
                if ( Math.abs(tmp - last.dot( dir )) < gjkAccuracy ){

                    distance = -tmp;
                    break;
                }

                // if we are still getting closer then only keep
                // the points in the simplex that are closest to
                // the origin (we already know that last is closer
                // than the previous two)
                // the norm is the same as distance(origin, a)
                // use norm squared to avoid the sqrt operations
                if (lastlast.normSq() < v1.clone(simplex[ 0 ].pt).normSq()) {
                    
                    simplex.shift();

                } else {
                    
                    simplex.splice(1, 1);
                }

                dir = getNextSearchDir( v1.clone(simplex[ 1 ].pt), v2.clone(simplex[ 0 ].pt), dir );
                // continue...

            // if it's a triangle
            } else {

                // we need to trim the useless point...

                ab = ab || scratch.vector();
                ac = ac || scratch.vector();

                // get the edges AB and AC
                ab.clone( lastlast ).vsub( last );
                ac.clone( simplex[ 0 ].pt ).vsub( last );

                // here normally people think about this as getting outward facing
                // normals and checking dot products. Since we're in 2D
                // we can be clever...
                sign = ab.cross( ac ) > 0;
                
                if ( sign ^ (last.cross( ab ) > 0) ){

                    // ok... so there's an XOR here... don't freak out
                    // remember last = A = -AO
                    // if AB cross AC and AO cross AB have the same sign
                    // then the origin is along the outward facing normal of AB
                    // so if AB cross AC and A cross AB have _different_ (XOR) signs
                    // then this is also the case... so we proceed...

                    // point C is dead to us now...
                    simplex.shift();

                    // if we haven't deduced that we've enclosed the origin
                    // then we know which way to look...
                    // morph the ab vector into its outward facing normal
                    ab.perp( sign );
                    
                    // swap
                    dir.swap( ab );
                    
                    // continue...

                    // if we get to this if, then it means we can continue to look along
                    // the other outward normal direction (ACperp)
                    // if we don't see the origin... then we must have it enclosed
                } else if ( sign ^ (ac.cross( last ) > 0) ){
                    // then the origin is along the outward facing normal 
                    // of AC; (ACperp)

                    // point B is dead to us now...
                    simplex.splice(1, 1);

                    ac.perp( !sign );
                    
                    // swap
                    dir.swap( ab );
                    
                    // continue...

                } else {

                    // we have enclosed the origin!
                    overlap = true;
                    // fewf... take a break
                    break;
                }
            }

            // woah nelly... that's a lot of iterations.
            // Stop it!
            if (iterations > gjkMaxIterations){
                scratch.done();
                return {
                    simplex: simplex,
                    iterations: iterations,
                    distance: 0,
                    maxIterationsReached: true
                };
            }
        }

        // free workspace
        scratch.done();

        tmp = {
            overlap: overlap,
            simplex: simplex,
            iterations: iterations
        };

        if ( distance !== false ){

            tmp.distance = distance;
            tmp.closest = getClosestPoints( simplex );
        }

        return tmp;
    };

    Physics.gjk = gjk;

})();

// ---
// inside: src/math/transform.js

(function(){
    
    /**
     * Vector Transformations class for rotating and translating vectors
     * @class Transform
     */

    /**
     * Transform Constructor / Factory
     * @param {Physics.vector|Physics.transform} vect (optional) vector to use for translation or a transform to copy
     * @param {Number} angle (optional) Angle (radians) to use for rotation
     * @param {Vectorish} origin (optional) Origin of the rotation
     */
    var Transform = function Transform( vect, angle, origin ) {

        if (!(this instanceof Transform)){
            return new Transform( vect, angle );
        }

        this.v = Physics.vector();
        this.o = Physics.vector(); // origin of rotation
        
        if ( vect instanceof Transform ){

            this.clone( vect );
            return;
        }

        if (vect){
            this.setTranslation( vect );
        }

        this.setRotation( angle || 0, origin );
    };

    /**
     * Set the translation portion of the transform
     * @param {Physics.vector} vect
     */
    Transform.prototype.setTranslation = function( vect ){

        this.v.clone( vect );
        return this;
    };

    /**
     * Set the rotation portion of the transform
     * @param {Number} angle
     * @param {Vectorish} origin (optional) Origin of the rotation
     */
    Transform.prototype.setRotation = function( angle, origin ){

        this.cosA = Math.cos( angle );
        this.sinA = Math.sin( angle );

        if ( origin ){
            this.o.clone( origin );
        } else {
            this.o.zero();
        }

        return this;
    };

    /**
     * Clone another transform. Or clone self into new transform.
     * @param  {Physics.transform} t (optional) the transform to clone
     * @return {Physics.transform|this}
     */
    Transform.prototype.clone = function( t ){

        if ( t ){

            this.setTranslation( t.v );
            this.cosA = t.cosA;
            this.sinA = t.sinA;
            this.o.clone( t.o );

            return this;
        }

        return new Transform( this );
    };

    Physics.transform = Transform;

})();

// ---
// inside: src/math/vector.js

(function(window){

    // http://jsperf.com/vector-storage-test/2

    // cached math functions
    // TODO: might be faster not to do this???
    var sqrt = Math.sqrt
        ,min = Math.min
        ,max = Math.max
        ,acos = Math.acos
        ,atan2 = Math.atan2
        ,TWOPI = Math.PI * 2
        ,typedArrays = !!window.Float64Array
        ;

    /**
     * Vector Constructor / Factory
     * @param {Number|Physics.vector} x (optional) Either the x coord. Or a vector to copy.
     * @param {Number} y (optional) The y coord.
     */
    var Vector = function Vector(x, y) {

        // enforce instantiation
        if ( !(this instanceof Vector) ){

            return new Vector( x, y );
        }

        // arrays to store values
        // x = _[0]
        // y = _[1]
        // norm = _[3]
        // normsq = _[4]
        

        if (typedArrays){
            this._ = new Float64Array(5);
        } else {
            this._ = [];
        }

        if (x && (x.x !== undefined || x._ && x._.length)){

            this.clone( x );

        } else {

            this.recalc = true; //whether or not recalculate norms
            this.set( x || 0.0, y || 0.0 );
        }
    };

    /**
     * Methods
     */

    /**
     * Sets the components of this Vector.
     */
    Vector.prototype.set = function(x, y) {

        this.recalc = true;

        this._[0] = x || 0.0;
        this._[1] = y || 0.0;
        return this;
    };

    /**
     * Get component
     * @param  {Integer} n The nth component. x is 1, y is 2, ...
     * @return {Integer} component value
     */
    Vector.prototype.get = function( n ){

        return this._[ n ];
    };

    /**
     * Add Vector to this
     */
    Vector.prototype.vadd = function(v) {

        this.recalc = true;

        this._[0] += v._[0];
        this._[1] += v._[1];
        return this;
    };

    /**
     * Subtract Vector from this
     */
    Vector.prototype.vsub = function(v) {

        this.recalc = true;

        this._[0] -= v._[0];
        this._[1] -= v._[1];
        return this;
    };

    /**
     * Add scalars to Vector's components
     */
    Vector.prototype.add = function(x, y){
        
        this.recalc = true;

        this._[0] += x;
        this._[1] += y === undefined? x : y;
        return this;
    };

    /**
     * Subtract scalars to Vector's components
     */
    Vector.prototype.sub = function(x, y){
        
        this.recalc = true;

        this._[0] -= x;
        this._[1] -= y === undefined? x : y;
        return this;
    };

    /* 
     * Multiply by a scalar
     */
    Vector.prototype.mult = function(m) {
        
        if ( !this.recalc ){

            this._[4] *= m * m;
            this._[3] *= m;
        }

        this._[0] *= m;
        this._[1] *= m;
        return this;
    };

    /* 
     * Get the dot product
     */
    Vector.prototype.dot = function(v) {

        return (this._[0] * v._[0]) + (this._[1] * v._[1]);
    };

    /** 
     * Get the cross product (in a left handed coordinate system)
     */
    Vector.prototype.cross = function(v) {

        return ( - this._[0] * v._[1]) + (this._[1] * v._[0]);
    };

    /**
     * Scalar projection of this along v
     */
    Vector.prototype.proj = function(v){

        return this.dot( v ) / v.norm();
    };


    /**
     * Vector project this along v
     */
    Vector.prototype.vproj = function(v){

        var m = this.dot( v ) / v.normSq();
        return this.clone( v ).mult( m );
    };

    /**
     * Angle between this and vector. Or this and x axis.
     * @param  {Vector} v (optional) other vector
     * @return {Number} Angle in radians
     */
    Vector.prototype.angle = function(v){

        var ang;

        if ( this.equals( Vector.zero ) ){
            
            if ( v ){
                return v.angle();
            } else {
                return NaN;
            }

        } else {

            if ( v && !v.equals( Vector.zero ) ){
                ang = atan2( this._[1] * v._[0] - this._[0] * v._[1], this._[0] * v._[0] + this._[1] * v._[1]);
            } else {
                ang = atan2( this._[ 1 ], this._[ 0 ] );    
            }
        }
        
        while (ang > Math.PI){
            ang -= TWOPI;
        }

        while (ang < -Math.PI){
            ang += TWOPI;
        }

        return ang;
    };

    /**
     * Angle created between three points; left -> this -> right.
     * @param  {Vector} v (optional) other vector
     * @return {Number} Angle in radians
     */
    Vector.prototype.angle2 = function( left, right ){

        var x1 = left._[0] - this._[0]
            ,y1 = left._[1] - this._[1]
            ,x2 = right._[0] - this._[0]
            ,y2 = right._[1] - this._[1]
            ,ang = atan2( y1 * x2 - x1 * y2, x1 * x2 + y1 * y2)
            ;

        while (ang > Math.PI){
            ang -= TWOPI;
        }

        while (ang < -Math.PI){
            ang += TWOPI;
        }

        return ang;
    };

    /**
     * Get the norm (length)
     */
    Vector.prototype.norm = function() {

        if (this.recalc){
            this.recalc = false;
            this._[4] = (this._[0] * this._[0] + this._[1] * this._[1]);
            this._[3] = sqrt( this._[4] );
        }
        
        return this._[3];
    };

    /**
     * Get the norm squared
     */
    Vector.prototype.normSq = function() {

        if (this.recalc){
            this.recalc = false;
            this._[4] = (this._[0] * this._[0] + this._[1] * this._[1]);
            this._[3] = sqrt( this._[4] );
        }

        return this._[4];
    };

    /** 
     * Get distance to other Vector
     */
    Vector.prototype.dist = function(v) {
      
        var dx, dy;
        return sqrt(
            (dx = (v._[0] - this._[0])) * dx + 
            (dy = (v._[1] - this._[1])) * dy
        );
    };

    /**
     * Get distance squared to other Vector
     */
    Vector.prototype.distSq = function(v) {

        var dx, dy;
        return (
            (dx = (v._[0] - this._[0])) * dx + 
            (dy = (v._[1] - this._[1])) * dy
        );
    };

    /**
     * Change vector into a vector perpendicular
     * @param {Boolean} neg Set to true if want to go in the negative direction
     * @return {this}
     */
    Vector.prototype.perp = function( neg ) {

        var tmp = this._[0]
            ;

        if ( neg ){

            // x <-> y
            // negate x
            this._[0] = -this._[1];
            this._[1] = tmp;
            
        } else {

            // x <-> y
            // negate y
            this._[0] = this._[1];
            this._[1] = -tmp;
        }

        return this;
    };

    /**
     * Normalises this Vector, making it a unit Vector
     */
    Vector.prototype.normalize = function() {

        var m = this.norm();

        // means it's a zero Vector
        if ( m === 0 ){
            return this;
        }

        m = 1/m;

        this._[0] *= m;
        this._[1] *= m;

        this._[3] = 1.0;
        this._[4] = 1.0;

        return this;
    };

    /**
     * Apply a transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.transform = function( t ){

        var sinA = t.sinA
            ,cosA = t.cosA
            ,x = t.o._[ 0 ]
            ,y = t.o._[ 1 ]
            ;

        this._[ 0 ] -= x;
        this._[ 1 ] -= y;

        // rotate about origin "o" then translate
        return this.set(
            this._[ 0 ] * cosA - this._[ 1 ] * sinA + x + t.v._[ 0 ], 
            this._[ 0 ] * sinA + this._[ 1 ] * cosA + y + t.v._[ 1 ]
        );
    };

    /**
     * Apply an inverse transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.transformInv = function( t ){

        var sinA = t.sinA
            ,cosA = t.cosA
            ,x = t.o._[ 0 ]
            ,y = t.o._[ 1 ]
            ;

        this._[ 0 ] -= x + t.v._[ 0 ];
        this._[ 1 ] -= y + t.v._[ 1 ];

        // inverse translate then inverse rotate about origin "o"
        return this.set(
            this._[ 0 ] * cosA + this._[ 1 ] * sinA + x, 
            - this._[ 0 ] * sinA + this._[ 1 ] * cosA + y
        );
    };

    /**
     * Apply the rotation portion of transform to this vector
     * @param  {Physics.transform|Number} t The transform OR a number representing the angle to rotate by
     * @param  {Vector} o If number is specified for rotation angle, then this is a vector representing the rotation origin
     */
    Vector.prototype.rotate = function( t, o ){

        var sinA
            ,cosA
            ,x = 0
            ,y = 0
            ;

        if ( typeof t === 'number' ){
            sinA = Math.sin( t );
            cosA = Math.cos( t );

            if ( o ){
                x = (o.x || o._[ 0 ]) | 0;
                y = (o.y || o._[ 1 ]) | 0;
            }
        } else {
            sinA = t.sinA;
            cosA = t.cosA;
        
            x = t.o._[ 0 ];
            y = t.o._[ 1 ];
        }
            
        this._[ 0 ] -= x;
        this._[ 1 ] -= y;

        return this.set(
            this._[ 0 ] * cosA - this._[ 1 ] * sinA + x, 
            this._[ 0 ] * sinA + this._[ 1 ] * cosA + y
        );
    };

    /**
     * Apply an inverse rotation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.rotateInv = function( t ){

        return this.set(
            (this._[ 0 ] - t.o._[ 0 ]) * t.cosA + (this._[ 1 ] - t.o._[ 1 ]) * t.sinA + t.o._[ 0 ], 
            -(this._[ 0 ] - t.o._[ 0 ]) * t.sinA + (this._[ 1 ] - t.o._[ 1 ]) * t.cosA + t.o._[ 1 ]
        );
    };

    /**
     * Apply the translation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.translate = function( t ){

        return this.vadd( t.v );
    };

    /**
     * Apply an inverse translation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.translateInv = function( t ){

        return this.vsub( t.v );
    };


    /**
     * Returns clone of current Vector
     * Or clones provided Vector to this one
     */
    Vector.prototype.clone = function(v) {
        
        // http://jsperf.com/vector-storage-test

        if (v){

            if (!v._){

                return this.set( v.x, v.y );
            }
            
            this.recalc = v.recalc;

            if (!v.recalc){
                this._[3] = v._[3];
                this._[4] = v._[4];
            }

            this._[0] = v._[0];
            this._[1] = v._[1];

            return this;
        }

        return new Vector( this );
    };

    /**
     * Swap values with other vector
     * @param  {Vector} v
     * @return {this}
     */
    Vector.prototype.swap = function(v){

        var _ = this._;
        this._ = v._;
        v._ = _;

        _ = this.recalc;
        this.recalc = v.recalc;
        v.recalc = _;
        return this;
    };

    /**
     * Create a litteral object
     */
    Vector.prototype.values = function(){

        return {
            x: this._[0],
            y: this._[1]
        };
    };


    /**
     * Zero the Vector
     */
    Vector.prototype.zero = function() {

        this._[3] = 0.0;
        this._[4] = 0.0;

        this._[0] = 0.0;
        this._[1] = 0.0;
        return this;
    };

    /**
     * Make this a Vector in the opposite direction
     */
    Vector.prototype.negate = function( component ){

        if (component !== undefined){

            this._[ component ] = -this._[ component ];
            return this;
        }

        this._[0] = -this._[0];
        this._[1] = -this._[1];
        return this;
    };

    /**
     * Constrain Vector components to minima and maxima
     */
    Vector.prototype.clamp = function(minV, maxV){

        minV = minV.values ? minV.values() : minV;
        maxV = maxV.values ? maxV.values() : maxV;

        this._[0] = min(max(this._[0], minV.x), maxV.x);
        this._[1] = min(max(this._[1], minV.y), maxV.y);
        this.recalc = true;
        return this;
    };
	
    /**
     * HACK - Locks the axes of this vector to ranges
	 * @param {Object} Ex: { x: 10 } will lock the x axis of this vector to a range of size 10 around the current x value
     */
	var vFns = ['set', 'add', 'vadd', 'sub', 'vsub', 'mult', 'perp', 'clone', 'zero', 'negate', 'clamp'];
	Vector.prototype.lock = function(lock) {
		var self = this,
			origX = this.get(0),
			origY = this.get(1),
			lockX = lock.hasOwnProperty('x'),
			lockY = lock.hasOwnProperty('y'),
			xMin = lockX ? origX - lock.x / 2 : -Infinity,
			xMax = lockX ? origX + lock.x / 2 : Infinity,
			yMin = lockY ? origY - lock.y / 2 : -Infinity,
			yMax = lockY ? origY + lock.y / 2 : Infinity;			
		
		vFns.forEach(function(fn) {
			var orig = self[fn];
			self[fn] = function() {
				try {
					return orig.apply(this, arguments);
				} finally {
					this._[0] = max(min(this._[0], xMax), xMin);
					this._[1] = max(min(this._[1], yMax), yMin);
					this.recalc = true;
				};
			};
		});
	};
	
    /**
     * HACK - Unlocks the axes of this vector
     */
	Vector.prototype.unlock = function() {
		var self = this;
		vFns.forEach(function(fn) {
			self[fn] = Vector.prototype[fn];
		});
	};

    /**
     * Render string
     */
    Vector.prototype.toString = function(){

        return '('+this._[0] + ', ' + this._[1]+')';
    };


    /**
     * Determine if equal
     * @param  {Vector} v
     * @return {boolean}
     */
    Vector.prototype.equals = function(v){

        return this._[0] === v._[0] &&
            this._[1] === v._[1] &&
            this._[2] === v._[2];
    };


    /**
     * Static functions
     */

    /** 
     * Return sum of two Vectors
     */
    Vector.vadd = function(v1, v2) {

        return new Vector( v1._[0] + v2._[0], v1._[1] + v2._[1] );
    };

    /** 
     * Subtract v2 from v1
     */
    Vector.vsub = function(v1, v2) {

        return new Vector( v1._[0] - v2._[0], v1._[1] - v2._[1] );
    };

    /**
     * Multiply v1 by a scalar m
     */
    Vector.mult = function(m, v1){

        return new Vector( v1._[0]*m, v1._[1]*m );
    };

    /** 
     * Project v1 onto v2
     */
    Vector.vproj = function(v1, v2) {

        return Vector.mult( v1.dot(v2) / v2.normSq(), v2 );
    };

    /**
     * Axis vectors for general reference
     * @type {Array}
     */
    Vector.axis = [
        new Vector(1.0, 0.0),
        new Vector(0.0, 1.0)
    ];

    /**
     * Zero vector for reference
     */
    Vector.zero = new Vector(0, 0);

    // assign
    Physics.vector = Vector;

}(this)); // end Vector class


// ---
// inside: src/core/behavior.js

(function(){

    // Service
    Physics.behavior = Physics.behaviour = Decorator('behavior', {

        /**
         * Priority for behavior pubsub event
         * @type {Number}
         */
        priority: 0,

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function(){
            
            this.options = {};
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            if (this.behave){
                world.subscribe('integrate:positions', this.behave, this, this.priority);
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            if (this.behave){
                world.unsubscribe('integrate:positions', this.behave);
            }
        },

        /**
         * Default method run on every world integration
         * @abstract
         * @param  {Object} data Object containing event data, including: data.bodies = Array of world bodies to act on, data.dt = the timestep size
         * @return {void}
         */
        behave: null
    });

}());

// ---
// inside: src/core/body.js

(function(){

    var defaults = {

        // is the body fixed and imovable?
        fixed: false,
        // body mass
        mass: 1.0,
        // body restitution. How "bouncy" is it?
        restitution: 1.0,
        // what is its coefficient of friction with another surface with COF = 1?
        cof: 0.8,
        // what is the view object (mixed) that should be used when rendering?
        view: null
    };

    Physics.body = Decorator('body', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            var vector = Physics.vector;

            this.options = Physics.util.extend({}, defaults, options);

            // properties
            this.fixed = this.options.fixed;
            this.hidden = this.options.hidden;
            this.mass = this.options.mass;
            this.restitution = this.options.restitution;
            this.cof = this.options.cof;

            // placeholder for renderers
            this.view = this.options.view;

            // physical properties
            this.state = {
                pos: vector( options.x, options.y ),
                vel: vector( options.vx, options.vy ),
                acc: vector(),
                angular: {
                    pos: options.angle || 0.0,
                    vel: options.angularVelocity || 0.0,
                    acc: 0.0
                },
                old: {
                    pos: vector(),
                    vel: vector(),
                    acc: vector(),
                    angular: {
                        pos: 0.0,
                        vel: 0.0,
                        acc: 0.0
                    }
                },
				// last rendered - we may not want to render as precisely as we calculate
				rendered: {
                    pos: vector(),
                    vel: vector(),
                    acc: vector(),
                    angular: {
                        pos: 0.0,
                        vel: 0.0,
                        acc: 0.0
                    }
                }
            };

            if (this.mass === 0){
                throw "Error: Bodies must have non-zero mass";
            }

            // shape
            this.geometry = Physics.geometry('point');
        },

        /**
         * Accelerate the body by adding supplied vector to its current acceleration
         * @param  {Vector} acc The acceleration vector
         * @return {this}
         */
        accelerate: function( acc ){

            this.state.acc.vadd( acc );
            return this;
        },

        /**
         * Apply a force at center of mass, or at point "p" relative to the center of mass
         * @param  {Vector} force The force vector
         * @param  {Vector} p     (optional) The point vector from the COM at which to apply the force
         * @return {this}
         */
        applyForce: function( force, p ){

            var scratch = Physics.scratchpad()
                ,r = scratch.vector()
                ,state
                ;
                
            // if no point at which to apply the force... apply at center of mass
            if ( !p ){
                
                this.accelerate( r.clone( force ).mult( 1/this.mass ) );

            } else if ( this.moi ) {

                // apply torques
                state = this.state;
                r.clone( p );
                // r cross F
                this.state.angular.acc -= r.cross( force ) / this.moi;
                // projection of force towards center of mass
                this.applyForce( force );

            }

            scratch.done();

            return this;
        },

        /**
         * Get the Axis aligned bounding box for the body in its current position and rotation
         * @return {Object} The aabb values
         */
        aabb: function(){

            var scratch = Physics.scratchpad()
                ,trans = scratch.transform()
                ,angle = this.state.angular.pos
                ,aabb = scratch.aabb().set( this.geometry.aabb( angle ) )
                ;

            trans.setRotation( 0 ).setTranslation(this.state.pos);
            aabb.transform( trans );

            aabb = aabb.get();
            scratch.done();
            return aabb;
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @abstract
         * @return {this}
         */
        recalc: function(){
            // override to recalculate properties
        },
		
        /**
         * Get / set boolean that says whether this body has ever been rendered before
         * @param val {Boolean} if true, marks this body as rendered, if false, marks this body as not rendered, if undefined, doesn't change rendered status
         * @return {this}
         */
		rendered: function(val) {
            if ( val !== undefined ){
                this._rendered = val;
            }

            return !!this._rendered;
        }
    });

}());

// ---
// inside: src/core/geometry.js

(function(){

    Physics.geometry = Decorator('geometry', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            this._aabb = new Physics.aabb();
        },
        
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            return this._aabb.get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result ){

            result = result || Physics.vector();

            // not implemented.
            return result.set( 0, 0 );
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            result = result || Physics.vector();

            // not implemented.
            return result.set( 0, 0 );
        }
    });

}());

// ---
// inside: src/core/geometry-helpers.js

/**
 * Geometry helper functions
 */

/**
 * Determine if polygon hull is convex
 * @param  {Array}  hull Array of vertices (Vectorish)
 * @return {Boolean}
 */
Physics.geometry.isPolygonConvex = function( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,tmp = scratch.vector()
        ,ret = true
        ,sign = false
        ,l = hull.length
        ;

    if ( !hull || !l ){
        return false;
    }

    if ( l < 3 ){
        // it must be a point or a line...
        // which are convex
        scratch.done();
        return ret;
    }

    prev.clone( hull[ 0 ] ).vsub( tmp.clone( hull[ l - 1 ] ) );

    // loop over the edges of the hull and construct vectors of the current
    // edge and retain the last edge
    // add two to the length to do a full cycle
    for ( var i = 1; i <= l; ++i ){
        
        next.clone( hull[ i % l ] ).vsub( tmp.clone( hull[ (i - 1) % l ] ) );

        if ( sign === false ){

            // first check the sign of the first cross product
            sign = prev.cross( next );

        } else if ( (sign > 0) ^ (prev.cross( next ) > 0) ){
        
            // if the cross products are different signs it's not convex
            ret = false;
            break;
        }

        // remember the last edge
        next.swap( prev );
    }

    scratch.done();
    return ret;
};

/**
 * Gets the moment of inertia of a convex polygon
 * @see: http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 * assumptions: 
 *  * mass is unitary
 *  * axis of rotation is the origin
 * @param  {Array} hull Array of vertices (vectorish)
 * @return {Number} The polygon MOI
 */
Physics.geometry.getPolygonMOI = function( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,num = 0
        ,denom = 0
        ,tmp
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it must be a point
        // moi = 0
        scratch.done();
        return 0;
    }

    if ( l === 2 ){
        // it's a line
        // get length squared
        tmp = next.clone( hull[ 1 ] ).distSq( prev.clone( hull[ 0 ] ) );
        scratch.done();
        return tmp / 12;
    }

    prev.clone( hull[ 0 ] );

    for ( var i = 1; i < l; ++i ){
        
        next.clone( hull[ i ] );

        tmp = Math.abs( next.cross( prev ) );
        num += tmp * ( next.normSq() + next.dot( prev ) + prev.normSq() );
        denom += tmp;

        prev.swap( next );
    }

    scratch.done();
    return num / ( 6 * denom );
};

/**
 * Check if point is inside polygon hull
 * @param  {Vectorish}  pt
 * @param  {Array}  hull Array of vertices (Vectorish)
 * @return {Boolean}
 */
Physics.geometry.isPointInPolygon = function( pt, hull ){

    var scratch = Physics.scratchpad()
        ,point = scratch.vector().clone( pt )
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ang = 0
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it's a point...
        ang = point.equals( prev.clone( hull[ 0 ] ));
        scratch.done();
        return ang;
    }

    if ( l === 2 ){
        // it's a line
        ang = point.angle( prev.clone( hull[ 0 ] ));
        ang += point.angle( prev.clone( hull[ 1 ] ));
        scratch.done();
        return ( Math.abs(ang) === Math.PI );
    }

    prev.clone( hull[ 0 ] ).vsub( point );

    // calculate the sum of angles between vector pairs
    // from point to vertices
    for ( var i = 1; i <= l; ++i ){
        
        next.clone( hull[ i % l ] ).vsub( point );
        ang += next.angle( prev );
        prev.swap( next );
    }

    scratch.done();
    return ( Math.abs(ang) > 1e-6 );
};

/**
 * Get the signed area of the polygon
 * @param  {Array} hull Array of vertices
 * @return {Number} Area (positive for clockwise ordering)
 */
Physics.geometry.getPolygonArea = function getPolygonArea( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ret = 0
        ,l = hull.length
        ;

    if ( l < 3 ){
        // it must be a point or a line
        // area = 0
        scratch.done();
        return 0;
    }

    prev.clone( hull[ l - 1 ] );

    for ( var i = 0; i < l; ++i ){
        
        next.clone( hull[ i ] );

        ret += prev.cross( next );

        prev.swap( next );
    }

    scratch.done();
    return ret / 2;
};

/**
 * Get the coordinates of the centroid
 * @param  {Array} hull Polygon hull definition
 * @return {Vector} centroid
 */
Physics.geometry.getPolygonCentroid = function getPolygonCentroid( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ret = Physics.vector()
        ,tmp
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it must be a point
        scratch.done();
        return Physics.vector( hull[0] );
    }

    if ( l === 2 ){
        // it's a line
        // get the midpoint
        scratch.done();
        return Physics.vector((hull[ 1 ].x + hull[ 0 ].x)/2, (hull[ 1 ].y + hull[ 0 ].y)/2 );
    }

    prev.clone( hull[ l - 1 ] );

    for ( var i = 0; i < l; ++i ){
        
        next.clone( hull[ i ] );

        tmp = prev.cross( next );
        prev.vadd( next ).mult( tmp );
        ret.vadd( prev );

        prev.swap( next );
    }

    tmp = 1 / (6 * Physics.geometry.getPolygonArea( hull ));

    scratch.done();
    return ret.mult( tmp );
};

/**
 * Get the closest point on a discrete line to specified point.
 * @param  {Vectorish} pt The point
 * @param  {Vectorish} linePt1 The first endpoint of the line
 * @param  {Vectorish} linePt2 The second endpoint of the line
 * @return {Vector} The closest point
 */
Physics.geometry.nearestPointOnLine = function nearestPointOnLine( pt, linePt1, linePt2 ){

    var scratch = Physics.scratchpad()
        ,p = scratch.vector().clone( pt )
        ,A = scratch.vector().clone( linePt1 ).vsub( p )
        ,L = scratch.vector().clone( linePt2 ).vsub( p ).vsub( A )
        ,lambdaB
        ,lambdaA
        ;

    if ( L.equals(Physics.vector.zero) ){
        // oh.. it's a zero vector. So A and B are both the closest.
        // just use one of them
        scratch.done();
        return Physics.vector( linePt1 );
    }

    lambdaB = - L.dot( A ) / L.normSq();
    lambdaA = 1 - lambdaB;

    if ( lambdaA <= 0 ){
        // woops.. that means the closest simplex point
        // isn't on the line it's point B itself
        scratch.done();
        return Physics.vector( linePt2 );
    } else if ( lambdaB <= 0 ){
        // vice versa
        scratch.done();
        return Physics.vector( linePt1 );
    }

    // guess we'd better do the math now...
    p = Physics.vector( linePt2 ).mult( lambdaB ).vadd( A.clone( linePt1 ).mult( lambdaA ) );
    scratch.done();
    return p;
};



// ---
// inside: src/core/integrator.js

/**
 * Base integrator definition
 */
(function(){

    var defaults = {

        // drag applied during integration
        // 0 means vacuum
        // 0.9 means molasses
        drag: 0
    };

    Physics.integrator = Decorator('integrator', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){
            
            this.options = Physics.util.extend({}, defaults, options);
        },

        /**
         * Integrate bodies by timestep
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {this}
         */
        integrate: function( bodies, dt ){

            var world = this._world;

            this.integrateVelocities( bodies, dt );
            
            if ( world ){
                world.publish({
                    topic: 'integrate:velocities',
                    bodies: bodies,
                    dt: dt
                });
            }

            this.integratePositions( bodies, dt );
            
            if ( world ){
                world.publish({
                    topic: 'integrate:positions',
                    bodies: bodies,
                    dt: dt
                });
            }

            return this;
        },

        /**
         * Just integrate the velocities
         * @abstract
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         */
        integrateVelocities: function( bodies, dt ){

            throw 'The integrator.integrateVelocities() method must be overriden';
        },

        /**
         * Just integrate the positions
         * @abstract
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         */
        integratePositions: function( bodies, dt ){

            throw 'The integrator.integratePositions() method must be overriden';
        }
    });

}());

// ---
// inside: src/core/renderer.js

/**
 * Base renderer class definition
 */
(function(){

    var defaults = {
        // draw meta data (fps, steps, etc)
        meta: false,
        // refresh rate of meta info
        metaRefresh: 200,

        // width of viewport
        width: 600,
        // height of viewport
        height: 600
    };

    // Service
    Physics.renderer = Decorator('renderer', {

        /**
         * Initialization
         * @param  {Object} options Options passed to the initializer
         * @return {void}
         */
        init: function( options ){

            var el = typeof options.el === 'string' ? document.getElementById(options.el) : options.el
                ;

            this.options = Physics.util.extend({}, defaults, options);

            this.el = el ? el : document.body;

            this.drawMeta = Physics.util.throttle( Physics.util.bind(this.drawMeta, this), this.options.metaRefresh );
        },

        /**
         * Render the world bodies and meta. Called by world.render()
         * @param  {Array} bodies Array of bodies in the world (reference!)
         * @param  {Object} meta  meta object
         * @return {this}
         */
        render: function( bodies, meta ){

            var body
                ,view
                ,pos
                ;

            if (this.beforeRender){

                this.beforeRender();
            }

            this._world.publish({
                topic: 'beforeRender',
                renderer: this,
                bodies: bodies,
                meta: meta
            });

            if (this.options.meta){
                this.drawMeta( meta );
            }

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                body = bodies[ i ];
				if (!body.hidden) {
					view = body.view || ( body.view = this.createView(body.geometry) );
					this.drawBody( body, view );
				}
            }

            return this;
        },

        /**
         * Create a view for the specified geometry
         * @abstract
         * @param  {Object} geometry The geometry
         * @return {Mixed} Whatever the renderer needs to render the body.
         */
        createView: function( geometry ){

            // example:
            // var el = document.createElement('div');
            // el.style.height = geometry.height + 'px';
            // el.style.width = geometry.width + 'px';
            // return el;
            throw 'You must overried the renderer.createView() method.';
        },

        /**
         * Draw the meta data.
         * @abstract
         * @param  {Object} meta The meta data
         */
        drawMeta: function( meta ){
            
            // example:
            // this.els.fps.innerHTML = meta.fps.toFixed(2);
            // this.els.steps.innerHTML = meta.steps;
            throw 'You must overried the renderer.drawMeta() method.';
        },

        /**
         * Draw specified body using specified view
         * @abstract
         * @param  {Object} body The body
         * @param  {Object} view The view
         */
        drawBody: function( body, view ){

            // example (pseudocode):
            // view.angle = body.state.angle
            // view.position = body.state.position
            throw 'You must overried the renderer.drawBody() method.';
        }

        
    });

}());

// ---
// inside: src/core/world.js

/**
 * The world class
 */
(function(){

    // bodies, behaviors, integrators, and renderers all need the setWorld method
    var setWorld = function( world ){

        if ( this.disconnect && this._world ){
            this.disconnect( this._world );
        }

        this._world = world;

        if ( this.connect && world ){
            this.connect( world );
        }
    };

    Physics.util.each('body,behavior,integrator,renderer'.split(','), function( key, val ){

        // add a setWorld method to all of these types
        Physics[ key ].mixin('setWorld', setWorld);
    });

    var execCallbacks = function execCallbacks( fns, scope, args ){
        
        var fn
            ,ret
            ,cb = function(){
                return execCallbacks( fns, scope, args );
            }
            ;

        while ( fn = fns.shift() ){

            ret = fn.apply(scope, args);

            if (ret && ret.then){
                return ret.then( cb );
            }
        }
    };

    var defaults = {

        // default timestep
        timestep: 1000.0 / 160,
        // maximum number of iterations per step
        maxIPF: 16,
        webworker: false, // NOT YET IMPLEMENTED

        // default integrator
        integrator: 'verlet',
		
		// render position resolution - if the new position is less than this far away from the previously rendered one, don't re-render
		positionRenderResolution: 0.1,
		// render angle resolution - if the new angle is less than this far away from the previously rendered one, don't re-render
		angleRenderResolution: 0.001
    };

    // begin world definitions
    /**
     * World Constructor.
     * 
     * If called with an array of functions, and any functions 
     * return a promise-like object, the remaining callbacks will 
     * be called only when that promise is resolved.
     * @param {Object}   cfg (optional) Configuration options
     * @param {Function|Array} fn  (optional) Callback function or array of callbacks called with "this" === world
     */
    var World = function World( cfg, fn ){

        // allow creation of world without "new"
        if (!(this instanceof World)){
            return new World( cfg, fn );
        }
        
        this.init( cfg, fn );
    };

    // extend pubsub
    World.prototype = Physics.util.extend({}, Physics.util.pubsub.prototype, {

        /**
         * Initialization
         * @param {Object}   cfg (optional) Configuration options
         * @param {Function} fn  (optional) Callback function or array of callbacks called with "this" === world
         * @return {void}
         */
        init: function( cfg, fn ){

            if ( Physics.util.isFunction( cfg ) || Physics.util.isArray( cfg ) ){
                fn = cfg;
                cfg = {};
            }

            this._stats = {
               // statistics (fps, etc)
               fps: 0,
               ipf: 0 
            }; 
            this._bodies = [];
            this._behaviors = [];
            this._integrator = null;
            this._renderer = null;
            this._paused = false;
            this._opts = {};
            this.initPubsub( this );

            // set options
            this.options( cfg || {} );

            // apply the callback function
            if ( Physics.util.isFunction( fn ) ){

                execCallbacks([ fn ], this, [this, Physics] );

            } else if ( Physics.util.isArray( fn ) ){

                execCallbacks(fn, this, [this, Physics] );
            }
        },

        /**
         * Get or set options
         * @param  {Object} cfg Config options to set
         * @return {Object|this}     Options or this
         */
        options: function( cfg ){

            if (cfg){

                // extend the defaults
                Physics.util.extend(this._opts, defaults, cfg);
                // set timestep
                this.timeStep(this._opts.timestep);
                // add integrator
                this.add(Physics.integrator(this._opts.integrator));

                return this;
            }

            return Physics.util.clone(this._opts);
        },

        /**
         * Multipurpose add method. Add one or many bodies, behaviors, integrators, renderers...
         * @param {Object|Array} arg The thing to add, or array of things to add
         * @return {this}
         */
        add: function( arg ){

            var i = 0
                ,len = arg && arg.length || 0
                ,thing = len ? arg[ 0 ] : arg
                ;

            if ( !thing ){
                return this;
            }

            // we'll either cycle through an array
            // or just run this on the arg itself
            do {
                switch (thing.type){

                    case 'behavior':
                        this.addBehavior(thing);
                    break; // end behavior

                    case 'integrator':
                        this.integrator(thing);
                    break; // end integrator

                    case 'renderer':
                        this.renderer(thing);
                    break; // end renderer

                    case 'body':
                        this.addBody(thing);
                    break; // end body
                    
                    default:
                        throw 'Error: failed to add item of unknown type "'+ thing.type +'" to world';
                    // end default
                }

            } while ( ++i < len && (thing = arg[ i ]) );

            return this;
        },

        /**
         * Multipurpose remove method. Remove one or many bodies, behaviors, integrators, renderers...
         * @param {Object|Array} arg The thing to remove, or array of things to remove
         * @return {this}
         */
        remove: function( arg ){

            var i = 0
                ,len = arg && arg.length || 0
                ,thing = len ? arg[ 0 ] : arg
                ;

            if ( !thing ){
                return this;
            }

            // we'll either cycle through an array
            // or just run this on the arg itself
            do {
                switch (thing.type){

                    case 'behavior':
                        this.removeBehavior( thing );
                    break; // end behavior

                    case 'integrator':
                        if (thing === this._integrator){
                            this.integrator( null );
                        }
                    break; // end integrator

                    case 'renderer':
                        if (thing === this._renderer){
                            this.renderer( null );
                        }
                    break; // end renderer

                    case 'body':
                        this.removeBody( thing );
                    break; // end body
                    
                    default:
                        throw 'Error: failed to remove item of unknown type "'+ thing.type +'" from world';
                    // end default
                }

            } while ( ++i < len && (thing = arg[ i ]) );

            return this;
        },

        /**
         * Get or Set the integrator
         * @param {Object} integrator Integrator instance to use
         * @return {this|Object} This or Integrator
         */
        integrator: function( integrator ){

            var notify;

            if ( integrator === undefined ){
                return this._integrator;
            }

            // do nothing if already added
            if ( this._integrator === integrator ){
                return this;
            }

            if ( this._integrator ){

                this._integrator.setWorld( null );

                // notify
                notify = {
                    topic: 'remove:integrator',
                    integrator: this._integrator
                };

                this.publish( notify );
            }

            if ( integrator ){
                this._integrator = integrator;
                this._integrator.setWorld( this );

                // notify
                notify = {
                    topic: 'add:integrator',
                    integrator: this._integrator
                };

                this.publish( notify );
            }

            return this;
        },

        /**
         * Get or Set renderer
         * @param  {Object} renderer The renderer to set
         * @return {this|Object}          This or Renderer
         */
        renderer: function( renderer ){

            var notify;

            if ( renderer === undefined ){
                return this._renderer;
            }

            // do nothing if renderer already added
            if ( this._renderer === renderer ){
                return this;
            }

            if ( this._renderer ){

                this._renderer.setWorld( null );

                // notify
                notify = {
                    topic: 'remove:renderer',
                    renderer: this._renderer
                };

                this.publish( notify );
            }

            if ( renderer ){
                this._renderer = renderer;
                this._renderer.setWorld( this );

                // notify
                notify = {
                    topic: 'add:renderer',
                    renderer: this._renderer
                };

                this.publish( notify );
            }

            return this;
        },

        /**
         * Get or Set timestep
         * @param  {Number} dt The timestep size
         * @return {this|Number}    This or the timestep
         */
        timeStep: function( dt ){

            if ( dt ){

                this._dt = dt;
                // calculate the maximum jump in time over which to do iterations
                this._maxJump = dt * this._opts.maxIPF;

                return this;
            }

            return this._dt;
        },

        /**
         * Add behavior to the world
         * @param {Object} behavior The behavior to add
         * @return {this} 
         */
        addBehavior: function( behavior ){

            var notify;

            behavior.setWorld( this );
            this._behaviors.push( behavior );

            // notify
            notify = {
                topic: 'add:behavior',
                behavior: behavior
            };

            this.publish( notify );

            return this;
        },

        /**
         * Get copied list of behaviors in the world
         * @return {Array} Array of behaviors
         */
        getBehaviors: function(){

            // return the copied array
            return [].concat(this._behaviors);
        },

        /**
         * Remove behavior from the world
         * @param {Object} behavior The behavior to remove
         * @return {this} 
         */
        removeBehavior: function( behavior ){

            var behaviors = this._behaviors
                ,notify
                ;

            if (behavior){
                
                for ( var i = 0, l = behaviors.length; i < l; ++i ){
                    
                    if (behavior === behaviors[ i ]){
                        
                        behaviors.splice( i, 1 );

                        // notify
                        notify = {
                            topic: 'remove:behavior',
                            behavior: behavior
                        };

                        this.publish( notify );

                        break;
                    }
                }
            }

            return this;
        },

        /**
         * Add body to the world
         * @param {Object} body The body to add
         * @return {this} 
         */
        addBody: function( body ){

            var notify;

            body.setWorld( this );
            this._bodies.push( body );

            // notify
            notify = {
                topic: 'add:body',
                body: body
            };

            this.publish( notify );

            return this;
        },

        /**
         * Get copied list of bodies in the world
         * @return {Array} Array of bodies
         */
        getBodies: function(){

            // return the copied array
            return [].concat(this._bodies);
        },

        /**
         * Remove body from the world
         * @param {Object} body The body to remove
         * @return {this} 
         */
        removeBody: function( body ){

            var bodies = this._bodies
                ,notify
                ;

            if (body){
                
                for ( var i = 0, l = bodies.length; i < l; ++i ){
                    
                    if (body === bodies[ i ]){
                        
                        bodies.splice( i, 1 );

                        // notify
                        notify = {
                            topic: 'remove:body',
                            body: body
                        };

                        this.publish( notify );

                        break;
                    }
                }
            }

            return this;
        },

        /**
         * Find first matching body based on query parameters
         * @param  {Object} query The query
         * @return {Object|false}       Body or false if no match
         */
        findOne: function( query ){

            // @TODO: refactor to use a new Query object helper
            // @TODO: make $and the default. not $or.
            var list = {
                    check: function( arg ){
                        var fn = this;
                        while ( fn = fn.next ){

                            if ( fn( arg ) ){
                                return true;
                            }
                        }
                        return false;
                    }
                }
                ,test = list
                ,bodies = this._bodies
                ;

            // init tests
            if ( query.$within ){
                //aabb
            }
            if ( query.$at ){

                test.next = function( body ){

                    var aabb = body.aabb();
                    return Physics.aabb.contains( aabb, query.$at );
                };
            }

            // do search
            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                if (list.check( bodies[ i ] )){
                    return bodies[ i ];
                }
            }

            return false;
        },

        /**
         * Do a single iteration
         * @private
         * @param  {Number} dt The timestep size
         * @return {void}
         */
        iterate: function( dt ){

            this._integrator.integrate( this._bodies, dt );
        },

        /**
         * Do a single step
         * @param  {Number} now Current unix timestamp
         * @return {this}
         */
        step: function( now ){
            
            if ( this._paused ){

                this._time = false;
                return this;
            }

            var time = this._time || (this._time = now)
                ,diff = now - time
                ,stats = this._stats
                ,dt = this._dt
                ;

            if ( !diff ){
                return this;
            }
            
            // limit number of iterations in each step
            if ( diff > this._maxJump ){

                this._time = now - this._maxJump;
                diff = this._maxJump;
            }

            // set some stats
            stats.fps = 1000/diff;
            stats.ipf = Math.ceil(diff/this._dt);

            while ( this._time < now ){
                this._time += dt;
                this.iterate( dt );
            }

            this.publish({
                topic: 'step'
            });
            return this;
        },

        /**
         * Render current world state using the renderer
         * @return {this}
         */
        render: function(){

            if ( !this._renderer ){
                throw "No renderer added to world";
            }
            
            this._renderer.render( this._bodies, this._stats );
            this.publish({
                topic: 'render',
                bodies: this._bodies,
                stats: this._stats,
                renderer: this._renderer
            });
            return this;
        },

        /**
         * Pause the world. (step calls do nothing)
         * @return {this}
         */
        pause: function(){

            this._paused = true;
            this.publish({
                topic: 'pause'
            });
            return this;
        },

        /**
         * Unpause the world. (step calls continue as usual)
         * @return {this}
         */
        unpause: function(){

            this._paused = false;
            this.publish({
                topic: 'unpause'
            });
            return this;
        },

        /**
         * Determine if world is paused
         * @return {Boolean} Is the world paused?
         */
        isPaused: function(){

            return !!this._paused;
        },

        /**
         * Destroy the world.
         * (Bwahahahahaha!)
         * @return {void}
         */
        destroy: function(){

            var self = this;
            self.pause();

            // notify before
            this.publish( 'destroy' );

            // remove all listeners
            self.unsubscribe( true );
            // remove everything
            self.remove( self.getBodies() );
            self.remove( self.getBehaviors() );
            self.integrator( null );
            self.renderer( null );
        }

    });

    Physics.world = World;
    
}());

// ---
// inside: src/integrators/verlet.js

Physics.integrator('verlet', function( parent ){

    // for this integrator we need to know if the object has been integrated before
    // so let's add a mixin to bodies

    Physics.body.mixin({
        started: function( val ){
            if ( val !== undefined ){
                this._started = true;
            }

            return !!this._started;
        }
    });


    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init
            parent.init.call(this, options);
        },

        /**
         * Velocity integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integrateVelocities: function( bodies, dt ){

            // half the timestep
            var dtdt = dt * dt
                ,drag = 1 - this.options.drag
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // Inspired from https://github.com/soulwire/Coffee-Physics
                    // @licence MIT
                    // 
                    // v = x - ox
                    // x = x + (v + a * dt * dt)

                    // use the velocity in vel if the velocity has been changed manually
                    if (state.vel.equals( state.old.vel ) && body.started()){
                            
                        // Get velocity by subtracting old position from curr position
                        state.vel.clone( state.pos ).vsub( state.old.pos );

                    } else {

                        state.old.pos.clone( state.pos ).vsub( state.vel );
                        // so we need to scale the value by dt so it 
                        // complies with other integration methods
                        state.vel.mult( dt );
                    }

                    // Apply "air resistance".
                    if ( drag ){

                        state.vel.mult( drag );
                    }

                    // Apply acceleration
                    // v += a * dt * dt
                    state.vel.vadd( state.acc.mult( dtdt ) );

                    // normalize velocity 
                    state.vel.mult( 1/dt );

                    // store calculated velocity
                    state.old.vel.clone( state.vel );

                    // Reset accel
                    state.acc.zero();

                    //
                    // Angular components
                    // 

                    if (state.angular.vel === state.old.angular.vel && body.started()){

                        state.angular.vel = (state.angular.pos - state.old.angular.pos);

                    } else {

                        state.old.angular.pos = state.angular.pos - state.angular.vel;
                        state.angular.vel *= dt;
                    }

                    state.angular.vel += state.angular.acc * dtdt;
                    state.angular.vel /= dt;
                    state.old.angular.vel = state.angular.vel;
                    state.angular.acc = 0;

                    body.started( true );

                } else {
                    // set the velocity and acceleration to zero!
                    state.vel.zero();
                    state.acc.zero();
                    state.angular.vel = 0;
                    state.angular.acc = 0;
                }
            }
        },

        /**
         * Position integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integratePositions: function( bodies, dt ){

            // half the timestep
            var dtdt = dt * dt
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // so we need to scale the value by dt so it 
                    // complies with other integration methods
                    state.vel.mult( dt );
                
                    // Store old position.
                    // xold = x
                    state.old.pos.clone( state.pos );

                    state.pos.vadd( state.vel );

                    // normalize velocity 
                    state.vel.mult( 1/dt );

                    // store calculated velocity
                    state.old.vel.clone( state.vel );

                    //
                    // Angular components
                    // 

                    
                    state.angular.vel *= dt;
                
                    state.old.angular.pos = state.angular.pos;

                    state.angular.pos += state.angular.vel;
                    state.angular.vel /= dt;
                    state.old.angular.vel = state.angular.vel;
                }
            }
        }
    };
});



// ---
// inside: src/geometries/point.js

/**
 * Point geometry
 * @module geometries/point
 */
Physics.geometry('point', function( parent ){

    // alias of default
});


// ---
// inside: src/geometries/circle.js

/**
 * Circle geometry
 * @module geometries/circle
 */
Physics.geometry('circle', function( parent ){

    var defaults = {

        radius: 1.0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);
            this.radius = options.radius;
            this._aabb = Physics.aabb();
        },
                
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            var r = this.radius
                ,aabb = this._aabb
                ;

            // circles are symetric... so angle has no effect
            if ( aabb.halfWidth() === r ){
                // don't recalculate
                return aabb.get();
            }

            return aabb.set( -r, -r, r, r ).get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result ){

            result = result || Physics.vector();

            return result.clone( dir ).normalize().mult( this.radius );
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            result = result || Physics.vector();

            // we can use the center of the circle as the core object
            // because we can project a point to the hull in any direction
            // ... yay circles!
            // but since the caller is expecting a certain margin... give it
            // to them
            return result.clone( dir ).normalize().mult( this.radius - margin );
        }
    };
});


// ---
// inside: src/geometries/convex-polygon.js

/**
 * Convex polygon geometry
 * @module geometries/convex-polygon
 */
Physics.geometry('convex-polygon', function( parent ){

    var ERROR_NOT_CONVEX = 'Error: The vertices specified do not match that of a _convex_ polygon.';

    var defaults = {

    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);
            options = Physics.util.extend({}, defaults, options);

            this.setVertices( options.vertices || [] );
        },

        /**
         * Set the vertices of the polygon shape. Vertices will be converted to be relative to the calculated centroid
         * @param {Array} hull The hull definition. Array of vectorish objects
         * @return {self}
         */
        setVertices: function( hull ){

            var scratch = Physics.scratchpad()
                ,transl = scratch.transform()
                ,verts = this.vertices = []
                ;

            if ( !Physics.geometry.isPolygonConvex( hull ) ){
                throw ERROR_NOT_CONVEX;
            }

            transl.setRotation( 0 );
            transl.setTranslation( Physics.geometry.getPolygonCentroid( hull ).negate() );

            // translate each vertex so that the centroid is at the origin
            // then add the vertex as a vector to this.vertices
            for ( var i = 0, l = hull.length; i < l; ++i ){
                
                verts.push( Physics.vector( hull[ i ] ).translate( transl ) );
            }

            this._area = Physics.geometry.getPolygonArea( verts );

            this._aabb = false;
            scratch.done();
            return this;
        },
        
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            if (!angle && this._aabb){
                return this._aabb.get();
            }

            var scratch = Physics.scratchpad()
                ,p = scratch.vector()
                ,trans = scratch.transform().setRotation( angle || 0 )
                ,xaxis = scratch.vector().clone(Physics.vector.axis[0]).rotateInv( trans )
                ,yaxis = scratch.vector().clone(Physics.vector.axis[1]).rotateInv( trans )
                ,xmax = this.getFarthestHullPoint( xaxis, p ).proj( xaxis )
                ,xmin = - this.getFarthestHullPoint( xaxis.negate(), p ).proj( xaxis )
                ,ymax = this.getFarthestHullPoint( yaxis, p ).proj( yaxis )
                ,ymin = - this.getFarthestHullPoint( yaxis.negate(), p ).proj( yaxis )
                ,aabb
                ;

            aabb = new Physics.aabb( xmin, ymin, xmax, ymax );

            if (!angle){
                this._aabb = aabb;
            }

            scratch.done();
            return aabb.get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result, data ){

            var verts = this.vertices
                ,val
                ,prev
                ,l = verts.length
                ,i = 2
                ,idx
                ;

            result = result || Physics.vector();

            if ( l < 2 ){
                if ( data ){
                    data.idx = 0;
                }
                return result.clone( verts[0] );
            }

            prev = verts[ 0 ].dot( dir );
            val = verts[ 1 ].dot( dir );

            if ( l === 2 ){
                idx = (val >= prev) ? 1 : 0;
                if ( data ){
                    data.idx = idx;
                }
                return result.clone( verts[ idx ] );
            }

            if ( val >= prev ){
                // go up
                // search until the next dot product 
                // is less than the previous
                while ( i < l && val >= prev ){
                    prev = val;
                    val = verts[ i ].dot( dir );
                    i++;
                }

                if (val >= prev){
                    i++;
                }

                // return the previous (furthest with largest dot product)
                idx = i - 2;
                if ( data ){
                    data.idx = i - 2;
                }
                return result.clone( verts[ idx ] );

            } else {
                // go down

                i = l;
                while ( i > 2 && prev >= val ){
                    i--;
                    val = prev;
                    prev = verts[ i ].dot( dir );
                }

                // return the previous (furthest with largest dot product)
                idx = (i + 1) % l;
                if ( data ){
                    data.idx = idx;
                }
                return result.clone( verts[ idx ] );                
            }
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            var norm
                ,scratch = Physics.scratchpad()
                ,next = scratch.vector()
                ,prev = scratch.vector()
                ,verts = this.vertices
                ,l = verts.length
                ,mag
                ,sign = this._area > 0
                ,data = {}
                ;

            result = this.getFarthestHullPoint( dir, result, data );

            // get normalized directions to next and previous vertices
            next.clone( verts[ (data.idx + 1) % l ] ).vsub( result ).normalize().perp( !sign );
            prev.clone( verts[ (data.idx - 1 + l) % l ] ).vsub( result ).normalize().perp( sign );

            // get the magnitude of a vector from the result vertex 
            // that splits down the middle
            // creating a margin of "m" to each edge
            mag = margin / (1 + next.dot(prev));

            result.vadd( next.vadd( prev ).mult( mag ) );
            scratch.done();
            return result;
        }
    };
});


// ---
// inside: src/bodies/circle.js

/**
 * Circle body definition
 * @module bodies/circle
 * @requires geometries/circle
 */
Physics.body('circle', function( parent ){

    var defaults = {
        radius: 1.0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.geometry = Physics.geometry('circle', {
                radius: options.radius
            });

            this.recalc();
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @return {this}
         */
        recalc: function(){
            parent.recalc.call(this);
            // moment of inertia
            this.moi = this.mass * this.geometry.radius * this.geometry.radius / 2;
        }
    };
});


// ---
// inside: src/bodies/convex-polygon.js

/**
 * Convex Polygon Body
 * @module bodies/convex-polygon
 * @requires geometries/convex-polygon
 */
Physics.body('convex-polygon', function( parent ){

    var defaults = {
        
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.geometry = Physics.geometry('convex-polygon', {
                vertices: options.vertices
            });

            this.recalc();
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @return {this}
         */
        recalc: function(){
            parent.recalc.call(this);
            // moment of inertia
            this.moi = Physics.geometry.getPolygonMOI( this.geometry.vertices );
        }
    };
});


// ---
// inside: src/bodies/point.js

/**
 * Point body
 * @module bodies/point
 */
Physics.body('point', function(){});

// ---
// inside: src/behaviors/body-collision-detection.js

/**
 * Body collision detection
 * @module behaviors/body-collision-detection
 */
Physics.behavior('body-collision-detection', function( parent ){

    var PUBSUB_CANDIDATES = 'collisions:candidates';
    var PUBSUB_COLLISION = 'collisions:detected';

    /**
     * Get a general support function for use with GJK algorithm
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Function}       The support function
     */
    var getSupportFn = function getSupportFn( bodyA, bodyB ){

        var fn;

        fn = function( searchDir ){

            var scratch = Physics.scratchpad()
                ,tA = scratch.transform().setTranslation( bodyA.state.pos ).setRotation( bodyA.state.angular.pos )
                ,tB = scratch.transform().setTranslation( bodyB.state.pos ).setRotation( bodyB.state.angular.pos )
                ,vA = scratch.vector()
                ,vB = scratch.vector()
                ,method = fn.useCore? 'getFarthestCorePoint' : 'getFarthestHullPoint'
                ,marginA = fn.marginA
                ,marginB = fn.marginB
                ,ret
                ;

            vA = bodyA.geometry[ method ]( searchDir.rotateInv( tA ), vA, marginA ).transform( tA );
            vB = bodyB.geometry[ method ]( searchDir.rotate( tA ).rotateInv( tB ).negate(), vB, marginB ).transform( tB );

            searchDir.negate().rotate( tB );

            ret = {
                a: vA.values(),
                b: vB.values(),
                pt: vA.vsub( vB ).values() 
            };
            scratch.done();
            return ret;
        };

        fn.useCore = false;
        fn.margin = 0;

        return fn;
    };

    /**
     * Use GJK algorithm to check arbitrary bodies for collisions
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Object}       Collision result
     */
    var checkGJK = function checkGJK( bodyA, bodyB ){

        var scratch = Physics.scratchpad()
            ,d = scratch.vector()
            ,tmp = scratch.vector()
            ,overlap
            ,result
            ,support
            ,collision = false
            ,aabbA = bodyA.aabb()
            ,dimA = Math.min( aabbA.halfWidth, aabbA.halfHeight )
            ,aabbB = bodyB.aabb()
            ,dimB = Math.min( aabbB.halfWidth, aabbB.halfHeight )
            ;

        // just check the overlap first
        support = getSupportFn( bodyA, bodyB );
        d.clone( bodyA.state.pos ).vsub( bodyB.state.pos );
        result = Physics.gjk(support, d, true);

        if ( result.overlap ){

            // there is a collision. let's do more work.
            collision = {
                bodyA: bodyA,
                bodyB: bodyB
            };

            // first get the min distance of between core objects
            support.useCore = true;
            support.marginA = 0;
            support.marginB = 0;

            while ( result.overlap && (support.marginA < dimA || support.marginB < dimB) ){
                if ( support.marginA < dimA ){
                    support.marginA += 1;
                }
                if ( support.marginB < dimB ){
                    support.marginB += 1;
                }

                result = Physics.gjk(support, d);
            }

            if ( result.overlap || result.maxIterationsReached ){
                scratch.done();
                // This implementation can't deal with a core overlap yet
                return false;
            }

            // calc overlap
            overlap = Math.max(0, (support.marginA + support.marginB) - result.distance);
            collision.overlap = overlap;
            // @TODO: for now, just let the normal be the mtv
            collision.norm = d.clone( result.closest.b ).vsub( tmp.clone( result.closest.a ) ).normalize().values();
            collision.mtv = d.mult( overlap ).values();
            // get a corresponding hull point for one of the core points.. relative to body A
            collision.pos = d.clone( collision.norm ).mult( support.margin ).vadd( tmp.clone( result.closest.a ) ).vsub( bodyA.state.pos ).values();
        }

        scratch.done();
        return collision;
    };

    /**
     * Check two circles for collisions
     * @param  {Object} bodyA First circle
     * @param  {Object} bodyB Second circle
     * @return {Object}       Collision result
     */
    var checkCircles = function checkCircles( bodyA, bodyB ){

        var scratch = Physics.scratchpad()
            ,d = scratch.vector()
            ,tmp = scratch.vector()
            ,overlap
            ,collision = false
            ;
        
        d.clone( bodyB.state.pos ).vsub( bodyA.state.pos );
        overlap = d.norm() - (bodyA.geometry.radius + bodyB.geometry.radius);

        // hmm... they overlap exactly... choose a direction
        if ( d.equals( Physics.vector.zero ) ){

            d.set( 1, 0 );
        }

        // if ( overlap > 0 ){
        //     // check the future
        //     d.vadd( tmp.clone(bodyB.state.vel).mult( dt ) ).vsub( tmp.clone(bodyA.state.vel).mult( dt ) );
        //     overlap = d.norm() - (bodyA.geometry.radius + bodyB.geometry.radius);
        // }

        if ( overlap <= 0 ){

            collision = {
                bodyA: bodyA,
                bodyB: bodyB,
                norm: d.normalize().values(),
                mtv: d.mult( -overlap ).values(),
                pos: d.normalize().mult( bodyA.geometry.radius ).values(),
                overlap: -overlap
            };
        }
    
        scratch.done();
        return collision;
    };

    /**
     * Check a pair for collisions
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Object}       Collision result
     */
    var checkPair = function checkPair( bodyA, bodyB ){

        if ( bodyA.geometry.name === 'circle' && bodyB.geometry.name === 'circle' ){

            return checkCircles( bodyA, bodyB );

        } else {

            return checkGJK( bodyA, bodyB );
        }
    };

    var defaults = {

        // force check every pair of bodies in the world
        checkAll: false
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            this.options = Physics.util.extend({}, this.options, defaults, options);
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            if ( this.options.checkAll ){

                world.subscribe( 'integrate:velocities', this.checkAll, this );

            } else {

                world.subscribe( PUBSUB_CANDIDATES, this.check, this );
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            if ( this.options.checkAll ){

                world.unsubscribe( 'integrate:velocities', this.checkAll );

            } else {

                world.unsubscribe( PUBSUB_CANDIDATES, this.check );
            }
        },

        /**
         * Check pairs of objects that have been flagged by broad phase for possible collisions.
         * @param  {Object} data Event data
         * @return {void}
         */
        check: function( data ){

            var candidates = data.candidates
                ,pair
                ,collisions = []
                ,ret
                ;

            for ( var i = 0, l = candidates.length; i < l; ++i ){
                
                pair = candidates[ i ];

                ret = checkPair( pair.bodyA, pair.bodyB );

                if ( ret ){
                    collisions.push( ret );
                }
            }

            if ( collisions.length ){

                this._world.publish({
                    topic: PUBSUB_COLLISION,
                    collisions: collisions
                });
            }
        },

        /**
         * Check all pairs of objects in the list for collisions
         * @param  {Object} data Event data
         * @return {void}
         */
        checkAll: function( data ){

            var bodies = data.bodies
                ,dt = data.dt
                ,bodyA
                ,bodyB
                ,collisions = []
                ,ret
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                bodyA = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){

                    bodyB = bodies[ i ];

                    // don't detect two fixed bodies
                    if ( !bodyA.fixed || !bodyB.fixed ){
                        
                        ret = checkPair( bodyA, bodyB );

                        if ( ret ){
                            collisions.push( ret );
                        }
                    }
                }
            }

            if ( collisions.length ){

                this._world.publish({
                    topic: PUBSUB_COLLISION,
                    collisions: collisions
                });
            }
        }
    };

});

// ---
// inside: src/behaviors/body-impulse-response.js

/**
 * Body collision response
 * @module behaviors/body-collision-response
 */
Physics.behavior('body-impulse-response', function( parent ){
    
    var defaults = {

    };

    var PUBSUB_COLLISION = 'collisions:detected';

    return {

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.subscribe( PUBSUB_COLLISION, this.respond, this );
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.unsubscribe( PUBSUB_COLLISION, this.respond );
        },

        /**
         * Collide two bodies by modifying their positions and velocities to conserve momentum
         * @param  {Object} bodyA   First Body
         * @param  {Object} bodyB   Second body
         * @param  {Vector} normal  Normal vector of the collision surface
         * @param  {Vector} point   Contact point of the collision
         * @param  {Vector} mtrans  Minimum transit vector that is the smallest displacement to separate the bodies
         * @param  {Boolean} contact Are the bodies in resting contact relative to each other
         * @return {void}
         */
        collideBodies: function(bodyA, bodyB, normal, point, mtrans, contact){

            var fixedA = bodyA.fixed
                ,fixedB = bodyB.fixed
                ,scratch = Physics.scratchpad()
                // minimum transit vector for each body
                ,mtv = scratch.vector().clone( mtrans )
                ;

            // do nothing if both are fixed
            if ( fixedA && fixedB ){
                scratch.done();
                return;
            }

            if ( fixedA ){

                // extract bodies
                bodyB.state.pos.vadd( mtv );
                
            } else if ( fixedB ){

                // extract bodies
                bodyA.state.pos.vsub( mtv );

            } else {

                // extract bodies
                mtv.mult( 0.5 );
                bodyA.state.pos.vsub( mtv );
                bodyB.state.pos.vadd( mtv );
            }

            // inverse masses and moments of inertia.
            // give fixed bodies infinite mass and moi
            var invMoiA = fixedA ? 0 : 1 / bodyA.moi
                ,invMoiB = fixedB ? 0 : 1 / bodyB.moi
                ,invMassA = fixedA ? 0 : 1 / bodyA.mass
                ,invMassB = fixedB ? 0 : 1 / bodyB.mass
                // coefficient of restitution between bodies
                ,cor = contact ? 0 : bodyA.restitution * bodyB.restitution
                // coefficient of friction between bodies
                ,cof = bodyA.cof * bodyB.cof
                // normal vector
                ,n = scratch.vector().clone( normal )
                // vector perpendicular to n
                ,perp = scratch.vector().clone( n ).perp( true )
                // collision point from A's center
                ,rA = scratch.vector().clone( point )
                // collision point from B's center
                ,rB = scratch.vector().clone( point ).vadd( bodyA.state.pos ).vsub( bodyB.state.pos )
                ,tmp = scratch.vector()
                ,angVelA = bodyA.state.angular.vel
                ,angVelB = bodyB.state.angular.vel
                // relative velocity towards B at collision point
                ,vAB = scratch.vector().clone( bodyB.state.vel )
                        .vadd( tmp.clone(rB).perp( true ).mult( angVelB ) )
                        .vsub( bodyA.state.vel )
                        .vsub( tmp.clone(rA).perp( true ).mult( angVelA ) )
                // break up components along normal and perp-normal directions
                ,rAproj = rA.proj( n )
                ,rAreg = rA.proj( perp )
                ,rBproj = rB.proj( n )
                ,rBreg = rB.proj( perp )
                ,vproj = vAB.proj( n ) // projection of vAB along n
                ,vreg = vAB.proj( perp ) // rejection of vAB along n (perp of proj)
                ,impulse
                ,sign
                ,max
                ,inContact = false
                ;

            // if moving away from each other... don't bother.
            if (vproj >= 0){
                scratch.done();
                return;
            }

            impulse =  - ((1 + cor) * vproj) / ( invMassA + invMassB + (invMoiA * rAreg * rAreg) + (invMoiB * rBreg * rBreg) );
            // vproj += impulse * ( invMass + (invMoi * rreg * rreg) );
            // angVel -= impulse * rreg * invMoi;

            
            if ( fixedA ){

                // apply impulse
                bodyB.state.vel.vadd( n.mult( impulse * invMassB ) );
                bodyB.state.angular.vel -= impulse * invMoiB * rBreg;
                
            } else if ( fixedB ){

                // apply impulse
                bodyA.state.vel.vsub( n.mult( impulse * invMassA ) );
                bodyA.state.angular.vel += impulse * invMoiA * rAreg;

            } else {

                // apply impulse
                bodyB.state.vel.vadd( n.mult( impulse * invMassB ) );
                bodyB.state.angular.vel -= impulse * invMoiB * rBreg;
                bodyA.state.vel.vsub( n.mult( invMassA * bodyB.mass ) );
                bodyA.state.angular.vel += impulse * invMoiA * rAreg;
            }

            // inContact = (impulse < 0.004);
            
            // if we have friction and a relative velocity perpendicular to the normal
            if ( cof && vreg ){


                // TODO: here, we could first assume static friction applies
                // and that the tangential relative velocity is zero.
                // Then we could calculate the impulse and check if the
                // tangential impulse is less than that allowed by static
                // friction. If not, _then_ apply kinetic friction.

                // instead we're just applying kinetic friction and making
                // sure the impulse we apply is less than the maximum
                // allowed amount

                // maximum impulse allowed by kinetic friction
                max = vreg / ( invMassA + invMassB + (invMoiA * rAproj * rAproj) + (invMoiB * rBproj * rBproj) );

                if (!inContact){
                    // the sign of vreg ( plus or minus 1 )
                    sign = vreg < 0 ? -1 : 1;

                    // get impulse due to friction
                    impulse *= sign * cof;
                    // make sure the impulse isn't giving the system energy
                    impulse = (sign === 1) ? Math.min( impulse, max ) : Math.max( impulse, max );
                    
                } else {

                    impulse = max;
                }

                if ( fixedA ){

                    // apply frictional impulse
                    bodyB.state.vel.vsub( perp.mult( impulse * invMassB ) );
                    bodyB.state.angular.vel -= impulse * invMoiB * rBproj;
                    
                } else if ( fixedB ){

                    // apply frictional impulse
                    bodyA.state.vel.vadd( perp.mult( impulse * invMassA ) );
                    bodyA.state.angular.vel += impulse * invMoiA * rAproj;

                } else {

                    // apply frictional impulse
                    bodyB.state.vel.vsub( perp.mult( impulse * invMassB ) );
                    bodyB.state.angular.vel -= impulse * invMoiB * rBproj;
                    bodyA.state.vel.vadd( perp.mult( invMassA * bodyB.mass ) );
                    bodyA.state.angular.vel += impulse * invMoiA * rAproj;
                }  
            }

            scratch.done();
        },

        /**
         * Respond to collision event
         * @param  {Object} data Event data
         * @return {void}
         */
        respond: function( data ){

            var self = this
                ,col
                ,collisions = Physics.util.shuffle(data.collisions)
                ;

            for ( var i = 0, l = collisions.length; i < l; ++i ){
                
                col = collisions[ i ];
                self.collideBodies( 
                    col.bodyA,
                    col.bodyB,
                    col.norm,
                    col.pos,
                    col.mtv
                );
            }
        }
    };
});


// ---
// inside: src/behaviors/constant-acceleration.js

/**
 * Constant acceleration behavior
 * @module behaviors/constant-acceleration
 */
Physics.behavior('constant-acceleration', function( parent ){

    var defaults = {

        acc: { x : 0, y: 0.0004 }
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            // extend options
            this.options = Physics.util.extend(this.options, defaults, options);
            this._acc = Physics.vector();
            this.setAcceleration( this.options.acc );
        },

        /**
         * Set the acceleration of the behavior
         * @param {Vectorish} acc The acceleration vector
         * @return {self}
         */
        setAcceleration: function( acc ){

            this._acc.clone( acc );
            return this;
        },

        /**
         * Callback run on integrate:positions event
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies;

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                bodies[ i ].accelerate( this._acc );
            }
        }
    };
});

// ---
// inside: src/behaviors/distance-proportional-force.js

/**
 * Attraction between bodies inversely proportional to the nth power of the distance between them (defaults to n=2, which is newtonian attraction)
 * @module behaviors/distance-proportional-force
 */
Physics.behavior('distance-proportional-force', function( parent ){

    var defaults = {

        strength: 1,
		n: 2, // the strength of the force is proportional to distance^n
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.n = options.n;
            this.strength = options.strength;
            this.tolerance = options.tolerance || 100 * this.strength;
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
                ,other
				,n = this.n
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normPowN
                ,g
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                body = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){
                    
                    other = bodies[ i ];
                    // clone the position
                    pos.clone( other.state.pos );
                    pos.vsub( body.state.pos );
                    // get the square distance
                    normPowN = Math.pow(pos.norm(), n);

                    if (normPowN > tolerance){

                        g = strength / normPowN;

                        body.accelerate( pos.normalize().mult( g * other.mass ) );
                        other.accelerate( pos.mult( body.mass/other.mass ).negate() );
                    }
                }
            }

            scratch.done();
        }
    };
});

// ---
// inside: src/behaviors/edge-collision-detection.js

/**
 * Edge collision detection.
 * Used to detect collisions with the boundaries of an AABB
 * @module behaviors/edge-collision-detection
 */
Physics.behavior('edge-collision-detection', function( parent ){

    var PUBSUB_COLLISION = 'collisions:detected';

    /**
     * Check if a body collides with the boundary
     * @param  {Object} body   The body to check
     * @param  {AABB} bounds The aabb representing the boundary
     * @param  {Object} dummy  Dummy body supplied to the collision event
     * @return {Object}        Collision data
     */
    var checkGeneral = function checkGeneral( body, bounds, dummy ){

        var overlap
            ,aabb = body.aabb()
            ,scratch = Physics.scratchpad()
            ,trans = scratch.transform()
            ,dir = scratch.vector()
            ,result = scratch.vector()
            ,collision = false
            ,collisions = []
            ;

        // right
        overlap = (aabb.pos.x + aabb.x) - bounds.max.x;

        if ( overlap >= 0 ){

            dir.set( 1, 0 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 1,
                    y: 0
                },
                mtv: {
                    x: overlap,
                    y: 0
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // bottom
        overlap = (aabb.pos.y + aabb.y) - bounds.max.y;

        if ( overlap >= 0 ){

            dir.set( 0, 1 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 0,
                    y: 1
                },
                mtv: {
                    x: 0,
                    y: overlap
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // left
        overlap = bounds.min.x - (aabb.pos.x - aabb.x);

        if ( overlap >= 0 ){

            dir.set( -1, 0 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: -1,
                    y: 0
                },
                mtv: {
                    x: -overlap,
                    y: 0
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // top
        overlap = bounds.min.y - (aabb.pos.y - aabb.y);

        if ( overlap >= 0 ){

            dir.set( 0, -1 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 0,
                    y: -1
                },
                mtv: {
                    x: 0,
                    y: -overlap
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        scratch.done();
        return collisions;
    };

    /**
     * Check if a body collides with the boundary
     * @param  {Object} body   The body to check
     * @param  {AABB} bounds The aabb representing the boundary
     * @param  {Object} dummy  Dummy body supplied to the collision event
     * @return {Object}        Collision data
     */
    var checkEdgeCollide = function checkEdgeCollide( body, bounds, dummy ){

        return checkGeneral( body, bounds, dummy );
    };

    var defaults = {

        aabb: null,
        restitution: 0.99,
        cof: 1.0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            this.options = Physics.util.extend({}, this.options, defaults, options);

            this.setAABB( options.aabb );
            this.restitution = options.restitution;
            
            this._dummy = Physics.body('_dummy', function(){}, { 
                fixed: true,
                restitution: this.options.restitution,
                cof: this.options.cof
            });
        },

        /**
         * Set the boundaries of the edge
         * @param {AABB} aabb The aabb of the boundary
         * @return {void}
         */
        setAABB: function( aabb ){

            if (!aabb) {
                throw 'Error: aabb not set';
            }

            aabb = aabb.get && aabb.get() || aabb;

            this._edges = {
                min: {
                    x: (aabb.pos.x - aabb.x),
                    y: (aabb.pos.y - aabb.y)
                },
                max: {
                    x: (aabb.pos.x + aabb.x),
                    y: (aabb.pos.y + aabb.y)  
                }
            };
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.subscribe( 'integrate:velocities', this.checkAll, this );
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.unsubscribe( 'integrate:velocities', this.checkAll );
        },

        /**
         * Check all bodies for collisions with the edge
         * @param  {Object} data Event data
         * @return {void}
         */
        checkAll: function( data ){
            
            var bodies = data.bodies
                ,dt = data.dt
                ,body
                ,collisions = []
                ,ret
                ,bounds = this._edges
                ,dummy = this._dummy
                ;

            for ( var i = 0, l = bodies.length; i < l; i++ ){

                body = bodies[ i ];

                // don't detect fixed bodies
                if ( !body.fixed ){
                    
                    ret = checkEdgeCollide( body, bounds, dummy );

                    if ( ret ){
                        collisions.push.apply( collisions, ret );
                    }
                }
            }

            if ( collisions.length ){

                this._world.publish({
                    topic: PUBSUB_COLLISION,
                    collisions: collisions
                });
            }
        }
    };

});

// ---
// inside: src/behaviors/follow-touch.js

/**
 * Follow touch
 * Allows bodies to follow the motions of the dragged mouse
 * @module behaviors/follow-touch
 */

Physics.behavior('follow-touch', function(parent) {
	return {
		addTouchFollower: function(body) {
			this._bodies.push(body);
		},
		
		removeTouchFollower: function(body) {
			this._bodies.splice(this._bodies.indexOf(body), 1);
		},
		
		init: function( options ){
			var self = this;
			var constrainer;

			this.touchPos = Physics.vector();
			this.touchPosOld = Physics.vector();
			this.tmp = Physics.vector();
			this.dragged = Physics.vector();
			this.offset = Physics.vector();
			
			this.dragging = false;
			this._bodies = [];
			if (options.bodies)
				this._bodies.push.apply(this._bodies(options.bodies));
				
			if (options.body)
				this._bodies.push(options.body);
			
			this._ondrag = this._ondrag.bind(this);
			this._ondragend = this._ondragend.bind(this);
			this._onswipe = this._onswipe.bind(this);
			this._onremoveBody = this._onremoveBody.bind(this);
		},
		
		_onremoveBody: function(data) {
			if (~this._bodies.indexOf(data.body)) {
				this.removeTouchFollower(data.body);
			}
		},

		_ondrag: function(e) {
			var gesture = e.gesture,
				center = gesture.center,
				touch = e.gesture.touches[0];
				
			if (this.dragging) {
				this.touchPosOld.clone(this.touchPos);
				this.touchPos.set(touch.pageX, touch.pageY);
			}
			else {
				this.dragging = true;
				this.touchPos.set(touch.pageX, touch.pageY);
				this.tmp.clone(this.touchPos);
				this.tmp.sub(gesture.deltaY / 2, gesture.deltaY / 2);
				this.touchPosOld.clone(this.tmp);
			}
			
			this.tmp.clone(this.touchPos);
			this.tmp.vsub(this.touchPosOld);
			this.dragged.vadd(this.tmp.mult( 1 / 2 ));
		},

		_ondragend: function(e) {
			this.dragging = false;
		},

		_onswipe: function(e) {
			this.dragging = false;
		},
		
		connect: function( world ){				
			// subscribe the .behave() method to the position integration step
			world._hammer.on('drag', this._ondrag);
			world._hammer.on('dragend', this._ondragend);
			world._hammer.on('swipe', this._onswipe);
			world.subscribe('integrate:positions', this.behave, this);
			world.subscribe('remove:body', this._onremoveBody);
		},

		disconnect: function( world ){
			// unsubscribe when disconnected
			world._hammer.off('drag', this._ondrag);
			world._hammer.off('dragend', this._ondragend);
			world._hammer.off('swipe', this._onswipe);
			world.unsubscribe('integrate:positions', this.behave);
			world.unsubscribe('remove:body', this._onremoveBody);
		},

		behave: function( data ){
			if (!this.dragging || !this._bodies.length || this.dragged.equals(Physics.vector.zero))
				return;
				
			var i = this._bodies.length,
				body,
				pos,
				lock,
				dragged = this.dragged,
				draggedX = dragged.get(0),
				draggedY = dragged.get(1);
				
			while (i--) {
				body = this._bodies[i];
				if (body.options.fixed)
					continue;
					
				pos = body.state.pos;
				lock = body.options.lock;
				if (lock)
					pos.add(lock.x ? 0 : draggedX, lock.y ? 0 : draggedY);
				else
					pos.vadd(dragged);
				
				body.state.vel.clone( dragged.mult( 1 / 10 ) );
				// body.state.vel.clamp( { x: -1, y: -1 }, { x: 1, y: 1 } );
			}
			
			this.dragged.zero();
		}
	};
});


// ---
// inside: src/behaviors/gravity-well.js

/**
 * Newtonian attraction between bodies and a point in the world (inverse square law)
 * @module behaviors/gravity-well
 */
Physics.behavior('gravity-well', function( parent ){

    var defaults = {

        strength: 1,
		mass: 1,
		x: 0,
		y: 0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.strength = options.strength;
            this.tolerance = Math.abs(options.tolerance || 100 * this.strength);
			this.pos = Physics.vector(options.x, options.y);
			this.mass = options.mass;
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
				,mass = this.mass
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normsq
                ,g
                ;

            for ( var i = 0, l = bodies.length; i < l; i++ ){
                
                body = bodies[ i ];
				// clone the position
				pos.clone( this.pos );
				pos.vsub( body.state.pos );
				// get the square distance
				normsq = pos.normSq();

				if (normsq > tolerance){

					g = strength / normsq;

					body.accelerate( pos.normalize().mult( g * mass ) );
				}
            }

            scratch.done();
        }
    };
});


// ---
// inside: src/behaviors/newtonian.js

/**
 * Newtonian attraction between bodies (inverse square law)
 * @module behaviors/newtonian
 */
Physics.behavior('newtonian', function( parent ){

    var defaults = {

        strength: 1
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.strength = options.strength;
            this.tolerance = Math.abs(options.tolerance || 100 * this.strength);
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
                ,other
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normsq
                ,g
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                body = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){
                    
                    other = bodies[ i ];
                    // clone the position
                    pos.clone( other.state.pos );
                    pos.vsub( body.state.pos );
                    // get the square distance
                    normsq = pos.normSq();

                    if (normsq > tolerance){

                        g = strength / normsq;

                        body.accelerate( pos.normalize().mult( g * other.mass ) );
                        other.accelerate( pos.mult( body.mass/other.mass ).negate() );
                    }
                }
            }

            scratch.done();
        }
    };
});


// ---
// inside: src/behaviors/rigid-constraint-manager.js

/**
 * Rigid constraints manager.
 * Handles distance constraints
 * @module behaviors/rigid-constraint-manager
 */
Physics.behavior('rigid-constraint-manager', function( parent ){

    var defaults = {

        // set a default target length
        targetLength: 20
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            Physics.util.extend(this.options, defaults, options);

            this._constraints = [];
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            var intg = world.integrator();

            if ( intg && intg.name.indexOf('verlet') < 0 ){

                throw 'The rigid constraint manager needs a world with a "verlet" compatible integrator.';
            }

            world.subscribe('integrate:positions', this.resolve, this);
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.unsubscribe('integrate:positions', this.resolve);
        },

        /**
         * Remove all constraints
         * @return {self}
         */
        drop: function(){

            // drop the current constraints
            this._constraints = [];
            return this;
        },

        /**
         * Constrain two bodies to a target relative distance
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        constrain: function( bodyA, bodyB, targetLength ){

            var cst;

            if (!bodyA || !bodyB){

                return false;
            }

            this._constraints.push(cst = {
                id: Physics.util.uniqueId('rigid-constraint'),
                bodyA: bodyA,
                bodyB: bodyB,
                targetLength: typeof targetLength == 'number' ? targetLength : this.options.targetLength
            });

            return cst;
        },

        /**
         * Remove a constraint
         * @param  {Mixed} indexCstrOrId Either the constraint object, the constraint id, or the numeric index of the constraint
         * @return {self}
         */
        remove: function( indexCstrOrId ){

            var constraints = this._constraints
                ,isObj
                ;

            if (typeof indexCstrOrId === 'number'){

                constraints.splice( indexCstrOrId, 1 );
                return this;   
            }

            isObj = Physics.util.isObject( indexCstrOrId );
            
            for ( var i = 0, l = constraints.length; i < l; ++i ){
                
                if ( (isObj && constraints[ i ] === indexCstrOrId) ||
                    ( !isObj && constraints[ i ].id === indexCstrOrId) ){

                    constraints.splice( i, 1 );
                    return this;
                }
            }

            return this;
        },

        /**
         * Resolve constraints
         * @return {void}
         */
        resolve: function(){

            var constraints = this._constraints
                ,scratch = Physics.scratchpad()
                ,A = scratch.vector()
                ,BA = scratch.vector()
                ,con
                ,len
                ,corr
                ,proportion
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                // move constrained bodies to target length based on their
                // mass proportions
                A.clone( con.bodyA.state.pos );
                BA.clone( con.bodyB.state.pos ).vsub( A );
                len = BA.norm();
                corr = ( len - con.targetLength ) / len;
                
                BA.mult( corr );
                proportion = con.bodyB.mass / (con.bodyA.mass + con.bodyB.mass);

                if ( !con.bodyA.fixed ){

                    BA.mult( proportion );
                    con.bodyA.state.pos.vadd( BA );
                    BA.mult( 1 / proportion );
                }

                if ( !con.bodyB.fixed ){

                    BA.mult( 1 - proportion );
                    con.bodyB.state.pos.vsub( BA );
                }
            }

            scratch.done();
        },

        /**
         * Get an array of all constraints
         * @return {Array} The array of constraint objects
         */
        getConstraints: function(){

            return [].concat(this._constraints);
        }
    };
});


// ---
// inside: src/behaviors/surface-attraction.js

/**
 * Newtonian attraction between bodies directed towards closest point on the other body's surface as opposed to the centroid
 * @module behaviors/surface-attraction
 */
Physics.behavior('surface-attraction', function( parent ){

    var defaults = {
        strength: 1,
		mass: 1
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.strength = options.strength;
            this.tolerance = Math.abs(options.tolerance || 100 * this.strength);
			this.mass = options.mass;
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = data.bodies
                ,body
				,bodyIsFixed
				,other
				,bodyPos
				,mass = this.mass
                ,strength = this.strength
                ,tolerance = this.tolerance
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,v1 = scratch.vector()
                ,v2 = scratch.vector()
				,vertices
				,numVertices
				,i
				,minDistance = Infinity
				,distanceToLine
				,pt
				,nearestPt
                ,normsq
                ,g
                ;

            for ( var b = 0, l = bodies.length; b < l; b++ ) {
                body = bodies[ b ]; // the body to be accelerated
				if (body.options.fixed)
					continue;
					
				bodyPos = body.state.pos;
                for ( var c = 0; c < l; c++ ) {
					if (c == b)
						continue;
						
                    other = bodies[ c ];
					vertices = other.geometry.vertices;
					if (!vertices)
						nearestPt = other.state.pos;
					else {
						i = numVertices = vertices.length;
						while (i--) {
							v1.clone(vertices[i]);
							v1.vadd(other.state.pos);
							v2.clone(vertices[(i + 1) % numVertices]);
							v2.vadd(other.state.pos);
							pt = Physics.geometry.nearestPointOnLine(bodyPos, v1, v2);
							distanceToLine = pt.dist(bodyPos);
							if (distanceToLine < minDistance) {
								minDistance = distanceToLine;
								nearestPt = pt;
							}
						}
					}
					
					// clone the position
					pos.clone( nearestPt );
					pos.vsub( bodyPos );
					// get the square distance
					normsq = pos.normSq();

					if (normsq > tolerance){

						g = strength / normsq;
						body.accelerate( pos.normalize().mult( g * mass ) );
					}					
				}				
            }

            scratch.done();
        }
    };
});



// ---
// inside: src/behaviors/sweep-prune.js

/**
 * Sweep and Prune implementation for broad phase collision detection
 * @module behaviors/sweep-prune
 */
Physics.behavior('sweep-prune', function( parent ){

    var PUBSUB_CANDIDATES = 'collisions:candidates';
    var uid = 1;

    /**
     * Get a unique numeric id for internal use
     * @return {Number} Unique id
     */
    var getUniqueId = function getUniqueId(){

        return uid++;
    };

    // add z: 2 to get this to work in 3D
    var dof = { x: 0, y: 1 }; // degrees of freedom

    /**
     * return hash for a pair of ids
     * @param  {Number} id1 First id
     * @param  {Number} id2 Second id
     * @return {Number}     Hash id
     */
    function pairHash( id1, id2 ){

        if ( id1 === id2 ){

            return false;
        }

        // valid for values < 2^16
        return id1 > id2? 
            (id1 << 16) | (id2 & 0xFFFF) : 
            (id2 << 16) | (id1 & 0xFFFF)
            ;
    }
    
    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            this.clear();
        },

        /**
         * Refresh tracking data
         * @return {void}
         */
        clear: function(){

            this.tracked = [];
            this.pairs = []; // pairs selected as candidate collisions by broad phase
            this.intervalLists = {}; // stores lists of aabb projection intervals to be sorted
            
            // init intervalLists
            for ( var xyz in dof ){

                this.intervalLists[ xyz ] = [];
            }
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.subscribe( 'add:body', this.trackBody, this );
            world.subscribe( 'remove:body', this.untrackBody, this );
            world.subscribe( 'integrate:velocities', this.sweep, this );

            // add current bodies
            var bodies = world.getBodies();
            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                this.trackBody({ body: bodies[ i ] });
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.unsubscribe( 'add:body', this.trackBody );
            world.unsubscribe( 'remove:body', this.untrackBody );
            world.unsubscribe( 'integrate:velocities', this.sweep );
            this.clear();
        },

        /**
         * Execute the broad phase and get candidate collisions
         * @return {Array} List of candidates
         */
        broadPhase: function(){

            this.updateIntervals();
            this.sortIntervalLists();
            return this.checkOverlaps();
        },

        /**
         * Simple insertion sort for each axis
         * @return {void}
         */
        sortIntervalLists: function(){

            var list
                ,len
                ,i
                ,hole
                ,bound
                ,boundVal
                ,left
                ,leftVal
                ,axis
                ;

            // for each axis...
            for ( var xyz in dof ){

                // get the intervals for that axis
                list = this.intervalLists[ xyz ];
                i = 0;
                len = list.length;
                axis = dof[ xyz ];

                // for each interval bound...
                while ( (++i) < len ){

                    // store bound
                    bound = list[ i ];
                    boundVal = bound.val.get( axis );
                    hole = i;

                    left = list[ hole - 1 ];
                    leftVal = left && left.val.get( axis );

                    // while others are greater than bound...
                    while ( 
                        hole > 0 && 
                        (
                            leftVal > boundVal ||
                            // if it's an equality, only move it over if 
                            // the hole was created by a minimum
                            // and the previous is a maximum
                            // so that we detect contacts also
                            leftVal === boundVal &&
                            ( left.type && !bound.type )
                        )
                    ) {

                        // move others greater than bound to the right
                        list[ hole ] = left;
                        hole--;
                        left = list[ hole - 1 ];
                        leftVal = left && left.val.get( axis );
                    }

                    // insert bound in the hole
                    list[ hole ] = bound;
                }
            }
        },

        /**
         * Get a pair object for the tracker objects
         * @param  {Object} tr1      First tracker
         * @param  {Object} tr2      Second tracker
         * @param  {Boolean} doCreate Create if not already found
         * @return {Mixed}          Pair object or null if not found
         */
        getPair: function(tr1, tr2, doCreate){

            var hash = pairHash( tr1.id, tr2.id );

            if ( hash === false ){
                return null;
            }

            var c = this.pairs[ hash ];

            if ( !c ){

                if ( !doCreate ){
                    return null;
                }

                c = this.pairs[ hash ] = {
                    bodyA: tr1.body,
                    bodyB: tr2.body,
                    flag: 0
                };
            }

            return c;
        },

        /**
         * Check each axis for overlaps of bodies AABBs
         * @return {Array} List of candidate collisions 
         */
        checkOverlaps: function(){

            var isX
                ,hash
                ,tr1
                ,tr2
                ,bound
                ,list
                ,len
                ,i
                ,j
                ,c
                // determine which axis is the last we need to check
                ,collisionFlag = ( dof.z || dof.y || dof.x )
                ,encounters = []
                ,enclen = 0
                ,candidates = []
                ;

            for ( var xyz in dof ){

                // is the x coord
                isX = (xyz === 'x');
                // get the interval list for this axis
                list = this.intervalLists[ xyz ];
                i = -1;
                len = list.length;

                // for each interval bound
                while ( (++i) < len ){
                    
                    bound = list[ i ];
                    tr1 = bound.tracker;

                    if ( bound.type ){

                        // is a max

                        j = enclen;

                        while ( (--j) >= 0 ){

                            tr2 = encounters[ j ];

                            // if they are the same tracked interval
                            if ( tr2 === tr1 ){

                                // remove the interval from the encounters list
                                // faster than .splice()
                                if ( j < enclen - 1 ) {
                                    
                                    encounters[ j ] = encounters.pop();

                                } else {

                                    // encountered a max right after a min... no overlap
                                    encounters.pop();
                                }

                                enclen--;

                            } else {

                                // check if we have flagged this pair before
                                // if it's the x axis, create a pair
                                c = this.getPair( tr1, tr2, isX );

                                if ( c ){
                                    
                                    // if it's the x axis, set the flag
                                    // to = 1.
                                    // if not, increment the flag by one.
                                    c.flag = isX? 0 : c.flag + 1;

                                    // c.flag will equal collisionFlag 
                                    // if we've incremented the flag
                                    // enough that all axes are overlapping
                                    if ( c.flag === collisionFlag ){

                                        // overlaps on all axes.
                                        // add it to possible collision
                                        // candidates list for narrow phase

                                        candidates.push( c );
                                    }
                                }
                            }
                        }

                    } else {

                        // is a min
                        // just add this minimum to the encounters list
                        enclen = encounters.push( tr1 );
                    }
                }
            }

            return candidates;
        },

        /**
         * Update position intervals on each axis
         * @return {[type]} [description]
         */
        updateIntervals: function(){

            var tr
                ,intr
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,aabb = scratch.vector()
                ,list = this.tracked
                ,i = list.length
                ;

            // for all tracked bodies
            while ( (--i) >= 0 ){

                tr = list[ i ];
                intr = tr.interval;
                pos.clone( tr.body.state.pos );
                aabb.clone( tr.body.aabb() );

                // copy the position (plus or minus) the aabb bounds
                // into the min/max intervals
                intr.min.val.clone( pos ).vsub( aabb );
                intr.max.val.clone( pos ).vadd( aabb );
            }

            scratch.done();
        },

        /**
         * Add body to list of those tracked by sweep and prune
         * @param  {Object} data Event data
         * @return {void}
         */
        trackBody: function( data ){

            var body = data.body
                ,tracker = {

                    id: getUniqueId(),
                    body: body
                }
                ,intr = {

                    min: {
                        type: false, //min
                        val: Physics.vector(),
                        tracker: tracker
                    },

                    max: {
                        type: true, //max
                        val: Physics.vector(),
                        tracker: tracker
                    }
                }
                ;

            tracker.interval = intr;
            this.tracked.push( tracker );
            
            for ( var xyz in dof ){

                this.intervalLists[ xyz ].push( intr.min, intr.max );
            }
        },

        /**
         * Remove body from list of those tracked
         * @param  {Object} data Event data
         * @return {void}
         */
        untrackBody: function( data ){

            var body = data.body
                ,list
                ,minmax
                ,trackedList = this.tracked
                ,tracker
                ,count
                ;

            for ( var i = 0, l = trackedList.length; i < l; ++i ){

                tracker = trackedList[ i ];
                
                if ( tracker.body === body ){

                    // remove the tracker at this index
                    trackedList.splice(i, 1);

                    for ( var xyz in dof ){

                        count = 0;
                        list = this.intervalLists[ xyz ];

                        for ( var j = 0, m = list.length; j < m; ++j ){
                                
                            minmax = list[ j ];

                            if ( minmax === tracker.interval.min || minmax === tracker.interval.max ){

                                // remove interval from list
                                list.splice(j, 1);
                                j--;
                                l--;

                                if (count > 0){
                                    break;
                                }

                                count++;
                            }
                        }
                    }

                    break;
                }
            }            
        },

        /**
         * Sweep and publish event if any candidate collisions are found
         * @param  {Object} data Event data
         * @return {void}
         */
        sweep: function( data ){

            var self = this
                ,bodies = data.bodies
                ,dt = data.dt
                ,candidates
                ;

            candidates = self.broadPhase();
            
            if ( candidates.length ){

                this._world.publish({
                    topic: PUBSUB_CANDIDATES,
                    candidates: candidates
                });
            }
        }
    };
});

// ---
// inside: src/behaviors/verlet-constraints.js

/**
 * Verlet constraints manager.
 * Handles distance constraints, and angle constraints
 * @module behaviors/rigid-constraint-manager
 */
Physics.behavior('verlet-constraints', function( parent ){

    var TWOPI = 2 * Math.PI;

    var defaults = {

        // number of iterations to resolve constraints
        iterations: 2
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call(this, options);

            Physics.util.extend(this.options, defaults, options);

            this._distanceConstraints = [];
            this._angleConstraints = [];
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            var intg = world.integrator();

            if ( intg && intg.name.indexOf('verlet') < 0 ){

                throw 'The rigid constraint manager needs a world with a "verlet" compatible integrator.';
            }

            world.subscribe('integrate:positions', this.resolve, this);
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.unsubscribe('integrate:positions', this.resolve);
        },

        /**
         * Remove all constraints
         * @return {self}
         */
        drop: function(){

            // drop the current constraints
            this._distanceConstraints = [];
            this._angleConstraints = [];
            return this;
        },

        /**
         * Constrain two bodies to a target relative distance
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        distanceConstraint: function( bodyA, bodyB, stiffness, targetLength ){

            var cst;

            if (!bodyA || !bodyB){
                return false;
            }

            cst = {
                id: Physics.util.uniqueId('dis-constraint'),
                type: 'dis',
                bodyA: bodyA,
                bodyB: bodyB,
                stiffness: stiffness || 0.5,
                targetLength: typeof targetLength == 'number' ? targetLength : bodyB.state.pos.dist( bodyA.state.pos )
            };

            cst.targetLengthSq = cst.targetLength * cst.targetLength;
			this._monitorRemove(cst, bodyA, bodyB);
            this._distanceConstraints.push( cst );
            return cst;
        },

		_monitorRemove: function(cst /* bodies */) {
			var self = this,
				args = arguments,
				l = args.length;
				
			this._world.subscribe('remove:body', function removeConstraint(data) {
				for (var i = 1; i < l; i++) {
					if (data.body == args[i]) {
						self._world.unsubscribe('remove:body', removeConstraint);
						self.remove(cst);
					}
				}
			});
		},

        /**
         * Constrain three bodies to a target relative angle
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Object} bodyC        Third body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        angleConstraint: function( bodyA, bodyB, bodyC, stiffness, targetAngle ){

            var cst;

            if (!bodyA || !bodyB){

                return false;
            }

            cst = {
                id: Physics.util.uniqueId('ang-constraint'),
                type: 'ang',
                bodyA: bodyA,
                bodyB: bodyB,
                bodyC: bodyC,
                stiffness: stiffness || 0.5,
                targetAngle: targetAngle || bodyB.state.pos.angle2( bodyA.state.pos, bodyC.state.pos )
            };

			this._monitorRemove(cst, bodyA, bodyB, bodyC);
            this._angleConstraints.push( cst );
            return cst;
        },

        /**
         * Remove a constraint
         * @param  {Mixed} indexCstrOrId Either the constraint object or the constraint id
         * @return {self}
         */
        remove: function( cstrOrId ){

            var constraints
                ,type
                ,isObj
                ,i
                ,l
                ;

            isObj = Physics.util.isObject( cstrOrId );

            type = (isObj) ? cstrOrId.type : cstrOrId.substr(0, 3);
            constraints = ( type === 'ang' ) ? this._angleConstraints : this._distanceConstraints;

            if ( isObj ){

                for ( i = 0, l = constraints.length; i < l; ++i ){
                    
                    if ( constraints[ i ] === cstrOrId ){

                        constraints.splice( i, 1 );
                        return this;
                    }
                }
            } else {

                for ( i = 0, l = constraints.length; i < l; ++i ){
                    
                    if ( constraints[ i ].id === cstrOrId ){

                        constraints.splice( i, 1 );
                        return this;
                    }
                }
            }

            return this;
        },

        resolveAngleConstraints: function( coef ){

            var constraints = this._angleConstraints
                ,scratch = Physics.scratchpad()
                ,trans = scratch.transform()
                ,con
                ,ang
                ,corr
                ,proportion
                ,invMassSum
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                ang = con.bodyB.state.pos.angle2( con.bodyA.state.pos, con.bodyC.state.pos );
                corr = ang - con.targetAngle;

                if (!corr){

                    continue;

                } else if (corr <= -Math.PI){
                
                    corr += TWOPI;

                } else if (corr >= Math.PI){
                
                    corr -= TWOPI;
                }

                trans.setTranslation( con.bodyB.state.pos );

                corr *= -coef * con.stiffness;

                if ( !con.bodyA.fixed && !con.bodyB.fixed && !con.bodyC.fixed ){
                    invMassSum = 1 / (con.bodyA.mass + con.bodyB.mass + con.bodyC.mass);
                }

                if ( !con.bodyA.fixed ){

                    if ( !con.bodyB.fixed && !con.bodyC.fixed ){
                        
                        ang = corr * (con.bodyB.mass + con.bodyC.mass) * invMassSum;

                    } else if ( con.bodyB.fixed ){

                        ang = corr * con.bodyC.mass / ( con.bodyC.mass + con.bodyA.mass );

                    } else {

                        ang = corr * con.bodyB.mass / ( con.bodyB.mass + con.bodyA.mass );
                    }

                    // ang = corr;

                    trans.setRotation( ang );
                    con.bodyA.state.pos.translateInv( trans );
                    con.bodyA.state.pos.rotate( trans );
                    con.bodyA.state.pos.translate( trans );
                }

                if ( !con.bodyC.fixed ){

                    if ( !con.bodyA.fixed && !con.bodyB.fixed ){
                        
                        ang = -corr * (con.bodyB.mass + con.bodyA.mass) * invMassSum;

                    } else if ( con.bodyB.fixed ){

                        ang = -corr * con.bodyA.mass / ( con.bodyC.mass + con.bodyA.mass );
                        
                    } else {

                        ang = -corr * con.bodyB.mass / ( con.bodyB.mass + con.bodyC.mass );
                    }

                    // ang = -corr;

                    trans.setRotation( ang );
                    con.bodyC.state.pos.translateInv( trans );
                    con.bodyC.state.pos.rotate( trans );
                    con.bodyC.state.pos.translate( trans );
                }

                if ( !con.bodyB.fixed ){

                    if ( !con.bodyA.fixed && !con.bodyC.fixed ){
                        
                        ang = corr * (con.bodyA.mass + con.bodyC.mass) * invMassSum;

                    } else if ( con.bodyA.fixed ){

                        ang = corr * con.bodyC.mass / ( con.bodyC.mass + con.bodyB.mass );
                        
                    } else {

                        ang = corr * con.bodyA.mass / ( con.bodyA.mass + con.bodyC.mass );
                    }

                    // ang = corr;

                    trans.setRotation( ang ).setTranslation( con.bodyA.state.pos );
                    con.bodyB.state.pos.translateInv( trans );
                    con.bodyB.state.pos.rotate( trans );
                    con.bodyB.state.pos.translate( trans );

                    trans.setTranslation( con.bodyC.state.pos );
                    con.bodyB.state.pos.translateInv( trans );
                    con.bodyB.state.pos.rotateInv( trans );
                    con.bodyB.state.pos.translate( trans );
                }
            }

            scratch.done();
        },

        resolveDistanceConstraints: function( coef ){

            var constraints = this._distanceConstraints
                ,scratch = Physics.scratchpad()
                ,BA = scratch.vector()
                ,con
                ,len
                ,corr
                ,proportion
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                // move constrained bodies to target length based on their
                // mass proportions
                BA.clone( con.bodyB.state.pos ).vsub( con.bodyA.state.pos );
                len = BA.normSq() || Math.random() * 0.0001;
                corr = coef * con.stiffness * ( len - con.targetLengthSq ) / len;
                
                BA.mult( corr );
                proportion = (con.bodyA.fixed || con.bodyB.fixed) ? 1 : con.bodyB.mass / (con.bodyA.mass + con.bodyB.mass);

                if ( !con.bodyA.fixed ){

                    if ( !con.bodyB.fixed ){
                        BA.mult( proportion );
                    }

                    con.bodyA.state.pos.vadd( BA );

                    if ( !con.bodyB.fixed ){
                        BA.mult( 1 / proportion );
                    }
                }

                if ( !con.bodyB.fixed ){

                    if ( !con.bodyA.fixed ){
                        BA.mult( 1 - proportion );
                    }

                    con.bodyB.state.pos.vsub( BA );
                }
            }

            scratch.done();
        },

        shuffleConstraints: function(){

            this._distanceConstraints = Physics.util.shuffle( this._distanceConstraints );
            this._angleConstraints = Physics.util.shuffle( this._angleConstraints );
        },

        /**
         * Resolve constraints
         * @return {void}
         */
        resolve: function(){

            var its = this.options.iterations
                ,coef = 1 / its
                ;

            for (var i = 0; i < its; i++){

                // this.shuffleConstraints();
                this.resolveDistanceConstraints( coef );
                this.resolveAngleConstraints( coef );
            }
        },

        /**
         * Get all constraints
         * @return {Object} The object containing copied arrays of the constraints
         */
        getConstraints: function(){

            return {
                distanceConstraints: [].concat(this._distanceConstraints),
                angleConstraints: [].concat(this._angleConstraints)
            };
        }
    };
});


// ---
// inside: src/integrators/improved-euler.js

Physics.integrator('improved-euler', function( parent ){

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init
            parent.init.call(this, options);
        },

        /**
         * Velocity integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integrateVelocities: function( bodies, dt ){

            // half the timestep squared
            var drag = 1 - this.options.drag
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // Inspired from https://github.com/soulwire/Coffee-Physics
                    // @licence MIT
                    // 
                    // x += (v * dt) + (a * 0.5 * dt * dt)
                    // v += a * dt

                    
                    // Scale force to mass.
                    // state.acc.mult( body.massInv );

                    // Remember velocity for future use.
                    state.old.vel.clone( state.vel );

                    // remember original acc
                    state.old.acc.clone( state.acc );

                    // Update velocity first so we can reuse the acc vector.
                    // a *= dt
                    // v += a ...
                    state.vel.vadd( state.acc.mult( dt ) );

                    // Apply "air resistance".
                    if ( drag ){

                        state.vel.mult( drag );
                    }

                    // Reset accel
                    state.acc.zero();

                    //
                    // Angular components
                    // 

                    state.old.angular.vel = state.angular.vel;
                    state.angular.vel += state.angular.acc * dt;
                    state.angular.acc = 0;

                } else {
                    // set the velocity and acceleration to zero!
                    state.vel.zero();
                    state.acc.zero();
                    state.angular.vel = 0;
                    state.angular.acc = 0;
                }
            }
        },

        /**
         * Position integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integratePositions: function( bodies, dt ){

            // half the timestep squared
            var halfdtdt = 0.5 * dt * dt
                ,body = null
                ,state
                // use cached vector instances
                // so we don't need to recreate them in a loop
                ,scratch = Physics.scratchpad()
                ,vel = scratch.vector()
                ,angVel
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){


                    // Store previous location.
                    state.old.pos.clone( state.pos );

                    // Update position.
                    // ...
                    // oldV *= dt
                    // a *= 0.5 * dt
                    // x += oldV + a
                    vel.clone( state.old.vel );
                    state.pos.vadd( vel.mult( dt ) ).vadd( state.old.acc.mult( halfdtdt ) );

                    state.old.acc.zero();

                    //
                    // Angular components
                    // 

                    state.old.angular.pos = state.angular.pos;
                    state.angular.pos += state.old.angular.vel * dt + state.old.angular.acc * halfdtdt;
                    state.old.angular.acc = 0;

                }
            }

            scratch.done();
        }
    };
});



// ---
// inside: src/renderers/canvas.js

/**
 * A simple canvas renderer.
 * Renders circles and convex-polygons
 */
Physics.renderer('canvas', function( proto ){

    var Pi2 = Math.PI * 2
        // helper to create new dom elements
        ,newEl = function( node, content ){
            var el = document.createElement(node || 'div');
            if (content){
                el.innerHTML = content;
            }
            return el;
        }
        ;

    var defaults = {

        // draw aabbs of bodies for debugging
        debug: false,
        // the element to place meta data into
        metaEl: null,
        // default styles of drawn objects
        styles: {

            'point' : 'rgba(80, 50, 100, 0.7)',

            'circle' : {
                strokeStyle: 'rgba(70, 50, 100, 0.7)',
                lineWidth: 1,
                fillStyle: 'rgba(44, 105, 44, 0.7)',
                angleIndicator: 'rgba(69, 51, 78, 0.7)'
            },

            'convex-polygon' : {
                strokeStyle: 'rgba(80, 50, 100, 0.7)',
                lineWidth: 1,
                fillStyle: 'rgba(114, 105, 124, 0.7)',
                angleIndicator: 'rgba(69, 51, 78, 0.7)'
            }
        },
        offset: {x: 0, y: 0}
    };

    // deep copy callback to extend deeper into options
    var deep = function( a, b ){

        if ( Physics.util.isPlainObject( b ) ){

            return Physics.util.extend({}, a, b, deep );
        }

        return b !== undefined ? b : a;
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            // call proto init
            proto.init.call(this, options);

            // further options
            this.options = Physics.util.extend({}, defaults, this.options, deep);
            this.options.offset = Physics.vector( this.options.offset );


            // hidden canvas
            this.hiddenCanvas = document.createElement('canvas');
            this.hiddenCanvas.width = this.hiddenCanvas.height = 100;
            
            if (!this.hiddenCanvas.getContext){
                throw "Canvas not supported";
            }

            this.hiddenCtx = this.hiddenCanvas.getContext('2d');

            // actual viewport
            var viewport = this.el;
            if (viewport.nodeName.toUpperCase() !== "CANVAS"){

                viewport = document.createElement('canvas');
                this.el.appendChild( viewport );
                if (typeof this.options.el === 'string' && this.el === document.body){
                    viewport.id = this.options.el;
                }
                this.el = viewport;
            }

            viewport.width = this.options.width;
            viewport.height = this.options.height;

            this.ctx = viewport.getContext("2d");

            this.els = {};

            if (this.options.meta){
                var stats = this.options.metaEl || newEl();
                stats.className = 'pjs-meta';
                this.els.fps = newEl('span');
                this.els.ipf = newEl('span');
                stats.appendChild(newEl('span', 'fps: '));
                stats.appendChild(this.els.fps);
                stats.appendChild(newEl('br'));
                stats.appendChild(newEl('span', 'ipf: '));
                stats.appendChild(this.els.ipf);

                viewport.parentNode.insertBefore(stats, viewport);
            }
        },

        /**
         * Set the styles of specified context
         * @param {Object|String} styles Styles configuration for body drawing
         * @param {Canvas2DContext} ctx    (optional) Defaults to visible canvas context
         */
        setStyle: function( styles, ctx ){

            ctx = ctx || this.ctx;

            if ( Physics.util.isObject(styles) ){

                ctx.strokeStyle = styles.strokeStyle;
                ctx.fillStyle = styles.fillStyle;
                ctx.lineWidth = styles.lineWidth;

            } else {

                ctx.fillStyle = ctx.strokeStyle = styles;
                ctx.lineWidth = 1;
            }
        },

        /**
         * Draw a circle to specified canvas context
         * @param  {Number} x      The x coord
         * @param  {Number} y      The y coord
         * @param  {Number} r      The circle radius
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawCircle: function(x, y, r, styles, ctx){

            ctx = ctx || this.ctx;

            ctx.beginPath();
            this.setStyle( styles, ctx );
            ctx.arc(x, y, r, 0, Pi2, false);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        },

        /**
         * Draw a polygon to specified canvas context
         * @param  {Array} verts  Array of vectorish vertices
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawPolygon: function(verts, styles, ctx){

            var vert = verts[0]
                ,x = vert.x === undefined ? vert.get(0) : vert.x
                ,y = vert.y === undefined ? vert.get(1) : vert.y
                ,l = verts.length
                ;

            ctx = ctx || this.ctx;
            ctx.beginPath();
            this.setStyle( styles, ctx );

            ctx.moveTo(x, y);

            for ( var i = 1; i < l; ++i ){
                
                vert = verts[ i ];
                x = vert.x === undefined ? vert.get(0) : vert.x;
                y = vert.y === undefined ? vert.get(1) : vert.y;
                ctx.lineTo(x, y);
            }

            if (l > 2){
                ctx.closePath();
            }

            ctx.stroke();
            ctx.fill();
        },

        /**
         * Draw a line onto specified canvas context
         * @param  {Vectorish} from   Starting point
         * @param  {Vectorish} to     Ending point
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawLine: function(from, to, styles, ctx){

            var x = from.x === undefined ? from.get(0) : from.x
                ,y = from.y === undefined ? from.get(1) : from.y
                ;

            ctx = ctx || this.ctx;

            ctx.beginPath();
            this.setStyle( styles, ctx );

            ctx.moveTo(x, y);

            x = to.x === undefined ? to.get(0) : to.x;
            y = to.y === undefined ? to.get(1) : to.y;
            
            ctx.lineTo(x, y);
            
            ctx.stroke();
            ctx.fill();
        },

        /**
         * Create a view for specified geometry.
         * @param  {Geometry} geometry The geometry
         * @param  {Object|String} styles The styles configuration
         * @return {Image}          An image cache of the geometry
         */
        createView: function( geometry, styles ){

            var view = new Image()
                ,aabb = geometry.aabb()
                ,hw = aabb.halfWidth + Math.abs(aabb.pos.x)
                ,hh = aabb.halfHeight + Math.abs(aabb.pos.y)
                ,x = hw + 1
                ,y = hh + 1
                ,hiddenCtx = this.hiddenCtx
                ,hiddenCanvas = this.hiddenCanvas
                ,name = geometry.name
                ;

            styles = styles || this.options.styles[ name ];

            x += styles.lineWidth | 0;
            y += styles.lineWidth | 0;
            
            // clear
            hiddenCanvas.width = 2 * hw + 2 + (2 * styles.lineWidth|0);
            hiddenCanvas.height = 2 * hh + 2 + (2 * styles.lineWidth|0);

            hiddenCtx.save();
            hiddenCtx.translate(x, y);

            if (name === 'circle'){

                this.drawCircle(0, 0, geometry.radius, styles, hiddenCtx);

            } else if (name === 'convex-polygon'){

                this.drawPolygon(geometry.vertices, styles, hiddenCtx);
            }

            if (styles.angleIndicator){

                hiddenCtx.beginPath();
                this.setStyle( styles.angleIndicator, hiddenCtx );
                hiddenCtx.moveTo(0, 0);
                hiddenCtx.lineTo(hw, 0);
                hiddenCtx.closePath();
                hiddenCtx.stroke();
            }

            hiddenCtx.restore();

            view.src = hiddenCanvas.toDataURL("image/png");
            view.width = hiddenCanvas.width;
            view.height = hiddenCanvas.height;
            return view;
        },

        /**
         * Draw the meta data
         * @param  {Object} meta The meta data
         * @return {void}
         */
        drawMeta: function( meta ){

            this.els.fps.innerHTML = meta.fps.toFixed(2);
            this.els.ipf.innerHTML = meta.ipf;
        },

        /**
         * Callback to be run before rendering
         * @private
         * @return {void}
         */
        beforeRender: function(){

            // clear canvas
            this.ctx.clearRect(0, 0, this.el.width, this.el.height);
        },

        /**
         * Draw a body to canvas
         * @param  {Body} body The body to draw
         * @param  {Image} view The view for that body
         * @return {void}
         */
        drawBody: function( body, view ){

            var ctx = this.ctx
                ,pos = body.state.pos
                ,offset = this.options.offset
                ,aabb = body.aabb()
                ;

            ctx.save();
            ctx.translate(pos.get(0) + offset.get(0), pos.get(1) + offset.get(1));
            ctx.rotate(body.state.angular.pos);
            ctx.drawImage(view, -view.width/2, -view.height/2);
            ctx.restore();

            if ( this.options.debug ){
                // draw bounding boxes
                ctx.save();
                ctx.translate(offset.get(0), offset.get(1));
                this.drawPolygon([
                        { x: aabb.pos.x - aabb.x, y: aabb.pos.y - aabb.y },
                        { x: aabb.pos.x + aabb.x, y: aabb.pos.y - aabb.y },
                        { x: aabb.pos.x + aabb.x, y: aabb.pos.y + aabb.y },
                        { x: aabb.pos.x - aabb.x, y: aabb.pos.y + aabb.y }
                    ], 'rgba(100, 255, 100, 0.3)');
                ctx.restore();
            }
        }
    };
});


// ---
// inside: src/renderers/dom.js

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
				
				body.rendered(pos);
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

// ---
// inside: src/outro.js

return Physics;
}));