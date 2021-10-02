# Using the Map object

This exercise has a few short exercises. Use your browser’s console to write the statements/expressions. I suggest you put the code into a .js file & use dummy html to run it. Try to use arrow functions where/if appropriate.

> Note the [Map object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is not the same as the [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method

Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) site if you are stuck.

1. Create a Map, and add 3 players from your favourite sports team, the key is their jersey number, and the value is an object with: first, last names, position, weight, country of origin.
<br>ex [Canadiens roster](https://www.nhl.com/canadiens/roster)
1. Use the forEach method to iterate over the Map and write the first and last name in uppercase (see the [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)) on the console.
    * optional challenge:  1st letter upper case, other letters lowercase for both names
3. Create a second Map named dream team, with elements Fozzie Bear, jersey 5, and Kermit Frog, jersey 7  (you choose the rest of the info)
4. Merge the two Maps into a third.
    * optional challenge:  from the merged map, create another with jersey as key and last name as value (ex for printing new team Jersies)
6. Iterate through the new merged map and write the info in the objects to the console with a forEach loop. 
7. Iterate through the new merged map loop of your choice (not C style) and add the name and other info of your choice to the DOM in an html structure you prefer (ex list or paras in a div, or section etc.)
