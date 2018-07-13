src\util.js
console.log('util.js is running');
export const square = (num) => num * num;
export const add = (num1, num2) => num2 + num1;
export default (num1, num2) => num1 - num2;
//export { square, add };
// const sub = (num1, num2) => num1 - num2;
//export { square, add, sub as default};

src\app.js
//named exports
import subtract, { square, add } from './util.js';
import isSenior, { isAdult, canDrink } from './person.js';
console.log('app.js is running');
console.log(square(5));
console.log(add(4, 10));
console.log(subtract(4, 10));

//console.log(isAdult(23));
//console.log(canDrink(34));
//console.log(isSenior(64));

////////////////53 to be done//

src\person.js

export const  isAdult = (age) => age >=18 ? 'Is Adult' : 'Not Adult' ;
export const canDrink = (age) => age >=21 ? 'Yes' : 'No';
export default (age) => age >=65 ? 'Senior': 'NotSenior';
////Default export
// there can be only one used as default
//defaults can be imported by any name
//inline default export accepts expression directly


