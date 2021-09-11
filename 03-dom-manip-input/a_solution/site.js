'use strict'

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
