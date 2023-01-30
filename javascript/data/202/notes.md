# JavaScript Data 202 
## The syntax to read data depends on the data type or the data collection in which types  are found. 

## arrays (indices)

- Remember when we are writing data to memory aka input we use ‘var’, ‘let’, or ‘const’
- Index notation is **used to specify the elements of an array.** Most current programming languages use square brackets [] as the array index operator.
- Indices: we use an index to read data from an array
- We use index to read data from an array by enclosing the index value with square brackets. Example below
- **Example #1  - simple  array shopping list**

we use an index to read data from an array by enclosing the indext value within square brackets. 
 ```
 const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]);// --> apples

- shoppingList[0] = ‘apples’
- shoppingList[1] = ‘celery’
- shoppingList[2] = ‘bread’
 ```

**Example # 2 - array of objects**
    ```
    **const cars = [**
    
    {
    
    **color : ‘green’** **,**
    
    **mileage : 67304,** 
    
    **isNew : false** 
    
    },
    
    {
    
    **color : ‘red’** **,**
    
    **mileage : 325699,** 
    
    **isNew : false** 
    
    },
    
    {
    
    **color : ‘blue’** **,**
    
    **mileage : 804,** 
    
    **isNew : false** 
    
    },
    
    ];
    
    console.log(cars); = 
    
    {color:‘green’, mileage: 67304 ,isNew:false},
    
    {color:‘red’, mileage: 325699 ,isNew:false},
    
    {color:‘blue’, mileage: 804 ,isNew:false}
    ```
    - want to see first car in array , type in car[0]
    - answer in node shell : {color:‘green’, mileage: 67304 ,isNew:false}
    - want to see third car in array, type in car[3]
    - answer in node shell: {color:‘blue’, mileage: 804 ,isNew:false}




 ## objects (bracket notion or notion)
 -We use bracket notion or dot notion to read data. 
 -Bracket notion and dot notion apply to objects 
 ```
const car = {
color:'green',
mileage: 67302,
isNew: false 
};
console.log(car['mileage']) // --> 67302
console.log(car.mileage) // --> 67302
 ```

```
we want to know the mileage of the car therefore we do the following using bracket notion inside node shell

**car[’mileage’] and hit  enter ——> 67304 / we call this bracket notion and put string inside of it**

**console.log(car[’mileage’]) // —> 67394**

 **Dot notion** 

- dot notion and bracket notion apply to objects
- We use dot or bracket notion to read data
- Dot notion is easier and used more often than bracket notion . Dot notion helps you save time and strokes.
- Example #1
    
    const car =  {
    
    **color : ‘green’** **,**
    
    **mileage : 67304,**
    
    **isNew : false** 
    
    } ; 
    

we want to know the mileage of the car therefore we do the following using dot notion inside node shell

**car.mileage and hit  enter ——> 67304 / we call this dot notion and put string inside of it**

**console.log(car.mileage) // —> 67304**

```

 ## Simple data types: strings. booleans, and numbers 
 Refer to variable name to read the data. 
 ```
const name = 'Paul';
console.log(name); // --> Paul 
 ```
 - Print inside node shell var name =’Paul’
- console.log(name); = Paul or we can write name directly which will = Paul
- **console.log(name)// —> Paul**
- for simple data types we just write variable name to grab it