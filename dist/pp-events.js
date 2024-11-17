/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.3.0 (2024/11/17 01:44 AM)
 * Released under the MIT License
 */
;(function(){
"use strict";
const ppEvents = function( is ){  
		var self = this;
		if(!(self instanceof ppEvents)){ return new ppEvents(is) }					
		const isF = is.isFunction, isS = is.isString, isU = is.isUndefined, isA = is.isArray;
		self.events = {}
		/**
		*on
		*@param {string} eventName - name event
		*@returns {boolean}
		*@description -> check if events var have callbacks assign
		*/
		self.checkOn = (eventName) => isS(eventName,(n)=>Object.hasOwnProperty.call( self.events , n ))
		/**
		*on
		*@param {string} eventName - name event
		*@param {function} callbacks - Function for execute when emit event name
		*@returns {void}
		*/		
		self.on = ( eventName , callbacks ) => {
		  if( isS( eventName ) && isF(callbacks) ){
			let self_events = self.events;
			if( isU( self_events[ eventName ] ) ){
				self_events[eventName] = [callbacks];
			}else{
				self_events[eventName].push(callbacks);
			}			
		  }
		}
		/**
		*emit
		*@param {string} eventName - name for events call
		*@returns {void}
		*/
		self.emit = ( eventName , ...args) => {
			 if( isA( self.events[eventName] )  ){			
				for (const listener of self.events[eventName].slice() ) {				
					listener.apply( self , args );
				}
			 }
		}
		/**
		*removeListener
		*@param {string} eventName - name for events call
		*@param {funcion} function - funcion will be remove
		*@returns {void}
		*/
		self.removeListener = ( eventName , callbacks ) => {
			if( isA(self.events[eventName]) ){			
				const idx = self.events[eventName].indexOf(callbacks);
				if( idx > -1 ){ self.events[eventName].splice(idx,1) }
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
		define(['pp-is'],(is)=>{			
			return ppEvents.bind(null,is)
		})
	}else if( freeModule ){		
		freeModule.exports = ppEvents.bind(null,require('pp-is')) 
	}else{		
		root.ppEvents = ppEvents.bind(null,ppIs)
	}
}.call(this))