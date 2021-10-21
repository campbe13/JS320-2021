# read a json file from disk using fetch & promises
## First 
Try running this code,  it will work and read a json file, have a look in DevTools

This is using Promises & .then() .catch()
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

## Second
Try the below changes  ( syntax .then(resolvecallback, rejectcallback) )
1.  sample.json  file exists, http gives a response so the result is resolve,  
    meaning the server actually responded so it's not an error,
    we check the response code 200 ok is good,  we use the data
    This is what is running on [korra read json](https://korra.dawsoncollege.qc.ca/~tricia/js/09-promises/read-json/)
2.  use http://blah.com/sample.json   host does not exist so this is an http error, 
    meaning no server responded so it IS an error, 
    result reject, no reject defined so jump to catch
3.  use filedoesntexist.json  file does not exist, but http gives a respone so the result is resolve, 
    meaning the server actually responded so it's not an error,
    so we check the response code, the result is not what we want so we throw an error & it jumps to the catch
    
###JavaScript
```JavaScript
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
```
### JSON
```JavaScro[t
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
```
