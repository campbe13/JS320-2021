'use strict'

/**
 * lab 03 01
 * add a header
 * input items, add to a list
 * input budget number add after the list
 * @author pcampbell
 */
document.addEventListener("DOMContentLoaded", setup);
let ul, item
function setup() {
    console.log("setup")
   let button = document.querySelector('button')
   button.addEventListener('click', createList)
   // add header
   const h2 = document.createElement('h2')
   h2.textContent = "grocery list"
   document.querySelector('h1').after(h2)
   // handle to input field
   item = document.querySelector('#item')
}
/**
 * event handler create the list 
 * create a ul if it doesn't exist
 * for input items, add to the list
 * create a <p> if it doesn't exist
 * add input budget number add after the list
 * @author pcampbell
 */

function createList() {
    console.log("createlist")
    let inputV= item.value
    ul = document.querySelector('ul')
    if (!ul) {
        ul = document.createElement('ul')   
        document.body.appendChild(ul)
    }
    let li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = inputV
    let para = document.querySelector('p')
    if (!para) {
        para = document.createElement('p')   
        document.body.appendChild(para)
    }
    para.textContent = `Budget $${document.querySelector('#budget').value}`
    console.log(para)
}
