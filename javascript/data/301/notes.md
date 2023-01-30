# JavaScript Data 301
## Understanding immutability comes down to understanding how data is stored in memory.

**Defintion of Immutability**
Primitive data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory and if it is later re-initialized(e.g re-assigned), it will live at a new,unique address. If a variable is initialized by reference, instead of by value, its unquie address points to the referred address. 

**List of primitive data types**
* strings
* booleans 
* numbers
* null
* undefined 

**Example**
```
let age = 32; // initializes by value, it gets a unique addrress (e.g. Hx78) 
let marysAge = age; // initializes byt reference, it gets a unique addrress (e.g. Rw33) 
but this address doesn't hold a value, it simply points to Hx78
age = 33  // with reinitialization the new value is stored at a new address (e.g Xa15)
```

**Defintion of Mutability**
Collections of primitive data types are mutable, which ,means means that when they are moditified or updated the data is not stored at a new addreress but remains at the orginal address when the variable was first declared.

**List of collections**
* arrays
* objects 
