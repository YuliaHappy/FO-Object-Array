export { DatingService };

function DatingService(people){
	this._people = people;
};

// console.log("Name men with age < 25 and age > 18:");
DatingService.prototype.filterName = function() {
	return this._people.filter(function(person) {
		if (person.sex == "male" && person.age < 25 && person.age > 18)
			return person;
	}).map(function(person) {
		return person.name;
	});
}

// console.log("Function output name to console:");
DatingService.prototype.outputName = function() {
	console.log(this._people.map(function(value) {
		return value.name;
	}));
}
// outputName(people);

// console.log("Partition list in the city:");
DatingService.prototype.groupCity = function() {
	return this._people.reduce( function (prev, person) { 
		if (prev[person.city] === undefined) {
			prev[person.city] = [];
		} 
		prev[person.city].push(person);
		return prev; 
	}, {});
}

// console.log("Sorted list of cities by the count of people:");
DatingService.prototype.cities = function() {
	return this._people.reduce(function(prev, person) {
		if (prev.find(function(element) {
			if (element[0] == person.city) {
				element[1] ++;
				return true;
			}
			return false;
		}) === undefined) {
			prev.push([person.city, 1]);
		} 
		return prev;
	}, []).sort(function(a, b) {
		return a[1] < b[1];
	});
}

// console.log("City which the count of men and women equally:");
DatingService.prototype.balancedCity = function() {
	var cities = this._people.reduce(function(prev, person) {
		var city= prev.find(function(element) {
			return element[0] == person.city;
		});		
		if (city === undefined) {
			if (person.sex == "male") {
				prev.push([person.city, 1, 0]);
			} else {
				prev.push([person.city, 0, 1]);
			}
		} else {
			if (person.sex == "male") {
				city[1] ++;
			} else {
				city[2] ++;
			}
		}
		return prev;
	}, []);
	var balancedCities = cities.reduce(function(prev, city) {
		if (city[1] == city[2]) {
			prev.push(city[0]);
		}
		return prev;
	}, []);
	return balancedCities.length > 0;
}
