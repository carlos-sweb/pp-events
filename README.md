# pp-model.js

```
npm i pp-events --save
```

## Getting Started

In the web project include pp-model.js with:

```
<script src="https://cdn.jsdelivr.net/npm/pp-events@1.0.0/pp-events.min.js" ></script>
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

```

```
### emit: [Function]
```

```
### removeListener: [Function]
```

```