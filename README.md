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

### Settimeout And Closure Interview Questions

- this function forms the closure. this function remember reference to i it forms a closure wherever it go it takes the reference of i along with it
- **setTimeOut** takes this callback function and stores into someplace and it attaches the timer 3000 millisceconds to it and javascript proceeds **it doesn't wait for anything.** it just go the nextline and print namasthe javascript and when the timer expires it takes that function puts it again into callstack and runs it that's how **setTimeout** works

-     function x() {
          var i =1;
          setTimeOut(function() {
             console.log(i);
          },3000);
          console.log("Namasthe Javascript")
      }
      x();

- **interviewer ask you to print 1 2 3 4 5 using this setTimeout?**
- suppose here if you use **var i =1;** in for loop instead of **let i=1** then it print the **6 6 6 6 6** 5times because each time it takes this callback function and stores into someplace and attach timer and it remember reference to i not just i value.
- so when loop run 1st time it takes callback function and attach timer similarly this 5 copies of function all of them refering to same memory location that is reference of i.
- because environment of all of this functions are same
- 2nd thing javascript does not wait for anything it stores all these 5 functions and move on so it will print namasthe javascript.and when the timer expires its too late and value of i becomes loop was constantly running right it is 6. and when the callback function runs on that time the value of will be 6

-     function x() {
          var i =1;
          for(let i=1; i<=5; i++>){
            setTimeOut(function() {
             console.log(i);
            }, i*1000);
          }
          console.log("Namasthe Javascript")
      }
      x();

- easy way to fix this is use **let in for loop** because **let has block scope** that means whenever each time loop runs this **i** is a new copy of all together
- and eachtime setTimeout runs this callback function has new copy of **i** with it
- here it makes 5 copies of **i** variable with it and they form closure with each and every function
- in simple words each time this function calls this **i** refers to diffrent memory location each time

- **suppose if interviewer ask u to resolve problem using var keyword only?**
- yes we can this using closure. here every time you call this close function with **i** it creates the new copy of **i** with it

-     function x() {
          var i =1;
          for(let i=1; i<=5; i++>){
            function close(x) {
              setTimeOut(function() {
              console.log(x);
              }, x*1000);
            }
             close(i);
          }
          console.log("Namasthe Javascript")
      }
      x();

### Closure Interview Questions

- **what is closure?**
- a function along with reference to its outer environment together from a closure so in otherwords we can say a closure is combination of its function and its lexical scope bundle together forms a closure

for more questions go through this **<a href="/closure_interview.md">Closure Interview Questions</a>**

### First Class Functions

- Functions are very beautiful in javascript and functions are heart of javascript

- **Function Statement also Known as Function Declaration**
- if you give function keyword and function name this is known as function statement. This way of creating known as **function statement**
- **Example**
-      function a() {
          console.log("a called");
       }
       a();

- **Function Expression**
- A beautiful feature of function is you can assign it to the variable also. function acts like a value.this is known also **function expression**
- **Example**
-      var b = function () {
            console.log("b called");
       }
       b();

- **Diffrence between Function Statment and Function Expression is Hoisting** because see above 2 programs when u try to invoke first one before its initialized **a()** then u will get output because at memory creation phase for a that complete function copied and pasted over there
- but in the second program its diffrennt here if u try to invoke **b()** before its initialized then it gives **b is not a function** because at memory creation **b** treated as variable stored as **undefined** in memory creation phase not function so until that line will be executed you can't invoke that function

- **Anonymous Function**
- function without name is known as Anonymous Function. Anonymous Function Does not have their own identity. these means if u create Anonymous function like below program it gives the syntax error.
- **Example**
-       function() {

        }

- why Syntax Error Anonymous Function looks like Function Statement only but it has no name according to **EcmaScript specification** function statement always should have name so that example program is invali syntax you can run and check
- it clearly gives **SyntaxError: Function statements require a function name**
- Anonymous Function are used when the Anonymous Functions are used as the values. that means just like you assign values to variable. you can assign this anonymous function to some variable. so it acts like a variable.
- but in Function Statement you can not use Anonymous Functions that is why Syantax Error

- **Named Function Expression**
- Named Function Expression Exactly Same as Function Expression only but instead of Assigning Anonymous Function we Assign Named Function to the Variable
- giving name for variable and for function also but this is possible in javascript
- you can have the name of the function itself and put it into the expression so this is known as **Named Function Expression**
- **Example**
-      var b = function xyz() {
             console.log(xyz)//u can access over here
             console.log("xyz called")
       }
       b();
       xyz(); //you can not call like this you will get error Refrence Error xyz is not defined
- why xyz is error because here you assigned function to the var b it won't create memory in outer scope but it created as local variable means you can access xyz() function inside that function. this is what called named function expression

- **Diffrence Between Parameters an Arguments?**
- the values which you pass inside th function known as Arguments
- these identifiers here param1 & param2 which gets those values are known as Parameters
- **Example**
-        var b = function(param1, param2) {
           // here param1 & param2 are called parameters you can access these within that function only
         }
         b(1,2)// this 1,2 are arguments.

- **First Class Functions**
- The ability of functions to be used as the values and assgined to the variable and can be passed as argument into another function and can be returned from another functions this ability all together known as First Class Functions

- insted of passing arguments we can pass functions inside the another function as an argument
- **Example 1**
-       var b = function(param1) {
             console.log(param1);
         }
         b(function () {

         }); // here Anonymous function to be passed as an value also

- **Example 2**
-       var b = function(param1) {
             console.log(param1);
         }

         function xyz() {

         }

         b(xyz);

- **Example 3**
-       var b = function(param1) {
             return function () {

             }
         }
         console.log(b());

- Function are First Class Citizens means as same as First Class Functions both meaning is same
- even if you use **let & const** also it behaves in same way

- **Arrow Functions**
- These Funtion Expresesion, Function Declaration, Function statment these all things can be returned from Arrow Functions Also
- Arrow Functions Are Introduced in Es6

### Callback Functions In Js

**what is callback functions in JS**

- functions are first class citizens in javascript that means you can take the function and pass it into another function and when u do so this function which you pass into another function is known as callback funtions
- this callback functions are very powerful in javascript
- it gives us access to the whole asynchrounus world in a synchrounus single threaded language.that means it can do only one thing at a time in specific order. but due to callback we can do async things in javascript

- Here inside x function i passed another function with named y so if u pass a function inside another function this y over here known as **callback function**

- **Example**

-      function x() {

       };
       x(function y() {

       });

- **why this function is known as callback function?**
- because you can think of it as like you call this function sometime else in your code. its not called over here so you give responsibilty of function to another function. so here you passed y function into x so its upto x when this function should be called. that is like this function y called sometime later in your code that is why its known as callback function

- **How it is used Asynchronus task?**
- this function over here which you pass as a 1st parementer to setTimeout is known as callback function. that means it is passed onto setTimeOut and it is called sometime else in your program. and when after certain amount of time which u passed as the 2nd argument which is number miliseconds let take 5000 milliseconds which is 5 seconds
- lets add some code also for visisuliza the things
- **Example**
-       setTimeout(function() {
          console.log("timer");
        }, 5000);
        function x(y) {
            console.log('x');
        };
        x(function y() {
            console.log("y");
        });

- as javascript synchrounus single threaded language that means code will executed one at a time and in Order. so first thing will happen is registering setTimeout so setTimeOut takes the callback function and it will store it into the separate memory space and it will attach timer to it and store it.
- and javascript wont wait for setTimeout to finish over here
- that is why callback functions gives us the power of asynchronity.it does not wait for 5000 milliseconds to expire. whatever needs to be done after 5000 milliseconds we are passing that feature or those piece of code or those line of code as a callback function to setTimeout
- it will move to next part of code it will see function defination of x and it will try to call this x function. it will pass call back function into y and it execute x at this time 5000 milliseconds wont be expired
- after sometime this 5000 milliseconds expired. once timer expired this callback function will be executed.
- so setTimeOut Asynchrounus operation not possible without this callback function. it is like we give this callback function to setTimeOut execute it after sometime in our code which is 5000 milliseconds here

- **Blocking Main Thread**
- in Javascript everything will be executed through callstack only so suppose if any operation blocks the callstack that is known as Blocking Main Thread
- so suppose if the function x has very heavy operation which takes some 20seconds to complete that function by that time because javascript has once call stack it has only one main thread. so it won't be able to execute any other functions in your code that means everything will be blocked on the code. that is why we say we should never bloack our Main Thread.

- we should always try to use asynchrounus operation for things which takes the time.
- using this web api settimeout and callback function we achieve asynchronous operation

- **closure demo along with the eventlistener**
- **suppose count how many times button has been clicked?**
- using global variable is not a good solution.count canot be other functions.here we have use data hiding with closure. for that we have to wrap this into inside the function
- so it forms the closure and attach the eventlistner to this clickme button. so now this callback function forming closure with its outer scope. now if i call this function attachEventListners()
- so basically callback function forms the closure with count and it remember where this count actually present.

- **Garbage Collector and removeEventListeners**
- **why do we need to remove event listners?**
- eventlistners are heavy when i say its heavy it takes the memory so whenever you attach any eventlistner it kind of forms the closure.
- even if we won't execute the single line of code this callstack won't free of the memory. because we never know somebody can click on the button we need this closure to count this
- in this case we can not free up the memory that is why eventlistners are heavy that is reason why we remove evenlistners when we are not using them
- suppose in our page has 1000 of the buttons and 1000 of eventlistners attached to it.onclick onmouseover etc..then our page can go lot of slow because of lot of eventlistners. because so many closures sitting into the memory.consuming lot of memory of their scope. these callback functions hold on that scope. good practise is generally to free up.
- suppose if you remove this eventlistner then all this variables which were held by closure will be garbage collected

### Event Loop

- as you know javascript synchronous single threaded language only one thing execute at one time in call stack and this call stack present in javascript engine and all code in the javascript execute inside the callstack
- and anything comes inside callstack executly quickly it doesnot wait for anything
- **what if we need to run any script after 5 seconds?**
- no we cannot do that.because whatever comes inside callstack it execute immediatly.it you give it script execute it after 5 seconds it cannot because callstack doesnot have timer
- suppose if we have to keep track of the time and we have to execute code after some delay we will need some extra super powers of timer.
- let us see we will get that super power

- if u see diagram call stack is inside javascript engine and javascript engine is inside the browser
- so this browser overall this JS engine in it and Js engine has call stack and inside that program runs
- it also has something known as local storage in it.it can store some data inside it r8?
- you can have timer inside the browser and you also have URL where you write netflix or anything watch your own thing
- this browser has super power of communicating to the external world like netflix server.
- suppose if we have netflix servers if you want to fetch good tv series so this browser can make connection with the server and get the data over there
- even after getting data it displayed in the UI and it also has super of power access ex:bluetooth,geolocation.. etc..
  -if we need access to these super powers.suppose we need to access **timer** or **local storage** or **bluetooth** etc..whatever we need to have that kind of connection
- this js engine need some way to access these super power right.let us see how we can do it

### Web Apis

- to access all these super powers we need **web apis**
- setTimeOut() is not part of javascript and even dom apis document.elementByid whatever you do with document is not part of javascript and locastorage and fetch also
- even console.log() also not part of javascript
- these are the kind of super powers which browser have it. these are the part of the browser.
- and browser give us access to super powser inside JS engine.
- suppose if we have to use timer super power.browser gives access to setTimeOut and if we have to use DOM tree browser gives access to DOM Apis
- fetch gives access to make connection with other servers like external server.
- **we get it all inside the callstack using global object that is window**
- browser gives super power to javascript engine through the keyword called window
- suppose we if want super power of timer inside javascript engine then you have to do something like window.setTimeOut, for localstorage something known window.setTimeout that is how you get access to all these super powers.
- but when we write code we wont write window.setTimeOut(). because window is the global object and setTimeout present in this global scope so you can access setTimeOut without window keyword.
- so if you do window.setTimeOut() or only setTimeOut() its one in the same thing.
- so this browser wraps of all super powers into global object.and gives access of window to this callstack and now you can acces super powers

- **let us move on to examples**
- **Example 1 And Diagram 1**
-          console.log("start");
           setTimeOut(function cb() {
           console.log("callback")
           }, 5000);
           console.log("end");

- here basically console.log is the web api and logs something inside the browser console.and this console web api pluged through window to the javascript code
- and in the next line setTimeOut basically go and call setTimeOut web api this gives access to the time feature and it takes callback function and some delay
- so when u pass callback function to setTimeOut it basically register callback because we pass time it starts counting time inside the timer and move to next line and print **end**
- after completing execution **GEC** pops out of the callstack.and as soon as timer expires this call back needs to executed.
- because we know all this javascript code executed inside the callstack. we somehow need this callback function inside the callstack
- **now eventloop and callback Queue comes into picture**
- as soon as the timer expires this callback function needs to executed in callstack but it wont be execute directly. it will be executed through callback Queue
- so as soon as the timer expires this callback function pushed into the callback Queue and Event loop checks is something is there in callback Queue and its find that callback function and puts inside the callstack and this callstack quickly execute the callback function.
- how its executed is same like it create memory first and code execution same as previous executions
- event loop works like gate keeper it always verfies callback quere if something is present it puts inside the callstack

- **Example 2 And Diagram 2**

-      console.log("start");
       document.getElementById("btn").addEventListner("click", funcion cb(){
        console.log("clicked")
      })
      console.log("end");

- everything here is same as above example only writing setps which are diffrent than example 1
- addEventListner its a super power given by the browser to the javascript engine through window object in the form of web apis which DOM apis
- so whenever you do document.something it basically call DOM apis.so it basically fetches something from the DOM.DOM is document object model its like html source code
- whenever you access DOM apis it gives something from html source code based on id or something like that
- here **addEventListner** register callback on an event click.inside webapis environment this callback registered and event attached to it its click event
- this event will be there until and unless we close the browser or remove the eventlistner
- so once user click on the button this callback function pushed inside the callback queue and wait for execution here **Event loop is super hero** Event Loop keeps on monitoring this call stack and callback queue. suppose if callstack is empty and Event loop check whether anything pending to execute in callback queue if anything is there then it push that into callstack and executing call stack and callback queue will become empty

- **why do we need callback queue?**
- suppose user clicks on the button 7 times.in that case callback function pushed into the callback queue 7 times waiting to be executed inside the callback queue.

- here event loop continously checks whether call stack is empty or not. if its is empty there are some functiones lined up in callback queue so it takes that callback function and pushed inside the callstack and it executes and slowly slowly its pops off from callback queue and slowly slowly it executes all callback functions one by one
- so generally in real life applications we often see that lot of eventlisteners and lot of timer and other things happens inside browser right that is why we need to queue all of this callback functions together so that they get chance one after other because javascript just has this one callstack and everything execute here only. thats how whole thing works

**fetch example**

-      console.log("start");
       setTimeout(function cbT(){
          console.log("call back");
       },5000);
       fetch("https://api.netflix.com").then(
        function cbF() {
          console.log("cb netflix");
        });
        console.log("end");

- fetch basically goes and request api call this fetch returns the promise.and we have to pass the callback function which will be executed once promise is resolved.
- when we get data from server basically this callback function executed.
- **everything same as above example only few things are diffrent**
- here **cbt** and **cbf** are registered inside the web api cbt waiting for time to expire and cbf waiting for data to return from the server
- this fetch() will basically makes call to the netflix server and this server return data back to fetch.so once receive data from server this **cbf** ready to be executed.
- suppose if netflix servers are too fast and we receive data withing 50ms then cbf will be ready to executed once receive the data.
- just like this **callback queue** we also have something known as **microtask queue** its same callback queue but this is having higher priority.whatever function comes in this microtask queue executes first.and in callback queue executed second
- **what comes inside microtask queue?**
- all callback functions which comes through **promises** will go inside the microtask quere.there is alos something known as **mututation observer**(it will check basically keeps on checking whether there is any mutuatation in DOM tree or not if its there it executes)
- here cbf will go to microtask queue. incase of network calls will go to microtask queue.here job of event loop is keeps on checking callstack once call stack is empty it gives chance to these queues to execute
- suppose there 1000 million lines code in program so it takes some time to execute right but here already CBF waiting in microtask queue for executing but we are running million lines of code in our main thread.meanwhile we are running these million lines of code that timer also expired.so here browser is not doing one thing at a time its doing all of things behind the scenes. here javascript engine which is doing one thing at a time.
- so once 5000ms expires this is ready to be executed. CBT will go into callback queue now both CBF and CBT are waiting for executing but still million lines of code executed.
- here event loop continously check whether call stack is empty or not. if it is empty schedule this task. suppose million lines of code completed executing. and there is nothing to be executed. GEC will be deleted from call stack.
- here eventloop continously verify the callstack once call stack is empty.it will see there are some tasks pending in callstack queue and microtask queue. since microtask queue has higher priority first it will execute those tasks there it will pops off from microtask queue and call stack then it will execute callback queue task once its also done removed fromm callback queue and call stack

- **callback queue also known as Task queue**

- **what is Starvation in Js**
- suppose there is a task in microtask queue while executing this task its creating one more microtask like its creating so here the task which is present in callback queue will never get chance to execute.
- there are chances like task which is in callback queue does not get chance to execute for long time this is known starvation

### Js Engine Exposed

- javascript can run in browser & it can run inside server & inside watch & inside robot all these possible because of javascript runtime environment

**javascript runtime environment?**

- its like big container which has all things required to run the javascript code
- to run anypiece of javascript code you definetly need JS engine and it also have set of apis to connect to outer environment & we have event loop & callback queue & microtask queue and we can have lot of things inside javascript runtime environment
- javascript runtime environment is not possible without javascript engine so basically JS engine is heart of javascript runtime environment
- Browser can execute your javascript code because browser has javascript runtime environment
- if you nodejs also has javascript runtime environment and nodejs can run code outside the browser.suppose if you need to run JS code in cooler you need JS runtime environment
- JS can run in lot of devices because of this javascript enviroment
- and these API's diffrent in browser environment maybe diffrent in nodejs environment
- example: suppose in Browser we have local storage api which we use for accessing browser storage and in case of nodejs javascript runtime environment maybe diffrent. here there are common webapis names also for node and browser environment which is console.log() and setTimeout(). but maybe internally implemented diffrently.
- there are lot of javascript engines available each browser has diffrent javascript engine
- example: Microsoftedge has diffrent Jsengine that is **chakra** and mozilla has **SpiderMonkey** and similarly chrome has JSenigne which is **v8engine**
- these engines should follow ECMASCRIPT Standards
- **google about ecamscript and read about it**
- **what was the first javascript engine developed?**
- first javascript engine created by javascript creator himself. his name is Brendan Eich.he developed when he was working in netscape.that engine evolved alot and now it is **spidermonkey** which is using in MozillaFirefox

### Javascript Engine Architecture

- JS engine is not a machine.its just like normal code which is written in low level langugage.suppose v8 engine which is written in c++.its is like piece of code which is written by engineer like you and me.
- that piece of code which is JS engine takes the code which is high level code what we write inside javascript and kind of splits out machine level code which can be executed by machine
- JS engine takes Human Readable code as input. now this code now goes to 3 major steps

1. parsing
2. compilation
3. execution

- **parsing**
- during **parsing phase** code broken down into tokens.suppose you have written let a =7; then let divied like one token & a one token like that
- there is also something known as Syntax Parser.basically it takes code and convert into AST(Abstract Syntax Tree). so just type **const bestCourse = "javascript course"** in the link https://astexplorer.net/
  and see. it kind of genearate tree kind of structure.
- this is AST generated after the parsing level then passed into the **compilation stage**

- **compilation**
- Javascript has something known as JIT(just in time) compilation.
- **is Javascript interpreted language or compiler language?**
- many programming languages used interpretter for executing the code.so it takes code and execute line by line it doesnot know what will happen in nextline.that's how it will be executed.here code executed very fast
- other hand many language uses compiler to compiling the code.here first code will be compilied and code is compiled and new code is formed which optimized version of this code.then it executed.here code has more efficiency
- JS can behave like compiled language as well as interpreted language. everything is depended on JS engine
- when Brendan Eich created JS it used to interpreted language.it used to be run in browser. so browser can't wait for compilation before running or executing the code.
- but in todays world most of the moderen browsers uses an interpreter and compiler both together.so now its is purely depended on JS engine. whether its is purely interpreted or JIT compiler
- JS engine uses interpretter along with the compiler and that makes it JIT compilation.it used interpretter and compiler both for executing the code
- so now AST will go to the interpretter and it will convert high level code into byte code and that code moves to the execution code.while its doing so it takes the help of compiler to optimize the code.
- compiler bascially talks to the interpretter while code being interpretted line by line.here compiler also tries to optimize code as much as it can on the runtime that is why its known JIT compilation.it can happen in multiple phases
- there is something known as AOT(AHead of Time) compilation.in that case compiler takes the piece of code
  which is going to be executed later and try to optimize the code as much as it can.and it also produces byte code which is then goes to execution phase
- execution phase not possible without these 2 components which are Memory Heap and callstack
- Memory Heap this is place where all memory stored.its constantly sink with callstack and garbage collector and etc..
- Memory Heap is the space where all memory is assigned to variables and functions.
- Garbage Collector tries to free up memory whenever its possible.suppose whenever function not being used and we cleared timeout. so it basically collect that garbage and sweeps it.it used algoritam which is **mark & sweep** algoritham
- **study mark & sweep**
- this Mark & Sweep algoritham is very important and widely used across the garbage collector out there not just for javascript only.
- compilation uses other types of optimization those **Inlining, Copy Elision,Inline Caching(try to read more)** while compiling the code.
- all the Js engines has there own way of implementing things but most of browsers having similar to this.
- maybe compilation logic in v8 engine diffrent then spider monkey which is inside the firefox.
- Google V8 has considred has the fastest Js engine right now.
- V8 has the interpretter which is known as Ignition along with that Turbo fan optimized compiler.so this compiler does compilation very fast.they both make your code run very fast.
- they also has Garbage Collectore which is Orinoco it used Mark & Sweep Alogoritham
