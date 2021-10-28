'use strict'
/**
 * Lab 1 week 10
 * Steps 
 * 1. look at the api instructions for constructing the url
 * 2. manually create a couple of urls & test them
 * 3. look at the data returned by the urls (Firefox or jsoneditoronline.org)  (how would I access it?)
 * 4. write the fetch statements
 * 5. log the data  - to make sure it is ok
 * 6. use the data to add to the html
 * 
 * pmcampbell
 * 2021-Fall
 */
let global      // global define (init in setup())

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    global = {}
    global.ul = document.querySelector('ul')
    document.querySelector('form').addEventListener('submit', getData);
    global.url = 'https://reqres.in/api/unknown/'
}

function getData(e) {
    e.preventDefault()
    let num = document.querySelector('#num').value
    fetch(global.url + num)
    .then(response => {
        console.log(`status: ${response.status}`)
        if (!response.ok) {
            // set up dummy object to show error
            addLi( { data : {
                name : `HTTP error! status: ${response.status}`,
                color :'#39FF14'
            }})
            throw new Error(`HTTP error! status: ${response.status}`)
        } else {
            return response.json();
        }
    }).then(json => addLi(json))
    // equiv to ^ }).then(addLi(json))
    .catch(e => 
            { console.log('Problem with something: ' + e.message);});
}

function addLi(colourObj) {
    console.log(colourObj)
    let li = document.createElement('li')
    global.ul.appendChild(li)
    
    li.textContent = colourObj.data.name
    li.style.color = colourObj.data.color 
}
