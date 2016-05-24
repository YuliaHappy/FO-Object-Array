export function DatingService(people){
	if (!Array.isArray(people)) {
		return TypeError("People isn't array!");
	}
	this._people = people;
}

//Получить список имен молодых людей моложе 25 лет и старше 18
DatingService.prototype.filterName = function() {
	return this._people.filter(
		person =>
			person.sex == "male" && person.age < 25 && person.age > 18)
	.map(person => person.name);
}

//Написать функцию вывода массива имен в консоль
DatingService.prototype.outputName = function() {
	console.log(this._people
		.map(value => value.name)
		.join(" "));
}

//Разбить список по городам
DatingService.prototype.groupCity = function() {
	return this._people.reduce( function (prev, person) { 
		if (!(person.city in prev)) {
			prev[person.city] = [];
		} 
		prev[person.city].push(person);
		return prev; 
	}, {});
}

//Получить список городов с количество людей в них, 
//	отсортированным по количеству этих людей
DatingService.prototype.cities = function() {
	var cities = [];
	var groupCity = this.groupCity();
	for (var city in groupCity) {
		cities.push([city, groupCity[city].length]);
	}
	return cities.sort((fCity, sCity) => fCity[1] < sCity[1]);
}

//Узнать, есть ли город в котором количество мужчин равно числу женщин
DatingService.prototype.balancedCity = function() {
	var groupCity = this.groupCity();
	var cities = [];
	for (var city in groupCity) {
		cities.push({
			city: city, 
			count: groupCity[city].reduce(function(prev, human) {
				if (human.sex == "male") {
					prev.male ++;
				}
				else {
					prev.female ++;
				}
				return prev;
			}, {male: 0, female: 0})});
	}
	return cities.some(city => city.count.male == city.count.female);
}
