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

## what is Temporal Dead Zone? && Are let & const declaration are hoisted && Syntax Error vs Reference Error vs Type Error

-      console.log(a);
       let a = 10;
       var b = 1;

### are let & const declarations are hoisted?

- yes **let & const declarations are hoisted** but they are hoisted very diffrently then **var hoisted**
- when u are trying to access **let & const declarations** it gives error in browser console **u can not access before initializtion** so here only its saying this value (a value) in temporal dead zone for time being
- u can say these are in temporal Dead Zone for time being
  -suppose memory was assigned to **b** to the var declaration and this variable **b** attached to the global object incase of **let & const** for them also allocated memory that is only called hoisted but they are stored in separate memory space then global object
- and you can not access this memory space this **let & const values** before you put some value in them that is what hoisting in let & const
- suppose for **b** you can access **window.b** but for **a** you can not access using **this or window** because **a** not attached to the **global object**
- here u can say **let** little more strict then **var**

- **what is best way to avoid temporal dead zone issues?**

- **always try to put declaration & initialization on the top to avoid temporal dead zone so that as soon as code starts it hits the initialization part first so you wont get alot of unexpected error**
- **you can say we are shrinking temporal dead zone to zero while moving initialization to the top**

### what is the Temporal Dead Zone?

- Temporal Dead Zone is the time since when this let variable was hoisted and till it is initialized some value **that time between that is known as temporal Dead zone**
- in simple words we can say from hoisting till it is initialized with some value that phase is known as **Temporal Dead zone**

### what is the Reference Error?

- whenever you are trying access variable which is in Temporal Dead Zone it gives You **Reference Error** so u can not access it until its assigned with some value
- if suppose you are trying to access any value(ex: x) which is not initialized in the code then also you will get **Reference error** says x is not defined
- when javascript trying to findout specific variable inside memory space and you can not access it then it gives us **Reference error**

- **Reference Error example1**
-          console.log(a);
           let a = 10;

- another reference error is you are trying access x value which is not even there stored in memory space then you will get Reference Error

- **Reference Error example2**
-          console.log(x);
           let a = 10;

### what is the Syntax Error?

- **Syntax Error example1**
-        let a = 10;
         let a = 5;
         var a = 4;
- using let keyword redeclaration not possiable with same name here **ex :** if u redeclare with same **let a** again in the same scope it will give **Syntax Error** like **identifier a has been declared already** even if you use **var a** also its same but **you can declare var b =1; and var b =2 twice**

-        console.log("hello javascript");
         let a = 10;
         let a = 5;

- **no code will be run** example: in above program even if u write on the top also it does not even reach single line of code it just affront says its not possible

### diffrence between let & const

- **const** is more strict then **let**

**Syntax Error example2**

-       let a;
        a = 10;
        const a;

- incase of let you can declare value first and intialize value later on but if you use const you have to initialize value at the time of declaration only otherwise browser will throw error like **SyntaxError:Missing initializer in const declaration**

**TypeError example**

-       const a =1000;
              a =2000;
- here for const a if u are trying assigne some other value later on you will get an error like **TypeError: Assignment to constant variable**
- **what is TypeError?**
- you are trying to initialize other value for the constant type here you can assume it to be **a** is type const it should be declared and initialized at the same time here its **TypeError**
- if u want more deep information with alot of example refer below link
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

### what is Block?

- Block is defined by curly braces **{}** this is perfectly valid javascript code
-      {
         // this block also known as compound statement**
       }
- Block is Combining multiple line of javascript code into group
-      {
          var a=10;
          console.log(a);
       }

- **why do we need to group all these statements together?**

- we need to group all these statements together so that we can use multiple statements in the place where javascript expects the single statement
- suppose if we write simply **if(true)** then you will get **SyntaxError:Unexpected end of input** that means its expecting one statement so even if u write **if(true) true** it is correct but if u want to write multiline code as a single statement in the place where javascript expects the single statement then we use **block**
- **example**
-      if(true) {
           var a = 10;
           console.log(a);
       }

### What is Block Scope?

- what are all variables and functions we can access inside that block is known as **Block Scope**

-     {
         var a=10;
         let b=4;
         const c =4;
         console.log(a); //10
         console.log(b); //4
         console.log(c); //4
      }
        console.log(a); //110
        console.log(b); // reference error b is not defined because b is accessiable within that block
        console.log(c); // reference error b is not defined because c is accessiable within that block

- these variables **a & b** are hoisted and allocated memory in separate memory space that is **Block** but here for variable **c** memory is allocated in **Global object** that is why let & const are block scoped you can not access these values **outside the block** but here **c** value you can access outside the block because **c** value stored in global object

### what is shadowing in JS?

- suppose if u have same named variable outside the block so inside the block variable shadows the outside block variable
- **example 1**
-          var a = 100
           {
             var a = 10;
             console.log(a); //10 here its shadows outside block variable a
           }
           console.log(a)//10 here it shadows and replace 100 with 10 because both are pointing to same memory space that is global object

- **example 2**
- even for **const** also same example you can replace **let** with **const** and check the below example
-          let b = 10; //this b value stored in separate memory space which is in Script

           {
            let b = 5;//this b value stored in same memory space that is Block Scope
            console.log(b); // 5 because this b value over here shadowing b value of 10 that is only called shadowing
           }
            console.log(b); // 10 because here it refers value from diffrent memory space and give the value

- **example 3**
- **even for function scope shadowing behaves in same way**
-     const a =10;
      function x() {
         const a =100;
         console.log(a);//100
      }
      console.log(a);//10

### what is Illegal Shadowing in Js?

**example 1**

-      let a=10;
       {
        var a=100;// this is Illegal Shadowing you can not access let using var it will an error a already declared
       }

- why you will face this error because **a** value should not cross that block scope area but if you use **var** it will cross that border because **var** is **function scoped** see below example **this is perfectly valid** because now **a** is inside that boundary its not interfering with outside **a** value

-      let a=10;
       function x() {
        var a=100;// this is Illegal Shadowing you can not access let using var it will an error a already declared
       }
- **block scope also follows lexicals scope and it follows that lexical scope chain pattern only**
- **example**
-              let a = 10;
               {
                 let a =100;
                {
                  let a = 1000;
                  console.log(a);//1000
                }
                console.log(a);//100
               }
               console.log(a);//10
- **whether you use function keyword or arrow function both are same whatever rules applied with function keyword same rules will be applied to arrow function**

## Closure

- closure basically a function bind together with its lexical environment
- function along with its lexical scope forms a closure
- **functions you can assign to variable and you can function as paramenter and even you can return the function also**
- in below example you can see you are invoking the **x()** and when u invoke that function global execution context created and for **y()** also at code execution phase Execution context created and it return **y** value and vanishes once that exectuion finishes
- now **z** contain this **y()** here we return **y()** outside the **x()** so no longer its inside the **x()** so now we can use **y()** outside the **x()**
- suppose there are 1000 lines of code at some time we want to invoke **z()** it will try to findout **a** value here **a** is not there in global scope and **x** also not there its gone right
- but here you will get output as **7** here **closure come into the picture** functions are so beautiful that when they are returned from another function still that function remember its lexical scope they remember where they were actually present though x function not present still y function remembers its lexical scope where it came from
- when u return y not just that y function returned that closure was returned That's why when you execute the z function somewhere else it still remember **reference to **a** memory location(the label a or the identifier a)** not just a value and it tries to find out a which is 7 it print that 7 that's what closure is
- that closure enclosed with function along with its lexical scope
- **Example 1**
-     function x() {
           var a =10;
          function y() {
             console.log(a)
          }
          return y;
        }
        var z = x();
        console.log(z) // it returns the function
        z() // 10

- in Example 2 it froms a closure along with **b** which was its parent parent and along with **a** which was its parent that is known as closure
- **Example 2**
-        function z() {
             var b=100;
             function x() {
                var a =10
                 function y() {
                    console.log(a, b);
                 }
                 y();
             }
             x();
         }
         z();

- Uses of Closures
  - Module Design Pattern
  - Currying
  - Functions like once
  - memoize
  - maintaining state in async world
  - setTimeouts
  - Iterators
  - and many more...
- this function forms the closure this function remember reference to i it forms a closure wherever it go it takes the reference of i along with it
- setTimeOut takes this callback function and stores into someplace and it attaches the timer 3000 millisceconds to it and javascript proceeds it doesn't wait for anything it just go the nextline and print namasthe javascript and when the timer expires it takes that function puts it again into callstack and runs it

-     function x() {
          var i =1;
          setTimeOut(function() {
             console.log(i);
          },3000);
          console.log("Namasthe Javascript")
      }
      x();

### Closure Interview Questions

- **what is closure?**
- a function along with reference to its outer environment together from a closure so in otherwords we can say a closure is combination of its function and its lexical scope bundle together forms a closure

for more questions go through this **<a href="/closure_interview.md">Closure Interview Questions</a>**
