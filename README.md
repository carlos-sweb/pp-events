# pp-events.js

```
npm i pp-events --save
```

## Getting Started

In the web project include pp-model.js with:

```
<script src="https://cdn.jsdelivr.net/npm/pp-events@1.0.4/pp-events.min.js" ></script>
```

Or 

## Install

```
npm i pp-events --save
```

## Initialize

```javascript
// Declare event manager here
var Event = new events()

//say hello function for execute
var sayHello = function( msg ){
	console.log(msg)
}

Event.on("sayHello",sayHello)

Event.emit("sayHello","Hi everyone !!!!!")

// remove Events if will be necesary

Event.removeListener("satHello",sayHello);

```

## Methods

### on: [Function]

```javascript
Event.on("eventName",myFunction);
```
### emit: [Function]
```javascript
Event.on("eventName",{
	mydata:"myvalue",
	otherData:"otherValue"
});
```
### removeListener: [Function]
```javascript
Event.removeListener("eventName",myFunction);
```