var nameVar = 'Luis';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

var fullName = 'Luis Diaz';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
