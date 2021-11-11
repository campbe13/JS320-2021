# array function (some) solutions 
## array of strings  - trim
```
function trimArray(arr){
  return arr.map(name => name.trim())
}
```
## array of strings - short / long 
```
const words = ["blah", "javascript", "foundation", "bloat", "coding", "antediluvian", "bugs", "beetles"
function shortOnly() {
  // using arguments object
	return Array.from(arguments).forEach(array => array.filter(word=>word.length<5))
  }
function shortOnly(array) {
	return array.filter(word=>word.length<5))
  }

 ```
## array of numbers - various
```
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// odd numbers only
numbers.filter(number => number%3 === 0);
// numbers divisible by 2 or 5.
numbers.filter(number => number%2 === 0 || number%5 === 0);
//An array of numbers divisible by 3 and then squared 
numbers.filter(number => number%3 === 0).map(odd => odd*odd);
//The sum of all even numbers 
numbers.reduce((accum, curr) => accum + ((curr % 2 === 0) ? curr : 0) , 0)
