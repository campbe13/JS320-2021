# Using JSON  & Map

Given the following array of JSON objects, and this [skeletal code](skel) use it to add the content to the DOM as a list or divs & paras or... your choice 
add an header element "Software Engineers" 
```JavaScript
let data =   [
  {"firstName":"Maria" , "lastName":"Klawe"}, 
  {"firstName":"Grace","lastName":"Hopper"}, 
  {"firstName":"Esther" ,"lastName":"Conwell"}, 
  {"firstName":"Katherine" , "lastName" :"Johnson"},
  {"firstName":"Dorothy" , "lastName":"Vaughn"}, 
  {"firstName":"Jean" , "lastName":"Jennings"}, 
  {"firstName":"Frances" , "lastName":"Bilas"} 
  ]
```

# Part 2
You completed this [lab in week 5](https://github.com/campbe13/JS320-2021/blob/master/05-forms-validation)
## Snip from the lab instructions: 
This exercise is a simplified version of the one in the [MDN documentation – Test your Skills – Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Test_your_skills:_Form_validation)

Part 1 - Edit the simple HTML that you have been provided in the [starter code](https://github.com/campbe13/JS320-2021/tree/master/05-forms-validation) such that:
* the user name, email, phone number and comment fields are mandatory
* change the input type when needed to the appropriate HTML5 type
* add pattern validation for the telephone to match a pattern of 10 digits
* give the "User name" field a required length of between 5 and 20 characters, and the "Comment" field a maximum length of 200 characters
* Try submitting your form — it should refuse to submit until the above constraints are followed.  

## for this lab
Add a function that will add the input information into a new Map object, every time  :
* key: name
* value: JSON object containing email and phone number, ex ` { email: fozzie@muppets.com, phone: 999-514-5145 }
Log the Map each time you add to it, to see what it looks like.
