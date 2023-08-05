- do u know when u run javascript code alot of things happen behind the scene inside **javascript engine**
- Everything in javascript happens inside an **execution context**
- javascript isn't possible without this beautiful execution context
- javascript is loosely typed language so loosely typed means it does not attach any specific data type to its variables
- so suppose if i created a and assigned string value later on in the program i can assign number as well
- javascript also known as weekly typed language its not week at all infact i feel that language is more stronger because when u give string value it takes value handle behind the scene and if u give number it takes that value and puts number in it and manages all these things behind the scene so infact i feel that its more flexiable and beautiful

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
- ![Alt text](function_invocation.jpg)

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

## undefined vs not defined

- **undefined is special keyword in javascript its not there in other languages**
- javascript allocate memory to functions and variables even before executing single line of the code
- undefined is like a placeholder which is placed in the memory that special keyword is undefined
- undefined is very diffrent then the not defined
- **not undefined** means javascript even not allocation memory for that
- **undefined !== not undefined** some people think undefined means its not taking any memory no its a special keyword it takes up its own memory u can assume it to like a placeholder which is kept for the timebeing until variable is assigned some other value
- dont put **a = undefined** its not a good practise to do that because javascipr its self provide that special keyword if u dont assign value
-     var a;
      if(a === undefined) {
        console.log("a is undefined");
      } else {
        console.log("a is not undefined");
      }

## Scope Chain & Scope & Lexical Environment

### Scope

- scope means where u can access a specific function or variable in our code
- there are 2 aspects to it
-     function a() {
          var b = 10;
          c();
          function c() {

          }
      }
      a();

- so first what is the scope of this variable b that means where i can access this variable b that is scope and other way is **is b inside the scope of the function c** that means can i access this b inside c
- scope is directly dependent on lexical environment

### Lexical Environment

- whenever execution context is created a lexical environment also created
- lexical environment is the local memory and reference to the lexical environment of it parent when i say parent its lexical parent where actually that function sits inside that code
- in below example you can see **c** is lexically inside **a** so **c** lexical parent is **a** and **a** lexical is parent is **global execution context**

-       function a() {
            var b =10;
            c();
            function c() {
                console.log(b);
            }
        }
        a();
        console.log(b);
- ![Alt text](scope_chain.jpg)

- lexical means **in order** or **in hierarchy**
- **c function** lexically sit inside the **a function** that means **in order** or **in hierarchy**
- **c function** physcially present inside **a function** that means **c function** lexically present inside **a function** and **a function** lexically inside **global scope** so this is known as **lexical**
- when i say lexical environment means its **local memory along with lexical environment of its parent**

### Scope Chain

- Javascript engine first looks for its variable or function inside the local memory of that function if not found it keeps on searching the lexical environment of its parent until it finds the variable or function being accessed this mechanism is called **Scope Chain**
- if the variable accessed is not found in **Scope Chain** then you will get variable is not defind error in the browser consoel
- The whole chain of lexical environment is known as **Scope Chain**
