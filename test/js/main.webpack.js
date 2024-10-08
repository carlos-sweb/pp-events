import ppEvents from './../../dist/pp-events.js';

const Event = ppEvents()
const Event2 = ppEvents()
//------------------------------------------------------------------------------------
const sayHello = function( msg ){
	console.log(msg)
}
//------------------------------------------------------------------------------------
const A = (msg1,msg2) => {
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
