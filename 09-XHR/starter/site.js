'use strict'

document.addEventListener("DOMContentLoaded", setup);

let global  //global namespace

function setup() {
    global = {}
    document.querySelector('form').addEventListener('submit', xhrGETData);
    global.country = document.querySelector('#country');
}

function xhrGETData(evt) {
    evt.preventDefault();

    const url = "https://www.trackcorona.live/api/countries/" +
        encodeURI(global.country.value);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) { //same as 4
            // The response was received.
            if (xhr.status === 200) {
                // Ready to process the data
                let data = JSON.parse(xhr.responseText);
                display(data);
            } else {
                console.error('There was a problem, status code:' + xhr.status);
            }
        }
    };

    xhr.send();
}


function display(json) {
    let section = document.querySelector('section');
    let para = document.createElement('p');
    section.appendChild(para);

    if (json.data.length > 0) {
        para.textContent = json.data[0].location + " " + json.data[0].confirmed +
            " cases as of " + json.data[0].updated;
    } else {
        treatError('Country code not found.')
    }
}
