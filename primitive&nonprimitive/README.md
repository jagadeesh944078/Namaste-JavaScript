### Data Types

- Every Programming Language has data types that are used to store values in variables to perform logical or mathamatical operation.similarly Data types in javascript brodaly divided into 2 groups such as primitive and non-primitive

### Primitive Data Types

- Primitive Data Types are introduces in the EcmaScript Standard
- Primitive Data Types are built in datatypes that are not flexible as user-defined data types
- Primitives can't be modified once the value is assigned and are hence called immutable
- Primitive data type has corresponding object except null and undefined
- immutable in primitive doesn't mean value can't be changed.it means current value can't be modified
- **Example**
-             let sample = "immutable";
              console.log(sample);//immutable
              sample[0] = V;
              console.log(sample);//immutable
              sample = "mutable"
              console.log(sample);//mutable

- when value is changed it stored in new address in memory.and the previous memory address will be deleted automatically using memory manager its called garbage collector in javascript
- **String,Boolean,Number,BigInt,Null,Undefined,Symbol** are primitive data types

- **Boolean**
- The datatype boolean can have 2 values true and false
- it has corresponding object Boolean
- ! operator used to invert the boolean value
- boolean object is far more advantages then the primitive datatype boolean. as it can take different types of parameters such as string, number, null, undefined, object, or array and return either true or false based on the parameter

- **null**
- **null is an assignment value. It can be assigned to a variable as a representation of no value**
- we usally use let and var keywords to declare the variable with null value but const is not used to declare the null value

- **undefined**
- **undefined means a variable has been declared but has not yet been assigned a value**
- Null defines a variable with an empty value and undefined defines a variable with no value.
- The data type null must be assigned by the user whereas, the undefined keyword is automatically assigned by the compiler.
- In terms of values null and undefined are the same, but they differ in data types. The above statement can be verified using the == operator with compares values and the === operator with compares data types.

- **number**
- number datatype used to represent the numeric values & it has object called Number
- if limit exceeds we use datatype bigint
- there is also one property called isNan() property used to check whether its number or not
- isNaN() returns true if input is not a number

- **BigInt**
- BigInt is used to store the numbers that are larger than the safe limit provided by the number data type

- **String**
- string is mostly used datatype which represents the word or multiple words or you can say its combination of multiple characters
- there are many methods present in string object which are used to modify the string object

### Non-Primitive Data types

- **Object**
- An Object is the Collection Of the Properties(property is the member of the Object). and Property is association between key and value. A property can be a function in which case this property is known as method
- Objects are predefined in the browser and you can create your own objects as well

- **Array**
- Array in Javascript Used to store elements of diffrent datatypes and typeof array is object in javascript
- Arrays are zero indexed
- Arrays used to store same values with the same names and it can accessed by using their index number
