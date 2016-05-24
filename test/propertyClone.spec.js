import { propertyClone } from "../src/propertyClone";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Property clone", function () {

	let obj = {prop1: 1, prop2: {subprop: 1}, prop3: {subprop: 1}};
	let clone = propertyClone(obj, ["prop2"]);

	it("Clone with property prop 2: clone.prop2.subprop = 3", function () {
		clone.prop2.subprop = 3;
		expect(clone.prop2.subprop).to.be.equal(3);
		expect(obj.prop2.subprop).to.be.equal(1);
	});

	it("Clone with property prop 2: clone.prop3.subprop = 3", function () {
		clone.prop3.subprop = 3;
		expect(clone.prop3.subprop).to.be.equal(3);
		expect(obj.prop3.subprop).to.be.equal(3);
	});

	it("Clone with property prop 2 (without *): clone.prop1 = 3", function () {		
		clone.prop1 = 3;
		expect(clone.prop1).to.be.equal(3);
		expect(obj.prop1).to.be.equal(1);
	});

	it.skip("Clone with property prop 2 (with *): clone.prop1 = 3", function () {	
		clone.prop1 = 3;
		expect(clone.prop1).to.be.equal(3);
		expect(obj.prop1).to.be.equal(3);
	});
});