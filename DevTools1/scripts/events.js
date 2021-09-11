"use strict";   // always

// when the DOM is loaded we want to set up our listeners
document.addEventListener("DOMContentLoaded", startup);
const muppet = document.querySelector("#name");

function startup() {
    // get a handle on the button / image / or whatever
    const btn = document.querySelector('#colour');  // using id
    btn.addEventListener('click', changeBGColour);

    // get a handle on the button / image / ??
    const btn2 = document.querySelector('button.alert');  // use class
    console.log("btn2 " + btn2);
    // attach an event listener that will execute our function
    btn2.addEventListener('click', showAlert);
    // set my own var in the document object
    // for swapping font
    document.muppet = "Fozzie";
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
// This is the function for the 1st button
function changeBGColour() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    muppet.textContent = document.muppet;
    swapMuppet();

}
// This is the function for the 2nd button
function showAlert() {
    alert("You rang? " + document.muppet);
    swapMuppet();
}
// swap the document obj between Kermit & Fozzie
function swapMuppet() {

    if (document.muppet === "Fozzie") {
        document.muppet = "Kermit";
    } else {
        document.muppet = "Fozzie";
    }
}
