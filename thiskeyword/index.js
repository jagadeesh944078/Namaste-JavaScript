// console.log(this, "global space");

// function x() {
//   console.log(this); // diffrent value in strict mode and non strict mode
// }

// x();
// window.x(); //in strict mode if you use like this you will get window object

// in object it works diffrently
// const student = {
//   name: "Jagadeesh",
//   printName: function () {
//     console.log(this.name, "inside object");
//   },
// };

// student.printName();

// const student2 = {
//   name: "rajendhar",
// };

// student.printName.call(student2);

// inside object using arrow function

// it will give it enclosing lexical context value of this here its global space so value is window object
// const obj = {
//   name: "rajashekar",
//   printName: () => {
//     console.log(this, "inside arrow function");
//   },
// };

// obj.printName();

// inside nested arrow function

// const obj2 = {
//   value: 10,
//   printName: function () {
//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };

// obj2.printName();

// this inside DOM => reference to HTMLelement`

/* Example 1 */
console.log(this); //window

/* Example 2 */
function gfFunction() {
  console.log(this); // window strict mode and undefined in non strict mode
}
gfFunction();
window.gfFunction(); // you are calling with window object you in both cases its window obj

/* Example 3 */
const bfObject = {
  name: "jagadeesh",
  gfFunction: function () {
    console.log(this);
  },
};

bfObject.gfFunction(); //it points to reference of bf object in bothcases

/* Example 4 */
const gfRefFunction = bfObject.gfFunction;
gfRefFunction(); // it points to window obj and in strict mode it gives undefined

/* Example 5 */

let bfObject1 = {
  name: "rahul",
  age: 30,
  car: "tata car",
  gfFunction: function (a, b) {
    console.log(this, a, b);
  },
};

let bfObject2 = {
  name: "rajesh",
  age: 24,
  car: "mercedes car",
  gfFunction: function (a, b) {
    console.log(this, a, b);
  },
};

const gfObject1Ref = bfObject1.gfFunction.bind(bfObject2);
gfObject1Ref();
