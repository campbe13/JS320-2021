## Using APIs
```js
const countriesAPI = 'https://restcountries.com/v3.1/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### Level 1
Documentation for the api https://restcountries.com/
1. Read the countries API using fetch and log the name the name of each country, capital, languages, population and area.  
2. Put the the name of each country, capital, languages, population and area onto the DOM, elements of your choice.

### Level 2
Documentation for the api https://thecatapi.com/ 
For this, you may want to use flex,  have the `<ul>` in a flexbox on the lhs and an `<img>` on the rhs
1. For each breed put the name and the image url and the wikipedia url in an object, add the object to an array or Map (ex breed name as key) your choice.
2. Display each breed name on the DOM in a `<li>` which is in a `<ul>` 
3. Attach an event listener to the `<ul>` 
4. When the event listener fires 
   * determine which cat was clicked (which is it you use e.target or e.currentTarget???)
   * display the image for that cat (use your Map/array entry) for the `<img>` src
   * add a caption to the image that is clickable, href= the wikipedia URL

### Other, optional
1. Read the cats api and find the average weight of each cat in metric units
2. Read the countries api and find out the 10 largest countries
3. Read the countries api and count total number of languages in the world used as official languages

Exercise originally from   https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/18_Day_Promises/18_day_promises.md#exercises  

### in class exercise
Doughnut RESTful api
Given the url https://doughnut.ca the search param `doughnut=sprinkler`  & the below example response write a method to retrieve the data 
* Use the URL class
* Use setparams methods
* Use fetc() and any necessary chained methods.
* Using the response iterate through & log the toppings
```JS
{
"name": “fancy”, 
"price": 1.55, 
"toppings": ["sprinkles", "vanilla icing", "chocolate chips"],    
"type": "yeast dough"
}
```
