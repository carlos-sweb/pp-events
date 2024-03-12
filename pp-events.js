/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.2.4 (2024/03/12 00:07 AM)
 * Released under the MIT License
 */
(function(global,factory){
  'use strict';
  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global;
    if (typeof define === 'function' && define.amd) {
      define(['ppIs','exports'], function(ppIs, exports) {
        root.ppEvents = factory( root , exports , ppIs );
      });
    } else if (typeof exports !== 'undefined') {
      var ppIs = {};
      try { ppIs = require('pp-is'); } catch (e) {}
      module.exports = factory(root, exports, ppIs );
    } else {
      root.ppEvents = factory(root, {}, root.ppIs );
    }

})(this,function( root, exports , ppIs ){
 	
  const isF = ppIs.isFunction,
  isS = ppIs.isString,
  isU = ppIs.isUndefined,
  isA = ppIs.isArray;
  
  /*
  *@var {function} ppEvents - main function
  */
  return function(){

	this.events = {};
	/**
	*on
	*@param {string} eventName - name event
	*@returns {boolean}
	*@description -> check if events var have callbacks assign
	*/
	this.checkOn = function( eventName ){		  
    return isS(eventName) ? this.events.hasOwnProperty(eventName) : false;
	}
	/**
	*on
	*@param {string} eventName - name event
	*@param {function} callbacks - Function for execute when emit event name
	*@returns {void}
	*/
	this.on = function( eventName , callbacks ){		
	  if( isS( eventName ) && isF(callbacks) ){								
		 !isU( this.events[ eventName ] , () => { this.events[eventName] = [];return false;}) ? 
		 this.events[eventName].push( callbacks ) : 
		 void(0);
	  }
	}
	/**
	*emit
	*@param {string} eventName - name for events call
	*@returns {void}
	*/
	this.emit = function( eventName , ...args){		 		 
		 if( isA( this.events[eventName] )  ){			
			for (const listener of this.events[eventName].slice() ) {				
				listener.apply(this, args);
			}
		 }
	}
	/**
	*removeListener
	*@param {string} eventName - name for events call
	*@param {funcion} function - funcion will be remove
	*@returns {void}
	*/
	this.removeListener = function( eventName , callbacks ){
		if( isA(this.events[eventName]) ){			
			const idx = this.events[eventName].indexOf(callbacks);
			if( idx > -1 ){ this.events[eventName].splice(idx,1) }
		}				
	}

  }

});