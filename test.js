//------------------------------------------------------------------------------------
var events = require("./pp-events.min.js")
//------------------------------------------------------------------------------------
var Event = new events()
var Event2 = new events()
//------------------------------------------------------------------------------------
var sayHello = function( msg ){
	console.log(msg)
}
//------------------------------------------------------------------------------------
function A(msg1,msg2){
	console.log("Title1: "+msg1)
	console.log("Title2: "+msg2);
}
//------------------------------------------------------------------------------------
Event.on("sayHello", sayHello )
Event.on("sayHello", A )

Event2.on("sayHello", A )

// Event.removeListener("sayHello",sayHello);
// Event.removeListener("sayHello",A);
//------------------------------------------------------------------------------------
Event.emit("sayHello","Custom Message","Other Custom Message" )
//------------------------------------------------------------------------------------



