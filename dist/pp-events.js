/*!!
 * Power Panel pp-events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.3.4 (2025/07/01 22:16 PM)
 * Released under the MIT License
 */ 
import { isUndefined , isString , isArray , isFunction , isObject } from "pp-is"
function ppEvents (events){
	var self = this;
	if(!(self instanceof ppEvents)){ return new ppEvents(events) }
	self.events = {}
	/**
	*on
	*@param {string} eventName - name event
	*@returns {boolean}
	*@description -> check if events var have callbacks assign
	*/
	self.checkOn = (eventName) => isString(eventName,(n)=>Object.hasOwnProperty.call( self.events , n ))
	/**
	*on
	*@param {string} eventName - name event
	*@param {function} callbacks - Function for execute when emit event name
	*@returns {void}
	*/		
	self.on = ( eventName , callbacks ) => {
	  isString(eventName,(n)=>{isFunction(callbacks,(c)=>{
	  		let self_events = self.events
			isUndefined( self_events[ n ] ,
			()=>{ self_events[n] = [c] },
			()=>{ self_events[n].push(c) })			
	  })})	  
	}
	/**
	*emit
	*@param {string} eventName - name for events call
	*@returns {void}
	*/
	self.emit = ( eventName , ...args) => {
	 isString(eventName,(n)=>{ 
	 	isArray(self.events[n],(arr)=>{	 	
		 	for( const listener of arr.slice() ){
		 		listener.apply(self,args)
			}
	 	})
	 })	 
	}
	/**
	*removeListener
	*@param {string} eventName - name for events call
	*@param {funcion} function - funcion will be remove
	*@returns {void}
	*/
	// Aqui hay que trabajar
	self.removeListener = ( eventName , callbacks ) => {
		isString(eventName,(n)=>{
		 isArray(self.events[n],(arr)=>{
		 	const idx = arr.indexOf(callbacks);
		 	if( idx > -1 ) arr.splice(idx,1)
		 });
		});				
	}
	// We initialize the events loaded in the constructor.
	isObject(events,()=>{		
		for(const name in events){
			self.on(name,events[name])
		}
	})
}

export { ppEvents as default }