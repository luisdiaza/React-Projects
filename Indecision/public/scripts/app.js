'use strict';

//ES5 function
// const square =  function (x) {
//     return x * x;
// }

//ES6 Arrow functions
// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(8));

//Verbose syntax
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }


//Expression syntax
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Luis Diaz'));
