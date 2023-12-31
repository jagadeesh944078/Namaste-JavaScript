/* episode 1 code */

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

/* hoisting code */

// getName(); // invoke the function
// console.log(x);
// // here we are not invoking the function just we are trying to log this getName function
// console.log(getName);
// console.log(getName1);
// // getName1();

// var x = 2;
// var getName1 = () => {
//   console.log("Namasthe Javascript1");
// };
// function getName() {
//   console.log("Namaste Javascript");
// }
// getName1();

/* episode 3 how function works */
// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }

// function a() {
//   var x = 5;
//   console.log(b);
//   c();
//   function c() {
//     console.log(b);
//     console.log(x);
//   }
// }
// var b = 10;
// a();
/*Closure Example */

// function z() {
//   var b = 100;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// x();

// function x() {
//   var a = 10;
//   setTimeout(function () {
//     console.log(a);
//   }, 2000);
//   console.log(a);
// }
// x();

/* Data Hiding */
// var count = 0;
// function incrementCounter() {
//   count++; // u can access inside the function also
// }

// function counter() {
//   var count = 0;
//   function incrementCounter() {
//     count++;
//     console.log(count); // u can access inside the function also
//   }
//   incrementCounter();
// }

// counter();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
// }
// x();

// function x() {
//   var a = 0,
//     b = 2;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// var aa = x();

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
// }
// x(function y() {
//   console.log("y");
// });

// function attachEventListner() {
//   var count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("xyz", ++count);
//   });
// }
// attachEventListner();

// console.log("start");
// setTimeout(function cb() {
//   console.log("callback called");
// }, 5000);
// console.log("end");
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expires");

// const radius = [4, 3, 1, 2];

// function area(radius) {
//   return Math.PI * radius * radius;
// }
// function circumference(radius) {
//   return 2 * Math.PI * radius;
// }
// function diameter(radius) {
//   return 2 * radius;
// }

// function calculate(radius, area) {
//   const outPut = [];
//   for (let i = 0; i < radius.length; i++) {
//     outPut.push(area(radius[i]));
//   }
//   return outPut;
// }
// console.log(radius.map(area));
// console.log(calculate(radius, area));

// const radius1 = [3, 4, 2, 1];

// Array.prototype.calculate = function (logic) {
//   const outPut = [];
//   for (let i = 0; i < this.length; i++) {
//     outPut.push(logic(this[i]));
//   }
//   return outPut;
// };
// console.log(radius.calculate(area), "jag");
// console.log(radius.map(area), "af");

/* Reduce function examples */

// const arr = [6, 2, 3, 1, 4];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// const output1 = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output1);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     return max;
//   }
// }

// console.log(findMax(arr));

// const output2 = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(output2);

// const users = [
//   { firstName: "Akshay", lastName: "Saini", age: 26 },
//   { firstName: "Donald", lastName: "Trump", age: 75 },
//   { firstName: "Elon", lastName: "Must", age: 50 },
//   { firstName: "Deepika", lastName: "Padukone", age: 26 },
// ];

//output = ["Akshay","Deepika"];

// const output3 = users.reduce((arr, curr) => {
//   if (curr.age < 30) {
//     arr.push(curr.firstName);
//   }
//   return arr;
// }, []);

// console.log(output3);

// const output4 = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output4);

//output ["Akshay Saini", "Donald Trump", "Elon Must", "Deepika Padukone"];

// const output5 = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output5);

//output {26:2, 75:1, 50:1}

// const output6 = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output6);

// let name1 = {
//   firstName: "vemula",
//   lastName: "jagadeesh",
// };

// let printFullName = function (homeName, mpbileNo) {
//   console.log(
//     this.firstName + " " + this.lastName + " " + homeName + " " + mpbileNo
//   );
// };

// let name2 = {
//   firstName: "rajendhar",
//   lastName: "vemula",
// };

// printFullName.call(name1, "korutla", "1234");
// printFullName.call(name2, "hyderabad", "2345");
// printFullName.apply(name1, ["metpally", "4567"]);
// let printName = printFullName.bind(name1, "medchal", "678");
// printName();

/* Curring examples with bind method*/

// function multify(x, y) {
//   console.log(x * y);
// }

// const multifyTwo = multify.bind(this, 2);
// multifyTwo(3);

// const multifyThree = multify.bind(this, 3);
// multifyThree(4);

/* Curring example with closure */

// const multify = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// const multifyTwo = multify(2);
// multifyTwo(10);

// const getCakeIngrediants = (ingrid_1) => {
//   return (ingrid_2) => {
//     return (ingrid_3) => {
//       return `${ingrid_1}, ${ingrid_2}, ${ingrid_3}`;
//     };
//   };
// };

// console.log(getCakeIngrediants("egg")("chicken")("mutton"));

/* Polyfill for bind method */

// let name = {
//   firstName: "vemula",
//   lastName: "Jagadeesh",
// };

// let printFullName = function (homeTown, state, city) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       homeTown +
//       " " +
//       state +
//       " " +
//       city
//   );
// };

// let myName = printFullName.bind(name, "korutla");
// myName("Telangana", "Hyderabad");

// Function.prototype.myBind = function (...args1) {
//   let obj = this;
//   let parmas = args1.slice(1);
//   return function (...args2) {
//     obj.apply(args1[0], [...parmas, ...args2]);
//   };
// };

// let myName2 = printFullName.myBind(name, "korutla");
// myName2("Telangna", "Hyderabad");

/* prototype and prototype inheritance */

// const object = {
//   name: "jagadeesh",
//   state: "telangana",
//   getIntro: function () {
//     console.log(this.name + " " + this.state);
//   },
// };

// const obj2 = {
//   name: "rajashekar",
// };

// Function.prototype.mybind = function () {
//   console.log("mybind prototype called");
// };

// function printName() {}

/* Event bubbling and Event Capturing */

// document.querySelector("#grand-parent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent Clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent Clicked");
//     // e.stopPropagation();
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child Clicked");
//   },
//   true
// );

/* Event Delegation */
// document.querySelector("#form").addEventListener("keyup", (e) => {
//   console.log(e.target.tagName);
//   if (e.target.dataset.uppercase != undefined) {
//     e.target.value = e.target.value.toUpperCase();
//   }
// });

/* Debouncing */
// let count = 0;
// const getData = () => {
//   console.log("event called", count++);
// };

// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, d);
//   };
// };

// const betterFunction = debounce(getData, 300);

/* Promise Chaining */

const cart = ["shoes", "pants", "shirts"];

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    if (!validationCart()) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "1234";
    setTimeout(function () {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}

function validationCart() {
  return true;
}

function proceedToPayment() {
  const pr = new Promise(function (resolve, reject) {
    resolve("payment done successfully");
  });
  return pr;
}

function showOrderSummary() {
  const pr = new Promise(function (resolve, reject) {
    resolve("order summary updated successfully");
  });
  return pr;
}

function updateTheWallet() {
  const pr = new Promise(function (resolve, reject) {
    resolve("updated the wallet successfully");
  });
  return pr;
}

const promise = createOrder(cart);
// console.log(promise);

// promise
//   .then((orderId) => proceedToPayment(orderId))
//   .then((msg) => showOrderSummary(msg))
//   .then((msg) => updateTheWallet(msg))
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err.message));

/* Promise.all */

// const p1 = Promise.resolve(4);
// const p2 = 45;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("foo");
//   }, 2000);
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

/* Async/Await  */

//Example1

// async function getData1() {
//   return "Namaste";
// }

// const dataPromise1 = getData1();
// dataPromise.then((res) => console.log(res));

// Example2

// const promise1 = new Promise((resolve, reject) => {
//   resolve("Namaste Javascript");
// });

// async function getData2() {
//   return promise1;
// }

// const dataPromise2 = getData2();
// dataPromise2.then((res) => console.log(res));

// Example3

// const promise2 = new Promise((resolve, reject) => {
//   resolve("using normal javascript function");
// });

// function getData3() {
//   promise2.then((res) => console.log(res));
// }

// getData3();

// Example4

// const promise4 = new Promise((resolve, reject) => {
//   resolve("using normal async/wait concept");
// });

// async function getData4() {
//   const res = await promise4;
//   console.log(res);
// }

// getData4();

// Example 5 (diffrence b/w resolving promise using Asyn/await & normal function);

// const promise5 = new Promise((resolve, reject) => {
//   resolve("resolving promise using async/await concept");
// });

// function getData() {
//   promise5.then((res) => console.log(res));
//   console.log("Namaste Javascript");
// }

// async function getData() {
//   const val = await promise5;
//   console.log(val);
//   console.log("Namasthe Javascript");
// }

// getData();

// Example 6

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolving promise1 using async/await");
//   }, 20000);
// });

// const promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolving promise2 using async/await");
//   }, 40000);
// });

// async function handlePromise() {
//   console.log("hello world");
//   // JS engine it wait for promise to resolve(it looks like waiting for promise but actually it doesnot)
//   const val1 = await promise5;
//   console.log(val1);
//   const val2 = await promise6;
//   console.log(val2);
// }

// hanldePromise();
const API_URL = "https://api.github.com/users/jagadeesh944078";

// async function hanldePromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }

// hanldePromise();

async function hanldePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
  // fetch(API_URL)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
}

hanldePromise().catch((err) => console.log(err));
