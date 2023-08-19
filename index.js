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

console.log("start");
setTimeout(function cb() {
  console.log("callback called");
}, 5000);
console.log("end");
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");
