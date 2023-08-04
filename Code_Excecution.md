**let us now see what happens in second phase which is a code execution phase?**
![Alt text](<global_execution_stack (1).jpg>)

- second phase is code execution phase
- in this phase this **value 2** over here of n is now being placed actually in this placeholder or the identifier which is n now so **value 2 in the second phase allocated in the place of undefined**
- after finishing **line 1** it goes to **line 2** sees that we nothing to do here **from 2 to 5 line** then it moves to line 6
- here in line no 6 we **invoke the function** here's function invocation
- **when u invoke or execute function brand new execution context is created** and this execution context again has 2 components which is memory component and code component
- here memory creation phase first it will allocate memory to **num and ans** and it will store value as **undefined**
- then in code execution phase **num** will get the value from n
- here **return keyword says now return the control of the program where this function was invoked**
- one more thing that happens when the whole function is executed is that, this whole execution context, for that instance of that function will be deleted
- that means this **whole execution context will now be completely deleted** so now there won't be execution context as soon as we return the value so this whole thing will be deleted
- so in line number 7 again we are invoking a function only diffrence is we are passing value 4 over here as an argument directly that's it
- as soon as this function invokation happens again brand new execution context will be created
- so as soon as Javascript done with all its work now the program is finished so what will happen is the **whole global execution context also deletes**. it goes off

**what do u mean by function invocation?**

- **whenever u see function name with parentheses it means that function is now being executed**

# don't u think that this is all too much to manage for javascript engine?

- suppose there is function invocation inside function you would have created execution context inside an exectuion context and maybe again another invocation it can go to any deep level right?
- function invocation inside again function invocation and all these things so its is very difficult for js engine to manage and it does it very beautifully
- it handles everything to manage this exectuion context creation and deletion and the control it manages the stack it's known as **callstack**
- this is beautiful thing in javascript **it has its own call stack**

# what Is a Call Stack & How Call Stack Works?

- **<a href="/Call_Stack.md">CallStack Brief Info</a>**
