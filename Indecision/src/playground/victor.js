name = "Victor"

const obj = {
    name: 'Vikram',
    getName() {
        console.log("meow")
        return this.name;
    }
};

//const getName = obj.getName.bind(obj);
const getName = obj.getName.bind(this)

console.log(obj.getName());
console.log(getName());


constructor(props) {
    
}
