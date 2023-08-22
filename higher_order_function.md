- a function which is passed inside the higher order function known as callback function.which is called sometime else in the program and it is only possible because function are first class citizens in javascript

- **example 1**
-      function x() {
           console.log("Hello Javascript");
       }
       function y(x) {
         x();
       }

- in this example x function passing as argument in y funtion so here **y is higher-order function and x is callback function**
- interviwer will expect in coding round that is reusable code & modular code & how we can write it in functional way
- there is a principle in softwere engineering that is **DRY(Don't Repeat Yourself) Principle**

- **Beauty of Functional Programming**
- functional Programming is huge itself but small part of its says think and make logic according to the function.
- whenever you give coding round interview then you should write in optimial way code.
- we abstarcted our code into smaller functions. and each and every unit of function has its own responsibility.if you see function area just once task to calculate area.and circumference just one task to calculate circumference
- here calcuate function also do one task that is create one array and iterate thorugh all elements in that array and jsut push into output and just return array from that function. and we are not repeating anything here. this is Beauty of Functional Programming. where you think all the logic into small reusable components which are functions.
- **Crucial things in Functional Programming**
- Resusability
- modularity
- how you pass functions into another function
- if you see that now **calculate** function is higher order function and this function area is callback function which is passed inside logic sometimes
- so functional programming deals with pure function, composition of function,reusability, modularity,lot of other things..

-       const radius = [3,4,2,1];
        const area = function(radius) {
          Math.PI * radius * radius;
        }

       Array.prototype.calculate = function (logic) {
          const outPut = [];
        for (let i = 0; i < this.length; i++) {
           outPut.push(logic(this[i]));
        }
           return outPut;
        };

       console.log(radius.calculate(area));
       console.log(radius.map(area));

- suppose if you write **Array.prototype.calculate** means it is avaible on all array you see in your code.so when you out prototype it appears in all arrays
- suppose when you write radius.calculate over here in calculate function the this over here points to the array which is this calculate function called upon.here this would be radius.
- so this is generally we write polyfills. this is kind of like polyfill for map.and this is beauty of functional programming.
- always try to break down your code into smaller pieces.
