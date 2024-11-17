const Event = ppEvents()
const Event2 = ppEvents()
//------------------------------------------------------------------------------------
const sayHello = function( msg ){
	console.log("");	
	console.log(" fn : sayHello");
	console.log(" "+msg)
	console.log("");	
}
//------------------------------------------------------------------------------------
const A = (msg1,msg2) => {
	console.log("");	
	console.log(" fn : A");
	console.log(" Title1: "+msg1)
	console.log(" Title2: "+msg2);
	console.log("")
}
//------------------------------------------------------------------------------------
Event.on("sayHello", sayHello )
Event.on("sayHello", A )

// GET false
console.log(  "Checkon => " , Event.checkOn("None") );

Event2.on("sayHello", A )

// Event.removeListener("sayHello",sayHello);
// Event.removeListener("sayHello",A);
//------------------------------------------------------------------------------------
Event.emit("sayHello","-> Custom Message","Other Custom Message" )
Event2.emit("sayHello","I Love js","I Love nodejs");
//------------------------------------------------------------------------------------