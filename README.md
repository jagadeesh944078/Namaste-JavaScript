- do u know when u run javascript code alot of things happen behind the scene inside **javascript engine**
- Everything in javascript happens inside an **execution context**
- javascript isn't possible without this beautiful execution context

## what happens when u run Javascript Code?

- when we run javascript program **Global Execution Context** will be created
-         var n =2;
          function square(n) {
            var num = n * n;
            return num;
          }
          square2 = square(n);
          square4 = square(4);

**- execution context created in 2 phases**

1. **<a href="/Memory_Creation.Md">memory creation phase </a>**
2. **<a href="/Code_Excecution.md">code execution phase</a>**

## what is Hoisting and How Hoisting Works?

- **<a href="/Hoisting.md">Hoisting</a>**

## Function Invocation & Variable Environment

**- we can invoke the function even before initialization because of hoisting**

- **Example**
-     var x =1;
      a();
      b();
      console.log(x);
      function a() {
        var x =10;
        console.log(x);
      }
      function b() {
        var x = 100;
        console.log(x);
      }
- **output:**
  10
  100
  1
