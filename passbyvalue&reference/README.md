### Pass By Value

- in Pass By Value function is called directly by passing the value of variable as argument and changing the argument inside the function doesnot effect the variable passed from outside the function
  Javascript always pass by value so changing the value of the variable never changes the underlying primitive(string or number)

### Pass By Reference

- in Pass By Reference function is called directly by passing the reference/address of the variable as argument and changing the argument inside the function can effect variable passed from outside the function
- **in javascript objects and arrays follows Pass By Reference**
- so if we are passing array or object to the method as argument then there is a possibility that value of object can change.

- because when u pass by value here it copies the original value and store the value in new address in memory so when you changes that copied value inside the function it doesn't effect the original value because 2 values in two diffrent memory address space
- but when you do pass by reference you are passing reference/address of that variable so here takes the original value it doesnot create the copy which is why when you change the value inside the function it can effrect the original value.
