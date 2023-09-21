var a = 1;
var b = 1;
/* here both having diffrent memory address but it compares the value*/
console.log(a === b); //primitive types compares the value not references so its true

var aa = { a: 1 };
var bb = { a: 1 };
/* here both having diffrent memory address */
console.log(aa === bb); //non primitive types compares the references so its false

var aaa = { a: 1 };
var bbb = aaa;
console.log(aaa === bbb); //it returns true here both are storing and pointing same address in the memory

/* Boolean Example */
var a = true; // type boolean and return boolean value
var aa = new Boolean(true); // type object and return object
new Boolean(); //false
new Boolean(null); //false
new Boolean({}); //true
new Boolean(undefined); //false
new Boolean(0); //false
new Boolean(1); //any number except 0 will be true
new Boolean(false); //false
new Boolean(true); //true
new Boolean("true"); //true
new Boolean("false"); //false
new Boolean([]); //true
new Boolean(""); //false
new Boolean("any string"); //true

/* Null Example */
console.log(null === undefined); // false (not the same type)
console.log(null == undefined); // true (but the "same value")
console.log(null === null); // true same type and same value
console.log(null == undefined); //true
console.log(null === undefined); //false

/* Number Example */
let value = "not a number";
let result = isNaN(value); //true if value is not a number

/* string example */
const a = "sample value";
const aa = new String(a);
console.log(a);
console.log(aa.toUpperCase());

/* Object Example */
var a = {};
var aa = new Object();

function car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

function person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const jagadeesh = new person("rajendhar", 22, "M");

const myCar = new car("aa", "tata", "1997", jagadeesh);
console.log(myCar);

/* Array Example */
var arr1 = new Array();
var arr2 = new Array(5);
var arr3 = new Array(2, 4, 6, "string");

console.log("arr1: " + arr1);
console.log("arr2: " + arr2);
console.log("arr3: " + arr3);
