# Javascript 101
## Writing data to memory in Javascript 

Can be done with one of the three keyword: ‘VAR’, ‘LET’. AND ‘CONST’

- Writing data and reading data is expressed as input and output
- Writing data is basically saving data to somewhere
- In javascript data is saved to memory we can store it there and until that memory is cleared and the data will be there but that means the if you close your browser or the computer crashes you will lose the data.
- None of this writing data to the hard drive that would be persist() to data.
- When we write data to memory in javascript we use three key words which are  ‘var’, ‘let’ , and ‘const’ .

- **‘var’ explanation** we can do something like var name = ‘Paul’ this is declaring a variable (var) with a name of (name) and initializing or assigning it a value or equal (=) it to (Paul the value);. At the moment what we are doing is initializing this to be a ‘string’. Avoid using var because it is older and everything that var does we can get out of ‘let’ and ‘const’.

`var`
```
var name = 'Paul';
```


- ‘**let’ explanation**  we can do something like let name = ‘Paul’ this is declaring a variable (let) with a name of (name) and initializing or assigning it a value or equal (=) it to (Paul the value);. At the moment what we are doing is initializing this to be a ‘string’. When you declare a variable with ‘let’ the javascript assigner says yes you can change it or reinitialize it. When doing this we do not have to declare it again i.e name = ‘Paula’ because we know it is already stored in memory has let name = ‘Paul’. If you the value will change use ‘let’.

`let`
```
let name = 'Paul';
name = `Paula`; (reassignment is allowed)
```


- **‘const’ explanation**  we can do something const var name = ‘Paul’ this is declaring a variable (const) with a name of (name) and initializing or assigning it a value or equal (=) it to (Paul the value);. At the moment what we are doing is initializing this to be a ‘string’. Const is short for constant and the value (’Paul’) cannot be reassigned. When we write to memory it keeps track for us but it will also let us change it to something else. But if we already have declared it using const we cannot reassign it. Const says you never want this value to change. If you know the value is never going to change use ‘const’.

`const`
```
const name = 'Paul';
name = `paula` (reassignment is not allowed);
```
