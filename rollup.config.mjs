export default {
	input: "./dist/pp-events.js",
	output: {
		name : "ppEvents",
		compact:false,
		file: "./dist/pp-events.rollup.js",
		format: "umd",
		globals: {
      	 "pp-is": "ppIs"
    	}
	},
	external: ['pp-is']
};