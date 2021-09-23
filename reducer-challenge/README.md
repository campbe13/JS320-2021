# reducer challenge

I gave you this example in class 
```js
const weather = ['rain', 'snow', 'sleet'];
// initial value “In February it can “
console.log(weather.reduce((prev_weather, curr) => 
     prev_weather + curr + " and ", "In February it can "))
```

The result ends with a trailing and, your challenge is to change the reducer callback to 
make sure there is no trailing and but it ends in a period. 

Hint: use the other parameters in the reducer
