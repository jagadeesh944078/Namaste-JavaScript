- **can u explain little bit more about it?**
- yes i can each and every function in javascript has access to its outer lexical environment that means access to the variables and functions which is present in the enviornment of its parent and it has each and every function has access to them. so even this function can executed in some other scope not in its original scope. it still remembers its outer lexical environment where it was originally present in the code so that is what closure is.
- **can u give little example to demonstrate it what u said?**
-     function outer() {
         var a =10;
         function inner() {
           console.log(a);
         }
         return inner;

  }
  outer()()

- suppose if we have nested function inside outer function which is inner so actually in javascript this inner function has access to its outer function if i create variable in its outer environment lets call it var a =10; so this inner function has access to this a variable
  so we can do console.log(a)
- so this function along with its lexical environment of its parent forms a closure
- major part of closure is suppose if i return this inner function outside from this function try to access somewhere else in outer scope also still it remember what the value of a is
- if i do outer()() it still prints the 10 even if it is executed outside that lexical scope still it remember value of a this what closure is

- **what is the meaning of the outer()()?**
- if i write **outer()** it will return the inner function so if i add **outer()()** its calls the inner function in the same line itself so if i have to modify this we can write something like this also
-          var close = outer();
           close();
- but both are same
- **suppose if i change the variable declaration before return statement will it from a closure?**
- no no it will still form a closure and it will work the same way. actually this inner function forms the closure with its lexical enivornment of parent. so its not in particular sequence where it is actually present in the code. it still form the closure
- **what if i change let a =10; instead of var a =10;?**
- if we make this as let so this a variable has block scope we can't this **let a** outside the block but still it behaves in same way so this inner function forms the closure even its let variable and its work in same way
- **suppose if u pass any parameter in outer funtion still will it form a closure?**
-      function outer(b) {
         var a =10;
        function inner(){
            console.log(a, b)
        }
        return inner;
      }
      var close = outer("hello world");
      close();
- it will work in the same way because this inner function creates closure with its lexical environment of its parent here this b also part of its outer environment so b also treated in same way so it forms closure with that b also so we will get output as 10 helloworld

### if u add one more function outside will it form closure ?

-       function outest() {
          var c=100;
          function outer(b) {
           var a =10;
          function inner(){
              console.log(a, b, c);
          }
          return inner;
        }
          return outer
        }
  var close = outest()("hello world");
  close();
- yes still it froms the closure with that reference of c also that means we can access c here even if it goes outside will remember c
- what this outest()("hello world") will do is outest() will return the outer function so outer function will be something like this (outest())("hello world") so when outer function called with parameter b "hello world" is passed and its prints **10 hello world 100**

- **suppose we had declared global variable with let a conflict name what will happen?**
-       function outest() {
          var c=100;
          function outer(b) {
           var a =10;
          function inner(){
              console.log(a, b, c);
          }
          return inner;
        }
          return outer
        }
        let a =200;
        var close = outest()("hello world");
        close();

- suppose we have let a at global level with the conflicting name in this case this inner function forms the closure with outer function a value so it has access to that a value. so these 2 variables are like completely 2 different variables so it still forms closure with outer function and it prints 10 only. it does not care about other a value
- but yes if we did not have a value in outer function then it would have defaulted to the its global variable because this inner function forms a closure with its outer function if it doesn't find a value in its outer environment it goes upto the more level hierarchy if it does not find there then it goes to the global scope to resolve that variable then it will print 200 a value
- suppose even a value not there in global scope then the error will be reference error. so it tries to resolve in scope chain if this inner function wont find anywhere in the scope chain like outer environment or parent environment its no where in scope chaing it throws the reference error

- **Advantages of Closure**
- closure is very useful and most beautiful part in javascript i would say. and closure has lot of advantages there are many advantages like its used in module design pattern, function Currying and in some higher order functions like memoize once used there
- it helps in data hiding and encapsulation that is very important

- **can u tell me little bit more about data hiding and encapsulation?**
- data hiding is like suppose if we have a variable and we wantto have some data privacy over it so other function or other pieces of code cannot have access to the particular data that is known as data privacy or data hiding or you can say we can like encapsulate the data so that other functions or other part of code cannot have access to it

- **Data Hiding Example**
-      var count = 1;
       function incrementCounter() {
          count++;//major problem is anybody can access & change this count  variable anywhere in the code;
       }
- here data hiding comes into the picture we want somehow ensure that nobody else in the program can modify this only i we can do thorugh incrementCounter() only to achieve this we use closure
- let me wrap it inside the closure
-         function counter() {
             var count = 1;
            return function incrementCounter() {
              count++;
              console.log(count++);
            }
          }
          var counter1 = counter();
          counter1();//1
          counter1();//2
          var counter2 = counter();
          counter2()//1
          counter2()//2
- now what happen is this count variable is hidden now anybody can't access this count variable from outside so its like we are hiding this data or we are having privacy over this count and it can be achieved through incrementCounter function only
- this is good way to access it
- suppose if we call counter function one more time var counter2 = counter() in this case it will be fresh counter itself it won't touch scope of counter1 this is like new counter itself it will again create new closure with counter2 whenever this counter function runs its creates new independent copy itself

- **is this good and scable if we add decrementCounter function also in that?**
- its not the goodway if we consider in that case maybe we can use constructor function and we can like have separate functions for increment and decrement
- in case of constructor function instead of returning this function we can create like below
-       function Counter() {
            var count = 0;
            this.incrementCount = function() {
                count++;
                console.log(count);
            }
            this.decrementCount = function() {
                count--;
                console.log(count);
            }
        }
        var counter1 = new Counter();
        counter1.incrementCount();
        counter1.incrementCount();
        counter1.decrementCount();

- this is like a constructor function so it constructs new counter whenever this counter function called gives us so suppose we i do
  var counter1 = new Counter() **this is constructor function we will have to use new keyword here** good naming convention will be keep it captial letter. it gives us access to increment and decrement function. so still its data hiding only. it still forms the closure
- suppose if we do counter1.incrementCount() u will get value
- so we can create closure with this constructor function also

- **DisAdvantages of the closures**
- there should be overconsumption of memory because everything closure created it consumes lot of memory and sometimes that closed over variables not garabage collected so that means it accumulate alot of memory if we create a lot of closures because those variables are not garbage collected till the program expires so that is major disadavantage
- if we not handle properly it can also lead to memory leaks. it can freeze the browser if we can not handle lot of closures properly

- **what is garbage collector?**
- garbage collector is like a program in the browser or javascript engine which kind of freeze unutilized the memory.
- suppose in c, java its upto you whether you allocate memory or deallocate memory but in highlevel programming language like javascript most of work done by javascript engine.
- whenever there is unused variables it kind of like its just freeze of memory that is what garbage collector does.

- **relation between garbade collector and closure?**
- let me show by example they are related
-     function a() {
         var x=0,a =0;
         return function b() {
            console.log(a);
         }

  }
  var y = a();

- so here function b creates closure with the function a so if we call a() once execution fineshed x would have been **Garbage collected**
  so it should go out of memoey no long neeed that x suppose x has been used in the inner function it cannot be freezed because it innerfunction creates closure with that x also and later we may use that y() in the program
- so if we form more closures it kind of accumulate lot of memory these variables are not **garbage collected**
- suppose in modern brosers like v8 engine and chrome they basically have smart garbage collected mechanism somehow they findout these variables are unreachable they smartly collect these variables

- **what is this smartly garbage collected mechanism?**
-     function a() {
         var x=0,a =0;
         return function b() {
            console.log(a);
         }

  }
  var y = a();

- here if u see in above example x is not been used so when this b function returned x is smartly garbage collected but a not. though it forms the closure with x and a but once it is returned it kind of create closure with a only and x gone from memory
- in browser console add debugger line at **console.log(a)** and try to **console.log(a)**; u can see value but if u do **console.log(x)** it will give undefined
