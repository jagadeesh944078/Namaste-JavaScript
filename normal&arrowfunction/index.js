/* 1.syntax normal function vs arrow function */

const multiply = function (a, b) {
  return a * b;
};
multiply(2, 3);

let mul = (a, b) => a * b;
let multi = (a) => a * a;

/* 2. no arguments (no arguments objects in arrow function) */

function add() {
  const arr = Array.from(arguments);
  return arr.reduce((a, b) => a + b);
}

console.log(add(5, 4, 2, 1, 8));

const sum = (...value) => {
  return value.reduce((a, b) => a + b);
};

console.log(sum(2, 3.4, 5, 6));

/* 3.no prototype object for arrow function(prototype is the object which is assoicated with every function and object by default in the javascript) */

function regularFunction() {}

console.log(regularFunction.prototype); //which return prototype object

const arrowFunction = () => {};
console.log(arrowFunction.prototype); // undefined

/* 4.no new keyword arrow function cannot invoked using new keyword */
/* regular functions you can invoke with new keyword because it has constructor */

function regularFunction() {}

console.log(new regularFunction()); // returns objects

const arrowFunctions = () => {};

// console.log(new arrowFunction());

/* No Own this for arrow function */
/* you canot use call apply bind using arrow function because it wont override this value */

// function regular() {
//   console.log("regular", this);
// }

// const arrow = () => {
//   console.log("arrow", this);
// };

// regular();
// arrow();

const user = {
  name: "jagadeesh",
  regular: function () {
    console.log("regular", this);
  },
  arrow: () => {
    console.log("arrow", this);
  },
};

user.regular.call({ name: "aa" });
user.arrow();

/* 6. Generator function */
/* you canot use arrow function as generator function */

function* regular() {
  //this will be the generator function
}

//const arr = *() => {} //this will give error

/* no duplicate parameters allowed */
// function multiply(a,a,a) {
//     console.log(a);//it will give value 4 it takes last one but strict it gives error like duplictes not allowed
// }

// multiply(2,3,4);

// const sum = (a,a) => {
//   //without strict mode only it will give error like duplicates not allowed
// }
// sum(2,3)
