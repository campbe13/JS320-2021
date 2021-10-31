# XHR XmlHTTPResponse (the old way, replaced by Fetch API)

## Problem CORS error on load 2021

Probaby due to `n 06/11/2021, we decided to shut down the website` 

```
Access to XMLHttpRequest at 'https://www.trackcorona.live/api/countries/ca' from origin 'https://korra.dawsoncollege.qc.ca' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
site.js:30 There was a problem, status code:0
xhr.onreadystatechange @ site.js:30
www.trackcorona.live/api/countries/ca:1 Failed to load resource: net::ERR_FAILED
```

You have been given a working application at [korra]https://korra.dawsoncollege.qc.ca/~jaya/src/Exercise17-Starter/) that uses XMLHttpRequests to make a GET request to a COVID tracking API, and displays the search results. 
The API used is a https://www.trackcorona.live/api. You can see the result of the GET request here (if the form said ca) at https://www.trackcorona.live/api/countries/ca 
Download this application from [starter](starter/) and make the necessary changes to use the Fetch API instead of XHR to make the request. Note that you don’t have to restart from scratch! 

You may notice that I built the URL using a encodeURI instead of the URLSearchParams, this is because the country code is not passed as a querystring but directly in the URL.
