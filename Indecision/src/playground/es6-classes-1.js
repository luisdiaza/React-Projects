class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //makes a call to parent Person class to access name and age
        this.major = major;
    }
    hasMajor() { //uses the logical not operator determine whether or not a student has a major
        //an empty string '' is a falsey value that fails an if condition
        return !!this.major; //coverts falsey false value to a boolean value
                             //hasMajor returns true if it contains a string, and false if undefined
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {//executes only if major exists
            description = description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting = greeting += ` I'm visiting from North Plainfield`;
        }
        return greeting;
    }
}

const me =  new Traveler('Luis Diaz', 26, 'North Plainfield'); // make new instance of Person class
console.log(me.getGreeting());

const other = new Traveler ();
console.log(other.getGreeting());
