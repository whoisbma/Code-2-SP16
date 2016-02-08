## Week 03:
---

## object oriented programming in p5.js // p5.js and the DOM

##### February 15, 2016

---


### Object Oriented Programming in p5.js!

Unlike other languages, in Javascript, basically almost everything is (or can be) an **object** - that is, a collection of properties - and remember functions can also be properties in their own way. However, Javascript is not "object-oriented" in the traditional sense!

Since Javascript doesn't handle objects the way we handle them in Java or other OOP-oriented languages, you might expect that we need to program in a different way than we ordinarily would. This is somewhat true. Creating an 'object' isn't like making an instance of a class anymore. However, we can create a version of a constructor for objects in Javascript instead of just creating individual objects. We do this with a function call.

Look at the following code:

```
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(random(255));

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  };
}
```
This function defines our "Bubble" object's properties, which includes 3 numbers, a color variable (also technically a number that p5.js handles for us), a display function, and an update function that moves the object. Notice lots of ```.this``` - this is how we tell the program that the x and y belongs to the object and not some outer scope.

Note also that this is more similar to how we've created classes in Processing than creating an object literal in javascript, which is how we did it last week, like:

```
var someObject = {
	name: "Zarathustra",
	size: 9999999,
	numbersArray: [5, 7, 9, 11, 13]
	}; 
					
```
This way of creating an object totally works - but it won't let us use ```new``` to use this function as a template, like below:

```
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(width),random(height));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}
```

In this code, we create an empty array called ```bubbles```, then in a loop in ```setup``` we set an incrementing position in the array to be equal to ```new Bubble(random(width), random(height));``` This creates a new object following the blueprint of ```Bubble(x,y)```.

For more sophisticated techniques, look up **Javascript prototypes**. [This is a good article](https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword).




### Partner Workshopping



---
---
---

## Homework 03

---- *Due midnight Sunday, 2/21/16* ----

1. 

2. 

3. 