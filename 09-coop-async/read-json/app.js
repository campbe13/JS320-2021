'use strict'

/**
 * read a json file from disk using fetch & promises
 * 
 * @author pmcampbell
 * 
 */
document.addEventListener('DOMContentLoaded', setup)
/* 
// simplest if everything works ok
function setup() {
    fetch('sample.json')
    .then(response => response.json())
    .then(data => JSON.stringify(data))
    .then(dataString => {console.log(dataString))
    .catch(error => console.log(error))
}
*/

// use the object 
/*
use the ogext
when I rename sample.json to samplex.json so that it cannot  be read
the fetch api does not fail, it is the nature of the http protocol
the response is a 404 error  this is a valid response
you would get an error/fail if the server timed out or the network card
failed etc.

Try the below  ( syntax .then(resolvecallback, rejectcallback) )
1.  sample.json  file exists, http gives a response so the result is resove,
    meaning the server actually responded so it's not an error,
    we check the response code 200 ok is good,  we use the data
2.  use http://blah.com/sample.json   host does not exist so this is an http error, 
    meaning no server responded so it IS an error, 
    result reject, no reject defined so jump to catch
3.  use filedoesntexist.json  file does not exist, but http gives a respone so the result is resolve, 
    meaning the server actually responded so it's not an error,
    so we check the response code, the result is not what we want so we throw an error & it jumps to the catch
*/ 
function setup() {
    fetch('sample.json')
    .then(response =>  {
        if (response.ok)
            return response.json()
        else 
            throw ('got a response from server, but not ok :( ')  
    })
    .then(data => {
        logObj(data)
        return JSON.stringify(data)
    }).then(dataString => console.log("stringified " +dataString))
    .catch(error => console.log("error " + error))

}
/* 
{
    "Name": "Test",
    "Mobile": 12345678,
    "Boolean": true,
    "Pets": ["Dog", "cat"],
    "Address": {
      "Permanent address": "USA",
     "current Address": "AU"
    }
  }
*/  
function logObj(sample) {
    console.log("name " +sample.Name)
    console.log("pets array " + sample.Pets)
}