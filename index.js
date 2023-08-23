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

const arr = [6, 2, 3, 1, 4];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

const output1 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output1);

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    return max;
  }
}

console.log(findMax(arr));

const output2 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output2);

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Must", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
];

//output = ["Akshay","Deepika"];

const output3 = users.reduce((arr, curr) => {
  if (curr.age < 30) {
    arr.push(curr.firstName);
  }
  return arr;
}, []);

console.log(output3);

const output4 = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output4);

//output ["Akshay Saini", "Donald Trump", "Elon Must", "Deepika Padukone"];

const output5 = users.map((x) => x.firstName + " " + x.lastName);

console.log(output5);

//output {26:2, 75:1, 50:1}

const output6 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output6);
