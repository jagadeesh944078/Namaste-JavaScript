### what is the this value inside the global space?

- its a global object that canbe diffrent that canbe window or global or something else depends on where you are running that javascript code
- this keyword works diffrently in strict mode and nonstrict mode
- if you are using this keyword inside function scope then this keyword will be diffrent in strict mode and nonstrict mode
- if its strict mode value undefined and nonstrict mode you get window object

- accoding to the **this substitution** if the value of this keyword is null or undefined this will be replaced with global object only in nonstrict mode

- this keyword value depends on how the function is called
- if function is called without any reference of the object then value is undefined ex:x();
- but if you call window.x() it will give window object
- if you write any function inside the object that is the method

// this inside the object

// this i

- arrow functions dont provide their own this binding.it retains the this value of the enclosing lexical context

- **strict mode vs non strict mode**
- non strict mode
- if bf is present output bf or crush

- if you want to call function with any object basically we use call method by passing that object reference
