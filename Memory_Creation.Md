**let us see what happens in first phase which is a memory creation phase ?**
![Alt text](global_execution_stack.jpg)

- in first phase javascript **allocate memory to all variables and functions**
- as soon as JS encounter line 1 it will allocate memory to n so it will reserve a memory space for n
- similarly now javascript goes to the line 2 in this it sees that there is a function which is named as **square** now it will allocate some memory for **square function**
- When it allocates memory to n it stores special value which is known as **undefined** and incase of functions it literally **stores the whole code of the function inside this memory space**
- now it will allocate memory to square2 and square4 as well **as there are another variables it will again store undefined for them**

**summary**

- in the first phase javascript skims through the whole program line by line and it allocate memory to all variables and functions
- as soon as it encounter "n" it reserves memory for it and allocate special value **undefined** to it
- **undefined is like placeholder, a special keyword in JS**
- incase of functions this function square this whole function code literally(you can assume it to be) copied over here in the memory space that's how it is
- for the remaining 2 variables again allocates memory and store specical keyword **undefined** to them

**Code Execution Phase**
**<a href="/Code_Excecution.md">code execution phase</a>**
