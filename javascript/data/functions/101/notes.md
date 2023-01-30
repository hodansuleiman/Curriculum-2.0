# JavaScript Functions 101
## A general overview 

**A general overview** 

In JavaScript, a function **allows you to define a block of code, give it a name and then execute it as many times as you want.** A JavaScript function can be defined using function keyword.

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

### Terms

**anonymous function**
A function that is not named (see also function expression).
In this function expression, the function part is considered anonymous.
```

const greeting = function(name){
    return 'Hello ${name}`;
}
```

**argument**
A hardcoded value passed into a function when it is executed. In the example below `'John'` in between the parentheses is the argument.
```

function greeting(name) {  - (name) after function greeting is the argument passed in via definition
 return `Hello, ${name},you sure look nice today.`; - name is a dynamic value. Whatever the value is for name it will be renedered in this location ${name} when we execute the function  
}

greeting('John') - **hardcoded value (only equals John) passed in during execution**
**return Hello, John you sure look nice today.**
```


**call**
An action which executes (or fires) the funciton.


**callback function**
Executes within the function to which it is passed as an argument.
```
const cb = function (){
    console.log('I am the callback.');
}
function greeting(name, fn){
    fn();
    return `Hello ${name}`;
}
greeting('Billy',cb)

```


**function**
There are two contexts. One is the funciton definition itself.  When you use the function keyword the computer can tell you are defining the function. Another is the code within the definition which excutes when it is called and which sometimes returns a value. 

Example 

**defining a function** 

function greeting() {

return ‘Hello, you sure look nice today.’;

}

**execution** **calling a function** 

greeting() - the code within the definition which **executes when called** 

returns 

‘Hello, you sure look nice today,’


**function body**
Contains the code of the function itself within a set of curly braces. The function body is part of the syntax.  Everything within the curly braces is what we refer to as our function body. The function body contains  code within the definition which executes when called and which sometimes returns a value. 


**function declaration**
Uses the _function_ keyword to declare a named function . The name of the function immediatly follows the _function_ keyword.The name of the function immediately follows the function_keyword. Function declaration and function expression do the same thing but there is a slight difference. 
```
function greeting() {
 return 'Hello, you sure look nice today.';
}

```


**function expression**
A function that is the initialization of a variable declaration. 
The variable which is named, stores the fucntion but the function itself is considered anonymous or unnamed. 

```
const greeting=function() {
 return 'Hello you sure look nice today.';
}
```

**Function declaration and function expression do the same thing but there is a slight difference.** 

A function that is the initialization of a variable declaration. What we mean by that is we are declaring a variable or const and after we declare it we are initializing it.  The variable which is named, stores the function but the function itself is considered anonymous or unnamed.

**Const is a key word that declares a named const of greeting (in this example). In addition to declaring it we are initializing (equal sign =) it with the whole function which technically unnamed.**

```
`const greeting=function() { declare, and initalize 
 return 'Hello you sure look nice today.';
}
```

**hoisting**
Allows a funciton declartion to be used in code before it is declared.


**IIFE** 
An _immediately invoked function expression_ is a function that is executed directly by the JavaScript engine and not by other code.
```
(function (){
    return 'Hello';
}) ();
```
IIFE can also have arguments and parameters. 

```
(function (name){
    return `Hello,${name}.`;
    })('Carlos')

```


**named function**
See function declartion. AKA when you name the function after defining the function using the function keyword. 

```
function greeting(name) {  - greeting is the function name 
 return `Hello, ${name},you sure look nice today.`; 
}
```


**parameter**
A placeholder whose value equals the argument passed into the function when it is called. This value is accessed only within the function itself.
In the example below 'name' inside of the parentheses is the parameter.
```
function greeting(name) {
 return `Hello, ${name},you sure look nice today.`;
}

```

```
function greeting(name) {  - (name) after function greeting is the argument passed in via definition
 return `Hello, ${name},you sure look nice today.`; - name is a dynamic value. Whatever the value is for name it will be renedered in this location ${name} when we execute the function  
}


```


**parentheses**
The parentheses have two purposes. One is to call or excute a function. Another is part of the syntax to define the function. In the former, it may contain arguments. In the latter, it may contain parameters.

```
 Example 

**defining a function** 

function greeting() { - when using the function keyword these parentheses are needed as part of the syntax. **The parentheses may contain parameters in the definition.  parentheses does not fire the function because it can tell we are defining because we are using the key word ‘function keyword aka a function declaration’ . These parentheses always follow the name of the function and it is just part of the syntax.** 

return ‘Hello, you sure look nice today.’;

}

**execution** **calling a function** 

greeting() -  **In this example the parentheses simply execute definition. We need the parentheses to fire or execute the function. The parentheses may contain arguments in the execution.** 

‘Hello, you sure look nice today,’
```


**return**
If implemented, it executes the last line of a function's code. It precedes a data type or a collection to be returned( the return keyword returned a data type(string, boolean, number) or collection(array or object)).We say that a function closes or exits when the code follows _return_ excutes which also means that any lines beneath it are ignored. What we mean by this is a return is the last thing that happens inside a function and if we put any lines beneath is they will not execute. The last line is the line that ends in a semi colon ; Anything beneath that will not fire. 


**scope**
Refers to what values are available in memory at a given time during the execution of code.You can only access what is in memory (i.e. the argument or parameter) inside the function. Once you are outside the function it is no longer memory and out of scope. 