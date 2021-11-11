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
strings less than 5 characters.  Use `arguments` instead of defining a parameter. 
```
const words = ["blah", "javascript", "foundation", "bloat", "coding", "antediluvian", "bugs", "beetles"
```
Hint: new array with a _subset_ of the elements, use Array.filter()
<!-- 
for future use
https://www.npmjs.com/package/an-array-of-english-words  
-->
