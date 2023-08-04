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

function a() {
  var x = 5;
  console.log(b);
  c();
  function c() {
    console.log(b);
    console.log(x);
  }
}
var b = 10;
a();
