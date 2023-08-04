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

### do u know What is Shortest Javascript Program?

- empty javascript file only Shortest Javascript Program
- eventhough file is empty Javascript doing lot things behind the scene
- when u run empty javascript file still javascript do its job it creates **GES(Global execution context)** also sets up memory space eventhough there is nothing to setup still it does it job
- javascript also creates something known as **window** here just go to developer console in browser write window & execute it willgive **window object**
- window object contains alot of funtions and variables and u can use these functions and variables anywhere in your javascript program
- this functionality given us by javascrpit engine
- just like **window** JS also creates **this** keyword

**what is window object**

- window is actually a global object which is created along with the Global Execution Context
- whenever any JS program is run global object is created
  and global execution context created along with that **this** variable is created
- this global object in case of browser **its window** and in case of node **its something else**
- eventhough file is empty javascript creates its global object
- at global level **this === window** is true
- whenever you create execution context **this** is created along with it even for the **functional execution context** as well
- at the global **this** point to **global object** that is **window** in the case of browser

### what is global space?

- any code you have written in javascript file not inside the function
- anything you see in the top level is global space
- in simple words anything which is not inside any function its global space
- anything you created at global space these functions and variables get attached to the global object that is **window**
- in below program a and b() are at the global space and x is in local space
- if u dont put window before a then it assumes you are referring to global object
- suppose you are executing x in that case it will refer to global object here x is not defined in global object so it gives x is not defined
- at global level **this** points to window object so **this.a or window.a or a** everything give same output all are referring to the same memory
-     var a =10;
      function b() {
        var x = 10;
      }
      console.log(window.a);
      console.log(a);
      console.log(this.a);
      console.log(x);
