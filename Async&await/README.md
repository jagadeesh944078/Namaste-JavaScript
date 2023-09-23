### Async/Await

- **what is Async?**
- Async is keyword that is used before the function to create the Async function
- **what is the diffrence between normal function & async function?**
- this async function always returns the a promise
- there are 2 cases here either you return direct promise using return keyword or even if you return string value also that will wrap the value inside promise and it return the promise
- so always async function returns the promise && in any case it will always return the promise
- **Example**
-              async function getData() {
                    return "Namste";
               }
               const dataPromise = getData();
               dataPromise.then(res => console.log(res));

- **using Await with Async keyword**
- Async and Await combo is used to handle the promises && await is the keyword that can be used only inside the async function
- and await keyword can be used infront of promise and it resolves the promise

- **Interview Tips**
- **what is async/await?**
- async is the keyword which is used along with the function and async functions are diffrent thing and await can be used only inside async function to handle the promises and these promises are asychronous.
- then give example and show them how it wroks

- **async/await vs Promise.then/catch**
- async/await is syntactic sugar over then & catch
- **what is syntatctic sugar?**
- it means when we use this async/wait behind the scenes Javascript is using its own promise.then promise.catch all that staup only.
- so basically only effect which is happening is happening in the code how we write.javascript we treat your program exactly like how it used to treat older way of treating.that is async/await are syntactic sugar over native promise.then/catch
- its like only syntax level change
- to be honest both are better.sometimes it little makes sense to write aysn/await way. why because when you see async/await its easier to read you can void promise chaining. its compeltly personal choice and its new way of writing and when you do debug it actually makes sense
