var events = require("./pp-events.min.js");

var Event = new events();

var sayHello = function( msg ){
	console.log(msg);
}
function A(msg){
	console.log("aaa "+msg);
}

Event.on("sayHello",sayHello)
Event.on("sayHelloOtro",sayHello)
Event.on("sayHello",A)

Event.emit("sayHello","Mensajes personalizados");