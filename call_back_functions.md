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
