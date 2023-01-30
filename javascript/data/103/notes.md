# JavaScript Data 103
## The data types for `null` and `undefined` are a little different then other, simpler data types. 

### `null`

Let’s say we declare who the captain  name of a team was and the value was null. If we wanted to see this value and we print it to console log wanted to see this it will appear as the following: 
```
let captainName = null;
console.log(captainName)  --> null 
```
Null means an absence of a value because the value itself is null , but it is an intentional absence of a value. So we are saying that we do not want this thing to have a value so we are setting it to be null. In this example , we can say that for example i’ve got this application and what it does is it takes a bunch of players on a team and it randomly chooses one to be the captain. So before it’s done the team captain is null but I know it will have a value you at some point so let me at-least declare it ( let captainName ) that it’s initial value is null and after some of this other code runs it will actually set the value. And because it’s going change we are going to use let instead of const. 

### `undefined`

let captainName; —-this is us declaring a variable and not assigning/ or initializing  it to anything there is no equal sign(=) . We are not assigning and initializing a value to  captainName at all . So the javascript compiler will captainName but it recognize it does not have value assigned to it and will return undefined and when we print it to the  console log it will return
```
let captainName;
console.log(captainName)  --> undefined 
```

null and undefined are values but they are also data types  