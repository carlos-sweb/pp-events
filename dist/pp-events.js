/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.2.6 (2024/10/07 22:07 PM)
 * Released under the MIT License
 */
;(function(){
"use strict";
const events = ( is ) => {

  const isF = is.isFunction, isS = is.isString, isU = is.isUndefined, isA = is.isArray;
  
  function instanceEvents(){
		var self = this;
		if(!(self instanceof instanceEvents)){ return new instanceEvents(is) }
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
  return instanceEvents
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