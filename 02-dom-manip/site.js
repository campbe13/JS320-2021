'use strict';
/** 
 * lab 02-02  manipulate the dom  
 *  add an unordered list on button click
 *  hide and show an aside on hover over an article
 * 
 * @author PMC
 * 2021-09-08
 */
document.addEventListener('DOMContentLoaded', setup)

function setup() {
    // what happens if you modify firsrChild
    // document.querySelector('footer').firstElementChild.textContent = "P M Campbell"
    document.querySelector('footer').firstElementChild.textContent = "P M Campbell"
    document.querySelector('button').addEventListener('click', addList )

    /*
    let button = document.querySelector('button')
    button.addEventListener('click', addList )
    */
    let main = document.querySelector('#maintext')
    main.addEventListener('mouseover', showAside)
    main.addEventListener('mouseout', hideAside)
}
/**
 * add a ul & li s to section
 * @author PMC
 */
function addList() {
    if (document.querySelector('ul')) 
        return;
    const ul = document.createElement('ul'); 
    const body = document.querySelector('body')
    let li = document.createElement('li'); 
    
    li.textContent = 'JavaScript'
    ul.appendChild(li)
    body.appendChild(ul)

    li = li.cloneNode(true);
    li.textContent = 'Database'
    ul.appendChild(li)

    li = li.cloneNode(true);
    li.textContent = 'Java'
    ul.appendChild(li)
}   
/**
 * unhide the aside
 * https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
 * @author PMC
 */
 function showAside() {
     console.log('showAside')
     //document.querySelector('#hover').style.display = "block"
     //document.querySelector('aside').style.display = "block"
     document.querySelector('#hover').style.visibility = "visible"
}
/**
 * hide the aside
 * display: none rule removes an element from an HTML document.
 * @author PMC
 */
 function hideAside() {
    console.log('hideAside')
    //document.querySelector('#hover').style.display = "hidden"
    //document.querySelector('aside').style.display =  "none"
    document.querySelector('#hover').style.visibility = "hidden"
}