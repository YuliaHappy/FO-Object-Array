import { DatingService } from "../src/datingService";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Dating service", function () {
	var ara = {name: "Ara", age: 24, sex: "female", city: "St.Peterburg"};
	var yulia = {name: "Yulia", age: 21, sex: "female", city: "St.Peterburg"};
	var alex = {name: "Alex", age: 22, sex: "male", city: "St.Peterburg"};
	var borya = {name: "Borya", age: 30, sex: "male", city: "Volgograd"};
	var roma = {name: "Roma", age: 15, sex: "male", city: "Moscow"};
	var alice = {name: "Alice", age: 21, sex: "female", city: "Moscow"};

	var people = new DatingService([ara, yulia, alex, borya, roma, alice]);	

	it("Name men with age < 25 and age > 18", function () {
		var names = people.filterName();
		expect(names.length).to.be.equal(1);
		expect(names[0]).to.be.equal("Alex");
	});

	people.outputName();

	it("Partition list in the city", function() {
		var groups = people.groupCity();
		expect(groups["Moscow"].length).to.be.equal(2);		
		expect(groups["St.Peterburg"].length).to.be.equal(3);		
		expect(groups["Volgograd"].length).to.be.equal(1);
	});

	it("Sorted list of cities by the count of people", function() {
		var cityArr = people.cities();
		expect(cityArr.length).to.be.equal(3);
		expect(cityArr[0][0]).to.be.equal("St.Peterburg");
		expect(cityArr[0][1]).to.be.equal(3);
		expect(cityArr[1][0]).to.be.equal("Moscow");
		expect(cityArr[1][1]).to.be.equal(2);
		expect(cityArr[2][0]).to.be.equal("Volgograd");
		expect(cityArr[2][1]).to.be.equal(1);

	});

	it("City which the count of men and women equally", function() {
		expect(people.balancedCity()).to.be.equal(true);
	});
});