/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/03/23 17:29 PM)
 * Released under the MIT License
 */
(function(global , factory ){
  	
  	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  	
  	typeof define === 'function' && define.amd ? define('ppModel', factory) :
	
	(global = global || self, (function () {
        
    var exports = global.ppModel = factory();    

	}()
	
));

})( this,(function() {

	return function(){

			/**
			*@property {object} events - Container of events
			*@author Carlos Illesca <c4rl0sill3sc4@gmail.com>
			*@memberof ppModel
			*/
			this.events = {};
			/**
			*on
			*@param {string} eventName - name event 
			*@param {function} callbacks - Function for execute when emit event name
			*@author Carlos Illesca <c4rl0sill3sc4@gmail.com>
			*@memberof ppModel
			*@returns {void} 
			*/
			this.on = function( eventName , callbacks ){
				if( typeof eventName == "string" ){
					if( typeof callbacks == "function" ){            
						if( !this.events.hasOwnProperty(eventName) ){
							this.events[ eventName ] = [];
						}            
					this.events[ eventName ].push( callbacks );
					}
				}  
			}
			/**
			*emit
			*@param {string} eventName - name for events call
			*@memberof ppModel
			*@returns {void}	    
			*/
			this.emit = function( eventName ){        
				var i, listeners, length, args = [].slice.call(arguments, 1);
				if (typeof this.events[eventName] === 'object') {
				  listeners = this.events[eventName].slice();         
				  length = listeners.length;
				  for (i = 0; i < length; i++) {
				      listeners[i].apply(this, args);
				  }
				}
			}	  

			this.removeListener = function( eventName , callbacks ){
				var idx; 
				if( typeof this.events[eventName] === 'object' ){
					
					idx = this.events[eventName].indexOf(callbacks);
										
					if( idx > -1 ){
						this.events[eventName].splice(idx,1);
					}
					
				}
			}

			
//---------------------------------------
	}


}));	