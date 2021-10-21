# Fetch api & Promises

You may want to watch this video first by Jaya Nilakantan [fetch with simple GET](https://web.microsoftstream.com/video/a2313a8c-3583-4c9b-8924-d9448e7381c6)
More detail by Jaya Nilakantan [fetch with data, GET & POST](https://web.microsoftstream.com/video/6aee6781-c030-498e-954e-925922043207)

## Use form input to retrieve from an api

We have seen [reqres.in](https://reqres.in/) this is a very useful site. We can use it to test all of the RESTful communication that we can do
without the need to use our own website + api. it gives real responses with Fake data so we can test live

For this lab you are going to 
1. create an index.html In the fist section put simple form that takes as input a number, use HTML5 to ensure it is a number, range 1-6. In the second section put a <ul> or some other element  for adding data.
2. add a button and attach an event listener on submit (button or form) 
3. use the number will be used to construct a URL, use a fetch then read the data from the from the api. 
4. using the data from the api add it to the 2nd section (your design decision)
### Here are a few hints for you:
* First you must understand the api & the results you get from it Look at the [reqres.in api](https://reqres.in/) scroll down to ![ Give it a try ](https://user-images.githubusercontent.com/1751207/138351098-f92abf75-cd85-4a1d-9af7-0978afb14e4f.png)
  click on  single resource, it shows you the request format string and sample JSON response <br>
  Request ```/api/unknown/2``` <br>
  If it returns 200 ok <br>
  Results in  <br>
  ```JavaScript
  {
      "data": {
          "id": 2,
          "name": "fuchsia rose",
          "year": 2001,
          "color": "#C74375",
          "pantone_value": "17-2031"
      },
      "support": {
          "url": "https://reqres.in/#support-heading",
          "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
      }
  }
  ```
* If you click on the *list resource* you will see that there are only 1-6 ids you can use in your url
* Click on the Request, ![Request](https://user-images.githubusercontent.com/1751207/138353781-310a87c4-87bc-4084-91f2-76bb5c2e57f8.png)  it will make the request to the website in a new tab, [https://reqres.in/api/users?page=2](https://reqres.in/api/users?page=2) you will see the JSON data returned The example shown is for id 2, so you need to construct your URL using the number input from the form.
* Using your URL construct a fetch with the necessary .then() and .catch() blocks
* For the fetch throw an error if the response is not response.ok & log the problem
* If the response is response.ok
     * use the JSON response `name` and `year` to add to the html page (you can create a list or add paragraphs or.. as you wish.)
     * use the JSON response `color` to change the text colour 
     
Refer to my examples on [korra](https://korra.dawsoncollege.qc.ca/~tricia/)  and here on github
