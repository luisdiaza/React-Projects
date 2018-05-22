class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `I am ${this.age} years old.`
    }
}

const me =  new Person('Luis Diaz', 26); // make new instance of Person class

console.log(me.getGreeting());
console.log(me.getDescription());
