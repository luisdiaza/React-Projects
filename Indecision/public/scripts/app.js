'use strict';

// const add = function (a,b) {
//     return a + b;
// }
//
// console.log(add(55,1));

//this keyword no longer bound

var user = {
    name: 'Luis',
    cities: ['New York', 'North Plainfield', 'Summit'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        // console.log(this.cities);

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
