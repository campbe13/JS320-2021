'use strict'
/*
 * example of saving to web storage
 * @author PMCampbell
 * 2021-11
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
/**
 * event handler for input from the form
 * drives  reading the information from the form, 
 * populating the JSON object, the array and
 * adding to the DOM 
 * 
 * @author PMCampbell
 * @param {event} e 
 */

function savePuppet(e) {
    console.log("fired by "+e.type)
    console.log("save puppet function")
    e.preventDefault();   // don't send to server
  
    document.puppets.push(readInput())
    addToDom(document.puppets[document.puppets.length-1])

    resetForm()
    console.log(document.puppets) 
    updateLocalStorage(document.puppets)
}
/**
 * reading input from the form
 * creates a JSON object from the information
 * 
 * @author PMCampbell
 * @returns {JSON object} 
 */
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
/**
 * reset all forms in the html
 * @author PMCampbell
 */
function resetForm() {
     Array.from(document.forms).forEach(
         form => form.reset())
         }
/**
 * given an object, add the elements as a li 
 * if there is no ul, create the ul and append the li for the object
 * 
 * @author PMCampbell
 * @param {JSON obj} puppetOBJ 
 */
function addToDom(puppetOBJ) {
    let li = document.createElement('li')
    let ul,text = ""  
    if (!document.querySelector("#puppetul")) {
        ul = document.createElement('ul')
		// using an id incase there are other ULs in the document
        ul.id = "#puppetul"
        document.querySelector('#puppetshere').appendChild(ul)
    } else {
        ul = document.querySelector("#puppetul")
    }
    if (puppetOBJ.muppet)
        text = "Muppet!! "
    li.textContent = `${text} ${puppetOBJ.name} `
    ul.appendChild(li)
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
    document.querySelector("#puppetshere").textContent = ""	
    document.puppets = []
    e.preventDefault();     
}
function updateLocalStorage(puppets) {
    // cannot store an object need to store JSON
    console.log(JSON.stringify(puppets))
    // storing the whole array, could store individual items
    localStorage.setItem('puppets', JSON.stringify(puppets))
}
