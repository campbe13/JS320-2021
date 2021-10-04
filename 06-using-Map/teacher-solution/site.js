'use strict'

/**
 * my answer to Map lab
 * @author PMCampbell
 */
document.addEventListener("DOMContentLoaded", setup)

function setup () {
    let map = new Map()
    map.set(17, {fname:"Josh" , lname:"Anderson", position: "RW" , weight: 227, country: "Canada"})
    map.set(55, {fname: "Michael", lname:"Pezzetta", position: "LW" , weight: 216, country: "Canada"})
    map.set(42, {fname: "Lukas", lname:"Vejdemo", position: "C" , weight: 198, country: "Sweden"})

    map.forEach((player) => 
        console.log(player.fname.toUpperCase() + " " +  player.lname.toUpperCase()))
    

    let dream = new Map()
    dream.set(5, {fname: "Fozzie", lname:"Bear", position: "RW" , weight: 20, country: "Forest"})
    dream.set(7, {fname: "Kermit", lname:"Frog", position: "C" , weight: 4, country: "Pond"})
    console.log(...dream)   // creates an Array

    let merger = new Map([...map, ...dream])
    merger.forEach(player => logme(player))
    // object as arg
    merger.forEach(player => addToDOM(player))
    merger.forEach(player => addToDOMdiv(player))
    // or loop inside the function (map as arg)
    addToDOMloop(merger)

    // create a map with jersey & last  names only
    let jersey = new Map()
    dream.forEach((player, jerseyno) =>  jersey.set(jerseyno, player.lname))
    console.log(jersey)
    // using key &  value as "primitives "
    jersey.forEach((playername , number) => addToDOMOtherMap(number, playername))
}
function logme (player) {
    console.log(` Name ${player.fname} ${player.lname} from ${player.country}`)
    console.log(` Position ${player.position}, ${player.weight}lbs`)
}
function addToDOMOtherMap (number, name) {
    let div = document.createElement('div') 
    let sect = document.querySelector('#keyvalmap')
    if (!sect) {
        sect = document.createElement('section') 
        sect.id = "keyvalmap"
        sect.textContent ="Using <ul> & Map with primitive key & value Map for Jersies"
    }
        
    document.querySelector('main').appendChild(sect)
    div.textContent =     `Jersey ${number} Name ${name}`
    console.log(div.ltextContent)
    sect.appendChild(div)
} 

function addToDOM (player) {
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    if (!ul) {
        ul = document.createElement('ul')
        ul.textContent ="Using <ul>"
        document.querySelector('section').appendChild(ul)
        }
    li.textContent = 
    ` Name ${player.fname} ${player.lname} from ${player.country}
    Position ${player.position}, ${player.weight}lbs`
    
    ul.appendChild(li)
} 
// same as addToDom, using <div> and <p>
function addToDOMdiv (player) {
    let p = document.createElement('p')
    let div = document.querySelector('div')
    if (!div) {
        div = document.createElement('div')
        div.textContent = "Using <div> + player"
        document.querySelector('section').appendChild(div)
    }
    p.textContent = 
    ` Name ${player.fname} ${player.lname} from ${player.country}
    Position ${player.position}, ${player.weight}lbs`
    div.appendChild(p)
} 
// same as addToDom, using <div> and <p>
function addToDOMloop (team) {
    let div = document.createElement('div')
    div.textContent = "Using <div> + team"
    document.querySelector('section').appendChild(div)
    team.forEach( player => {
        let p = document.createElement('p')
        p.textContent = 
        ` Name ${player.fname} ${player.lname} from ${player.country}
        Position ${player.position}, ${player.weight}lbs`
        div.appendChild(p)
        })
    }