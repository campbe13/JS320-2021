'use strict'


/* this is starter code
 * it does not add the input data to the dom
 * use it to add a couple of fields and add the info to
 * the dom on startup and when you add a new element
 */
document.addEventListener('DOMContentLoaded',setup)

function setup() {
    // fire your function on the 'submit' event in order to use html5 validation
    // the submit event is FIRED on the FORM !!! not the input element
    document.querySelector('form').addEventListener('submit', savePuppet);
    document.querySelector('#clear').addEventListener('click', clearStorage);
	
	// could use global variable instead
    document.puppets = [];  // set up array in the dom	
	
	// will populate the DOM if there is saved information
	document.puppets = readFromLocalStorage()
    console.log(document.puppets)
    document.puppets.forEach(puppet => addToDom(puppet))
    
}
function savePuppet(e) {
    console.log("fired by "+e.type)
    console.log("save puppet function")
    e.preventDefault();   // don't send to server
  
    document.puppets.push(readInput())
    // implement a function to add to the DOM

    resetForm()
    console.log(document.puppets) 
    updateLocalStorage(document.puppets)
}
function readInput() {
    const name = document.querySelector('#name').value;
    const muppettf = document.querySelector('input[name="muppettf"]:checked').value;

    console.log("name :"+name+    " muppet t/f :"+muppettf);

    let tf = muppettf == "false" ? false : true
    
    let puppetOBJ =  {
        name:  name,  muppet: tf
    }
    console.log(puppetOBJ) 
    if (puppetOBJ.muppet)  {
        console.log(`it's a muppet! ${puppetOBJ.name}`)
    } else {
        console.log(`it's not a muppet ${puppetOBJ.name}`)
    }
    return puppetOBJ
}
function resetForm() {
     Array.from(document.forms).forEach(
         form => form.reset())
         }
function readFromLocalStorage() {
    if (localStorage.getItem('puppets')) {
        console.log("puppets in local storage")
        // saved with stringify, must return to JSON
        return  JSON.parse(localStorage.getItem('puppets'))
    }
    return []
}
function clearStorage(e) {
    // missing reset the array and the html list
    console.log("clear storage function");
    localStorage.clear() 
    e.preventDefault();     
}
function updateLocalStorage(puppets) {
    // cannot store an object need to store JSON
    console.log(JSON.stringify(puppets))
    // storing the whole array, could store individual items
    localStorage.setItem('puppets', JSON.stringify(puppets))
}
