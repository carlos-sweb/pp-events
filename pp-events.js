/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.2.5 (2024/04/08 18:39 PM)
 * Released under the MIT License
 */
;(function(){

function events( is ){
	
		const isF = is.isFunction,
	  isS = is.isString,
	  isU = is.isUndefined,
	  isA = is.isArray;

  /*
  *@var {function} instanceEvents - main function
  */
  return function instanceEvents(){
  	
  	if (!(this instanceof instanceEvents) ) {
				return new instanceEvents(is);
		}	 

  	
		this.events = {};
		/**
		*on
		*@param {string} eventName - name event
		*@returns {boolean}
		*@description -> check if events var have callbacks assign
		*/
		this.checkOn = function( eventName ){		  
	    return isS(eventName) ? Object.prototype.hasOwnProperty.call( this.events , eventName ) : false;
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

}

/** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd){
  	define(['pp-is'],(is)=>events(is))
  }else if( freeModule ){
    freeModule.exports = events( require('pp-is') )
  }else{
    root.ppEvents = events(root.ppIs)
  }
}.call(this))