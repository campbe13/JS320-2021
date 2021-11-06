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
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + 
    	' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}
```
Modify it such that the bio method uses an appropriate pronoun based on the gender (e.g., he, she, or they), and allows 0 to many interests.
## Part 2 Bicycle class inherits from Vehicle

Create a `Bicycle` subclass that extends the `Vehicle` class. The `Bicycle` subclass should override Vehicle's constructor function by changing the default values for `wheels` from `4` to `2` and `horn` from `'beep beep'` to `'honk honk'`.

**starter code**
```javascript
class Vehicle {
constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
	this.color = color;
	this.wheels = wheels;
	this.horn = horn;
}

honkHorn() { console.log(this.horn); }
}
```
**tests**
```javascript
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
```
## Part 4 MDN Test your skills
Try the MDN Test Your Skills exercise at:
* [MDN OOJS Test your skills](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript)
## Part 3 Convert a constructor function to use the `class` keyword
**starter code**
```JavaScript
"use strict";
/**
 * constructor function for Tree object 
 * name: tree name
 * tallest:  tallest the tree can become
 * lifespan:  average lifespan for the tree
 * deciduous or coniferous
 * 
 * @param {string} name 
 * @param {number} tallest 
 * @param {number} lifespan 
 * @param {string} decidconif 
 */
function Tree(name, tallest, lifespan, decidconif, metric){

    this.name = name 
    this.tallest = tallest;
    this.lifespan = lifespan;
    this.decidconif = decidconif;
    this.metric = metric
 
    this.logTree =  function() {
        console.log(this.name + ` tallest ${this.tallest}`
         + " lifespan "+ this.lifespan +
         " type " + this.decidconif)    
    } 
}
// testing
let oak = new Tree('oak', 30, 150, 'deciduous')
let spruce = new Tree('spruce', 30, 60, 'coniferous')
let maple = new Tree("maple", 15,120, "deciduous")

oak.logTree()
spruce.logTree()
maple.logTree()
```
**first convert the constructor function to use `class` keyword**
* Given the sample code above convert it to use the `class` keyword, use the same instantiation and testing functions to make sure it works.
* Use a default parameter of metric = true in the constructor
* Modify the logTree method to put meters or feet  after the tallest, depending on the value of metric
**second use form input to create objects**
* create a simple form that takes as input all fields for your tree object, use HTML5 as needed for validation.
* You will have a submit on the form. When it is clicked create an object using the data, `logTree()` function create `treeToDOM()` modify the code to add it to the DOM.
* Choose whatever element you prefer to add it to the form, an UL + LI or a section + paras etc
