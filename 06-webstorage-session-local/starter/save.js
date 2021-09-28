'use strict'   

document.addEventListener("DOMContentLoaded", setup);
/**
 * set up event listeners for the change & save buttons
 */
function setup() {
    document.querySelector('button').addEventListener('click', readName) 

    showName()
	
}

/*
 *  This is the event listener for the button
 */
function readName(e) {
	saveName()
	showName()
	e.preventDefault()
}
/**
 *  Save the colour in session storage (gone when closed)
 */
function saveName() {
    sessionStorage.setItem("name", document.querySelector('#name').value)
}
function showName() {
    document.querySelector('p').textContent = sessionStorage.getItem("name");
}

