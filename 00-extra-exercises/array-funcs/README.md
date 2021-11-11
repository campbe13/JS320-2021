# Using array functions

## array of strings  - trim
Define a function `trimArray` that takes an array of strings as an argument and returns a new array with the spaces in the strings removed.
Note you can use the [String.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

```
let array = [ "       blah    ",   "    123   ", "    bleh   " ]
let trimmed = trimArray(array)
// results in trimmed  [ "blah", "123", "bleh" ]
```
Hint: new array with _all_ of the same elements, use Array.map()

## array of strings - short / long 
Define a function `shortOnly` that takes an array of strings as an argument and returns a new array with 
strings less than 5 characters.  
```
const words = ["blah", "javascript", "foundation", "bloat", "coding", 
      "antediluvian", "bugs", "beetles"]
let short = shortOnly(array)
// results in short ['blah', 'bugs']
```
Hint: new array with a _subset_ of the elements, use Array.filter()<br>
Challenge: Use `arguments` instead of defining a parameter (so you can give it multiple arrays as arguments)
<!-- 
for future use
https://www.npmjs.com/package/an-array-of-english-words  
-->
## array of numbers - various
Starting with an array containing numbers (ex 1 through 10) use filter, map, and reduce to produce the following from it
* odd numbers only
  * new array with a _subset_ use Array.filter()
* numbers divisible by 2 or 5
  * new array with a _subset_ use Array.filter()
* numbers divisible by 3 but squared
  * new array with a _subset_ then all elements modified use Array.filter().map()
* the sum of all even numbers
  *  new array with a _reduced subset_ use Array.reduce()
```
const nums = [1,2,3,4,5,6,7,8,9,10]
```
## array of numbers 
Define a function `increase` that takes an array of numbers and a multiplier as arguments and returns a new array which contains the original times the multiplier.
```
const nums = [1,2,3,4,5,6,7,8,9,10]
let numstoo = increase(nums, 2)
// results in numstoo [2,4,6,8,10,12,14,16,18,20]
```
## remove an element
Define a function `remover` that takes an array and one of the values in the array as arguments.  It returns a new array which has the value removed from the array.
```
const nums = [1,2,3,4,5,6,7,8,9,10]
remover(nums, 2)
// results in nums [1,3,4,5,6,7,8,9,10]
const words = [ "blah", "123", "bleh" ]
remover(words, "bleh")
// results in words [ "blah", "123" ]
```
Hint: new array with one removed, use Array.indexOf() and Array.splice()<br>
Maybe: Array.reduce()

Challenge: instead of a single element to remove use the spread syntax for the 2nd parameter and remove all elements in it
```
const nums = [1,2,3,4,5,6,7,8,9,10]
remover(nums, 2,4,6)
// results in nums [1,3,5,7,8,9,10]
```
