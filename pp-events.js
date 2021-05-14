/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.0.9 (2020/05/14 18:12 PM)
 * Released under the MIT License
 */
(function(global,factory){
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('ppEvents', factory) :
  (global = global || self, (function () {
    var exports = global.ppEvents = factory();
	}()
));
})(this,function(){
	/**
	*@var {object} events - Container of events
	*/
  	var events = {};
  	/*
  	*@var {function} toString - link of native function from object prototype
  	*/
  	var toString =  Object.prototype.toString;
  	/*
  	*@var {function} isString - check if value is type String
  	*/
	var isString = function( value  ){
	 return toString.call( value ) === '[object String]'
	}
	/*
  	*@var {function} isFunction - check if value is type String
  	*/
	var isFunction = function( value  ){
	 return toString.call( value ) === '[object Function]'
	}
	/*
  	*@var {function} ppEvents - main function
  	*/
  	var ppEvents = function(){},
	/*
	*@var {object} proto - link to prototype from main function
	*/
  proto = ppEvents.prototype;
  /**
	*on
	*@param {string} eventName - name event
	*@returns {boolean}
  *@description -> check if events var have callbacks assign
	*/
  proto.checkOn = function( eventName ){
    return isString(eventName) ?  events.hasOwnProperty(eventName) : false;
  }
	/**
	*on
	*@param {string} eventName - name event
	*@param {function} callbacks - Function for execute when emit event name
	*@returns {void}
	*/
	proto.on = function( eventName , callbacks ){
	  if( isString( eventName ) && isFunction(callbacks) ){
	    if( !events.hasOwnProperty(eventName) ){
	      events[ eventName ] = []
	    }
	    events[ eventName ].push( callbacks );
	  }
	}
	/**
	*emit
	*@param {string} eventName - name for events call
	*@returns {void}
	*/
	proto.emit = function( eventName ){
		var i, listeners, length, args = [].slice.call(arguments, 1);
		if (typeof events[eventName] === 'object') {
		  listeners = events[eventName].slice();

		  for (i = 0; i < listeners.length; i++) {
		      listeners[i].apply(this, args);
		  }

		}
	}
	/**
	*removeListener
	*@param {string} eventName - name for events call
	*@param {funcion} function - funcion will be remove
	*@returns {void}
	*/
	proto.removeListener = function( eventName , callbacks ){
			var idx;
			if( typeof events[eventName] === 'object' ){
				idx = events[eventName].indexOf(callbacks);
				if( idx > -1 ){
					events[eventName].splice(idx,1);
				}
			}
	}
  return ppEvents;
});
