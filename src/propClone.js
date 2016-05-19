export { propClone };

function propClone(obj, properties) {
	let clone = Object.create(obj);
	for (var prop in obj) {
		if (typeof obj[prop] !== "object") {
			console.log(prop + " is scalar prop!");
		}
	}
	properties.forEach(function(prop) {
		console.log("Object." + prop + " " + obj[prop]);
		if (typeof(obj[prop]) == "object") {
			console.log("Is object!");
			clone[prop] = Object.create(obj[prop]);
		}
	});
	return clone;
}

// let obj = {prop1: 1, prop2: {subprop: 1}, prop3: {subprop: 1}};
// let clone = propClone(obj, ["prop2"]);
// //изменился только clone
// console.log("Before (clone.prop2.subprop = 3) ###");
// console.log("Clone: " + clone.prop2.subprop + " Object: " + obj.prop2.subprop);
// clone.prop2.subprop = 3;
// console.log("After ###");
// console.log("Clone: " + clone.prop2.subprop + " Object: " + obj.prop2.subprop);

// //изменился clone и obj
// console.log("Before (clone.prop3.subprop = 3) ###");
// console.log("Clone: " + clone.prop3.subprop + " Object: " + obj.prop3.subprop);
// clone.prop3.subprop = 3;
// console.log("After ###");
// console.log("Clone: " + clone.prop3.subprop + " Object: " + obj.prop3.subprop);

// //изменился clone и obj
// console.log("Before (clone.prop1 = 3) ###");
// console.log("Clone: " + clone.prop1 + " Object: " + obj.prop1);
// clone.prop1 = 3;
// console.log("After ###");
// console.log("Clone: " + clone.prop1 + " Object: " + obj.prop1);