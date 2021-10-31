# Object Oriented JavaScript

## Part 1 fix code
Given the following code 
```JavaScript
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}
```
Modify it such that the bio method uses an appropriate pronoun based on the gender (e.g., he, she, or they), and allows 0 to many interests.

## Part 2 MDN Test your skills
Try the MDN Test Your Skills exercise at:
* [MDN OOJS Test your skills](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript)
