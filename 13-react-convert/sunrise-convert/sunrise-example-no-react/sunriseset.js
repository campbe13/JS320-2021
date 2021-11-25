'use strict'
/**
 * using the https://sunrise-sunset.org/api
 * with input lat & long 
 * create a url + parms & retrieve 
 * the sunrise & sunset from the JSON
 * 
 * @author pmcampbell
 * @version 2020-11
 */
let globals 

document.addEventListener('DOMContentLoaded', setup)

function setup() {
    // fire your function on the 'submit' event.
    // In order to use html5 validation
    globals = {}
    // the event is FIRED on the FORM !!! not the input element
    document.querySelector('form').addEventListener('submit', getSunInfo);
    globals.apiURL = "https://api.sunrise-sunset.org/json"
    globals.main = document.querySelector('main')
    globals.lat = document.querySelector('#lat')
    globals.long = document.querySelector('#long')
}
/**
 * read the form info & construct the url
 * then retrieve the data
 * @param {*} e 
 */
function getSunInfo(e) {
    e.preventDefault()
    let url = constructURL();
    getJSON(url, addPara)
}
function constructURL() {
    let url = new URL(globals.apiURL)

    // construct  params  ?lat=99.99&lng=99.99
    url.searchParams.set("lat", globals.lat.value)
    url.searchParams.set("lng", globals.long.value)
    console.log(url)
    return url
}

/**
 * given JSOn with  sunrise & sunset in text
 * put  it  into a new para on the page
 * 
 * @param {JSON} jsondata 
 */
function addPara(jsondata) {
    console.log(jsondata)
    let p = document.createElement('p')
    globals.main.appendChild(p)
    p.textContent = `sunrise ${jsondata.results.sunrise} UTC sunset ${jsondata.results.sunset} UTC`;
}
/**
 * retrieve json from a website & perform action on it
 * 
 * @param {string} uri encoded
 * @param {funct to read Json} action 
 */
function getJSON(uri, action) {
    fetch(uri)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        }).then(json => action(json))
        .catch(err => handleError(err))
}
function handleError(err, uri) {
    console.log('Problem : ' + err.message)
    let p = document.createElement('p')
    globals.main.appendChild(p)
    p.textContent = 'Problem : ' + err.message 
}
