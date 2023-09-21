/* Pass By Value Also Known As Call By Value*/
function callByValue(a) {
  a = 100;
  console.log(a, "inside");
}

var a = 10;
callByValue(a);
console.log(a, "outside");

/* Pass By Reference Also known as Call By Reference */

function callByReference(obj) {
  obj.a = 100;
  console.log(obj, "inside");
}

var obj = { a: 2 };
callByReference(obj);
console.log(obj, "outside");
