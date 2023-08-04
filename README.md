- do u know when u run javascript code alot of things happen behind the scene inside **javascript engine**
- Everything in javascript happens inside an **execution context**
- javascript isn't possible without this beautiful execution context

# what happens when u run Javascript Code?

**<a href="">Javascript</a>**

# Hoisting

-     getName()
      console.log(x);
      var x = 7;
      function getName() {
        console.log("Namasthe Javascript");
      }

      output:
      Namaste Javascript
      undefined

- In JS, before the code is executed, the variables get initialized to undefined.
- Hoisting is a phenomenon in javaScript by which you can access variables and functions even before you have initialized them or you have put some value on them. you can access it without any error.
- Hoisting allows functions to be safely used in code before they are declared
- even before start executing javascript program memory allocated to each and every variables and functions
- even before this code has executed javascript has reserve a memory for x and place a special placeholder undefined to it
- incase of function whole code put in here for getName we can see actually copy of function when u try to debug in browser

**diffrence b/w not defined and undefined**

-     getName()
      console.log(x);

      function getName() {
        console.log("Namasthe Javascript");
      }

- suppose if u have removed the variable initialization x here as soon as it goes to the first line now we haven't reserved memory for x only we reserved memory for getName function
- now if it try to access x here there is no memory allocated for x and here x is not present that means now javascript throw an error like **reference x is not defined** that means nowhere x is initialized in the program but you are trying to access the value of x

-     getName()
      var getName = () => {
        console.log("Namasthe Javascript");
      }
- suppose incase of arrow function it behaves like a variable not like a function so in memory allocation face **it will allocate memory with the placeholder undefined just like x**
-     getName()
      var getName = function () {
        console.log("Namasthe Javascript");
      }
- even in this case also it behave just like variable only
- <a href="https://github.com/jagadeesh944078/Namaste-JavaScript/blob/main/index.js">Javascript</a>
