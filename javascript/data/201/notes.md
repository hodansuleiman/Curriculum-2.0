# JavaScript Data 201
## Data types can be collection in other structures like objects and arrays. 

### Objects 
An object describes something. It lives inside and closing curly braces and is organize as key:value pairs, seperated by commas. The key and the value are themselves separated by a colon `:`. 

const car (declaring a variable named car) = (equal sign initializing it and the curly brackets state it’s an object) {

```
const car = {
color:'green', → the key is separated from the value by a colon → string
mileage: 67302, → the key is separated from the value by a colon → number 
isNew: false  → the key is separated from the value by a colon → boolean
}; the = sign is initializing and the curly bracket states that it is an object
```
- key value pairs as a group/collection are separated by commas
- **This object will be written in memory and it will known as car**

### Arrays
An array is list of items. It's defined by opening and closing square brackets. The items in the array are seperated by commas. Each item in an array is indexed with a number. Arrays can contain all other data types as well as objects( which is a collection of other data types which is also an array).  Arrays are another way to group data and can come in different shapes and are different from objects, which always look the same. Arrays can get complex. 
```
const shoppingList = ['apples', 'celery', 'bread']; —> defined an array of what type of data = string
const ages = [7,7,8,8,7,5];—> defined an array of what type of data = numbers
const cars = [ —> defined an array of an objects
    {
        color:'green',
        mileage: 67302,
        isNew: false 
    },
        {a
        color:'red',
        mileage: 37412,
        isNew: false 
    },
        {
        color:'blue',
        mileage: 167209,
        isNew: false 
    },
        {
        color:'yellow',
        mileage: 14301,
        isNew: false 
    }
]; → that is how you can write a list(an array) to memory of cars
```

```
javascript considers arrays to be objects. So the shopping list above looks like this to Javascript.

const shoppingList = {
   0: 'apples', 
   1: 'celery', 
   2: 'bread',
    };
```

- arrays can be a mix of different data types
- Neither objects or arrays are data types but they collect other data types and arrays can actually collect other collections like objects
- review in node shell by copying and pasting