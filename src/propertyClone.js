export  function propertyClone(obj, properties) {
	if (obj == null || typeof obj !== 'object') {
		return TypeError("Obj isn't object!");
	}
	if (!Array.isArray(properties)) {
		throw new TypeError("Properties aren't array!");
	}
	let clone = Object.create(obj);
	properties.forEach(function(prop) {
		if (typeof(obj[prop]) == "object") {
			clone[prop] = Object.create(obj[prop]);
		}
	});
	return clone;
}