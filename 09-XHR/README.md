# XHR XmlHTTPResponse (the old way, replaced by Fetch API)

You have been given a working application at https://korra.dawsoncollege.qc.ca/~jaya/src/Exercise17-Starter/ that uses XMLHttpRequests
to make a GET request to a COVID tracking API, and displays the search results. 
The API used is a https://www.trackcorona.live/api. You can see the result of the GET request here (if the form said ca) at https://www.trackcorona.live/api/countries/ca 
Download this application from https://korra.dawsoncollege.qc.ca/~jaya/src/Exercise17-Starter/ and make the necessary changes to use the Fetch API instead of XHR to make the request. Note that you don’t have to restart from scratch! 
You may notice that I built the URL using a encodeURI instead of the URLSearchParams, this is because the country code is not passed as a querystring but directly in the URL.
