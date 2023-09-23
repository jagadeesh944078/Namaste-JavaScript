### Promises

- promises are used to handle asynchronous operations in javascript
- **what is promise?**
- promise object is a placeholder for certain period of time until we receive value from asynchronous operations or you can say promise is the container for the future value or promise is the object representation of the eventual completion or failure of asynchronous operation

- **javascript gives gurantee that this promise object execute only once**
- **promise objects are immutable whenever we have promise object inside promiseResult we can pass here and there and we dont have to worry that someone can mutute this data. because no can mututate it**

- there are 3state in promise object &

1. Pending
2. Fullfilled
3. Rejected

- PromiseState tells what state the promise is in & PromiseState initially its pending state but it returns data PromiseState will become fullfilled. PromiseResult stores whatever data it returns stores in PromiseResult

- **Example**
- createOrder method no longer accepts callback function and it returns the promise and iam capturing that promise inside promise variable.you can assume promise as object with some data value so as soon as it hit that line it returns promise with undefined because it may take sometime to reslove promise.it go on execute another lines of code.once it is resolved undefined will be replaces with actual data

- once we receive orderdetails we attach callback function to this promise object using then() its avaiable over promise object

- ### Promise Chaining
- to avoid callback hell we actually use promise chaining concept
- you have to write return always when you are doing chaining then only data passed down the chain.so here our code will not grow horizantally but it goes in meaningfull chaining process
