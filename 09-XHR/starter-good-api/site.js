"use strict
/**
 * using the https://sunrise-sunset.org/api
 * with input lat & long 
 * create a url + parms & retrieve 
 * the sunrise & sunset from the JSON
 * note: using XmlHTTPRequest not Fetch api
 * 
 * @author pmcampbell
 * @version 2020-11
 */
let globals

document.addEventListener('DOMContentLoaded', setup)

function setup() {
    document.querySelector('form').addEventListener('submit', getSunInfo);
    globals = {}
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
 * this is the callback for the XMLHttpRequest
 * the object returned is a JSON string
 * with  sunrise & sunset in text
 * put  it  into a new para on the page
 *
 * as it is callback from XMHttpRequet event listener
 * this is the response 
 * 
 */
function addPara() {
    let jsondata = JSON.parse(this.responseText)
    console.log(jsondata)
    let p = document.createElement('p')
    globals.main.appendChild(p)
    p.textContent = `sunrise ${jsondata.results.sunrise} UTC sunrise ${jsondata.results.sunset} UTC`;
}
/**
 * retrieve json from a website & perform action on it
 * 
 * @param {string} uri encoded 
 * @param {funct to read Json} action 
 */
function getJSON(uri, action) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", action);
    // 3rd arg indicates async true or false, default true
    request.open("GET", uri)
    request.send();
}
