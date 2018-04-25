// const add = function (a,b) {
//     return a + b;
// }
//
// console.log(add(55,1));

//this keyword no longer bound

const user = {
    name: 'Luis',
    cities: ['New York', 'North Plainfield', 'Summit'],
    printPlacesLived (){
        console.log(this.name);
        // console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [10, 20,30],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy );
    }
};
console.log(multiplier.multiply());
