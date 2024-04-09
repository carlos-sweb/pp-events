//------------------------------------------------------------------------------------
var ppEvents = require("./pp-events.js")
//------------------------------------------------------------------------------------
var Event = ppEvents()
var Event2 = ppEvents()
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


console.log(  "Checkon => " , Event.checkOn("None") );


Event2.on("sayHello", A )

// Event.removeListener("sayHello",sayHello);
// Event.removeListener("sayHello",A);
//------------------------------------------------------------------------------------
Event.emit("sayHello","Custom Message","Other Custom Message" )
//------------------------------------------------------------------------------------



