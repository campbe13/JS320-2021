'use strict'   

document.addEventListener("DOMContentLoaded", setup);
/**
 * set up event listeners for the change and  save buttons and restore
 * https://developer.mozilla.org/en-US/docs/Web/CSS/display
 */
function setup() {
    document.querySelector('#colour').addEventListener('click', changeBGColour);
    // button not shown, change it  when you have someting in storage
    document.querySelector('#restore').style.display = 'none';
}

/**
 * generate & return a random number
 */
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
/*
 *  This is the 1st function for the button
 */
function changeBGColour() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
/**
 *  Save the colour in session storage (gone when closed)
 */
function saveBGColour() {
}
/**
 *  Save the colour in session storage (gone when closed)
 */
function restoreBGColour() {
}
