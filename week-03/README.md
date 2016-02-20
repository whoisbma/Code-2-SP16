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

### P5.js and the Document-Object-Model (DOM)

*Mostly taken from [https://github.com/processing/p5.js/wiki/Beyond-the-canvas]()https://github.com/processing/p5.js/wiki/Beyond-the-canvas) - to adapt*

CreateCanvas creates an HTML5 Canvas. The Canvas is an **HTML element**, one component that makes up an HTML document. Just like other HTML elements you've seen before, like <body>, <head>, <p>, and <html>, the Canvas is a component that makes up an HTML document or web page - just one specific to HTML5.  

The Canvas is a special element that lets us draw realtime graphics, and is a fairly new feature to HTML. It is analogous to the graphics context (window) that runs when we press play in our traditional Processing sketch, but we aren't limited only to the canvas in p5.js. In fact, we can turn off the canvas entirely with ```noCanvas();``` in setup.

Most importantly though, by using the p5.dom add-on library, p5.js can be used to **create and interact with HTML elements outside of the graphics canvas.**

You will need to include the p5.dom.js file in your HTML. If you are using the example project it should already be there, you just need to uncomment the line in index.html that links to it. 

##### Creating HTML elements

We can create HTML elements basically the same way we create the canvas, with a method call:

```
createElement('p', 'Some new paragraph element!');
createElement('h1', 'Some new header element! Very exciting.');
createP('Creating a paragraph element directly');
createDiv('Creating a div directly!');
createImg('http://www.bryan-ma.com/content/404.gif');
```

##### Storing pointers and calling methods

When you call createCanvas(w, h) you create a graphics canvas to draw into with the specified width and height. However, you can also store the canvas you create in a variable, this is called a pointer or reference. With this pointer we can call methods of the element itself, to set the position, id or class, for instance. 

```
canvas = createCanvas(600, 600);
canvas.position(10, 100);
canvas.class("myclass");
```

There is one important distinction between working with elements on an element level, vs calling methods like rect() or fill() to draw directly into the canvas. When drawing in canvas while the loop is running, you typically need to redraw everything in the scene every frame. For example, if you want a rectangle to continue to appear on the screen, you include the command rect() in draw, which redraws this rectangle many times per second.

However, when you are working with elements, they hold a static state that you can change at any time by calling one of their methods. In the example above, the canvas is positioned at (10, 100) relative to the upper left corner. This method is called only once in setup, after that it stays in position and does not need to be reset every frame.

##### Using Parent vs. using Position

When a new element is added using one of the create methods (either a canvas, div, img, etc), you may notice that it doesn't show up in the upper left corner (0,0), but instead appends to the end of the page. The elements are also affected by any existing CSS styling you may have set for the page. The guiding idea here is that p5 does as little as possible to mess with your page, so elements follow the flow of the page rather than disrupting anything. Then, if you'd like to arrange things differently, you can use p5 methods or CSS styling.

If you would like to specify a location for the element, rather than appending directly to the end, you can use the .parent() method. In the <body> of your HTML file, create a container where you would like your canvas to get inserted, with ID of your choice:

```
<div id='myContainer'></div>
```

Then use a variable to store a pointer to the element you created, and call .parent() on this variable:

```
function setup() {
  var myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
}
```

Maybe you don't care which div container your elements end up in, but just want to set their position on the page. In this case you could use .position(x, y).

##### Creating other HTML elements

In addition to createCanvas(w, h), there are a number of other methods like createDiv(), createP(), createA(), etc (see the reference for full listing). In the example below, a div with text is created, in addition to the graphics canvas, and the position is set for each.

var text = createDiv("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!");

##### Creating HTML images

If want to create an image specifically you can use createImg(src). An HTML image differs from one drawn in the canvas using image(). You don't need to use loadImage(), and you don't need to draw it every frame; once you create it, the image exists on the page until you remove it.

```
img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");
img.position(190, 50);
img.size(200, 200);
```

Also video or other media depending on browser support.

##### Element specific listeners

Every elements has it's own mouseOver(), mouseOut() methods that get called when you move the mouse over or off of the individual element. To program a specific action to happen when one of these events occurs, you pass in either a function or the name of a function as the argument to these methods.

In the example below, we are attaching a behavior that hides the uniforn image when you mouse over the canvas, and shows it again when you mouse out (off of) the canvas.

```
var img;
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

  img.position(190, 50);
  img.size(200, 200);

  canvas.position(300, 50);
  // Attach listeners for mouse events related to canvas
  canvas.mouseOver(uniHide);
  canvas.mouseOut(uniShow);
}

function draw() {
  // All drawing happens in the canvas.
  noStroke();
  background(220, 180, 200);
  fill(180, 200, 40);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (var i = 0; i < width; i += 15) {
    line(i, 0, i, height);
  }
}

// Create functions for hiding and showing uni image. These will be hooked into mouse events related to canvas above.
function uniHide() {
  img.hide();
}

function uniShow() {
  img.show();
}
```

In the example above, we pass in the function names uniHide and uniShow. You could achieve the same result by passing in a whole function without a name, this nameless function is known as an "anonymous function".

```
canvas.mouseOver(function() {
    img.hide();
})
```

##### Element vs global listeners

Elements also have mousePressed() methods that let you connect functions to the mousePressed event on a per element level. Important: this is different than using the global mousePressed() method, which gets triggered anytime the mouse is clicked anywhere. With these element specific handlers, the function is only called when you click directly on the element.

In this example, every click on the page anywhere makes the background lighter. However, only clicks directly on the canvas change the size of the ellipse.

```
var gray = 0;
var diameter = 5;

function setup(){
  var canvas =  createCanvas(200, 200);
  canvas.mousePressed(incDiameter);
}

function draw() {
  background(gray);
  ellipse(width/2, height/2, diameter, diameter);
}

function mousePressed() {
  gray = gray + 10;
}

function incDiameter() {
    diameter = diameter + 5;
}
```

##### Setting style

Unlike a canvas, which you draw into to affect the way it looks, other HTML elements can be styled using what is called CSS (Cascading Style Sheets). CSS is a language used to describe the presentation of HTML elements rendered on screen, allowing you to set things like background color, font size, font color, padding, etc.

In p5.js, you can use a style() method on any element to set CSS properties. See the MDN CSS reference for a full listing of properties you can set.

```
var text;
var canvas;

function setup() {
  text = createP("This is an HTML string with style!");
  canvas = createCanvas(600, 400);

  text.position(50, 50);
  text.style("font-family", "monospace");
  text.style("background-color", "#FF0000");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
  canvas.position(150, 150);
}
```

##### Using a CSS stylesheet

Another way to incorporate this into your sketch is by creating your own stylesheet. To do this, create a file called something like style.css. Add a link to this file in the head of your HTML file.

<link rel="stylesheet" type="text/css" href="style.css">
In the CSS file, you add what are called "rules", or lines that determine how various elements are presented. You can define these rules based on the HTML tag (p, div, span, etc), an element class (prefaced with "."), or an element id (prefaced with "#"). The below example renders the same as the previous example, but uses a CSS stylesheet instead of the .style() method. Note that in this case, no quotes are placed around either the property names or the values.

```
var text;
var canvas;

function setup() {
  text = createP("This is an HTML string with style!");
  canvas = createCanvas(600, 400);
  text.position(50, 50);
  text.class("lemon"); // assign a class to be used by the CSS sheet
  canvas.position(150, 150);
}

function draw() {
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}
```

In style.css:

```
.lemon {
    font-family: monospace;
    background-color: #FF0000;
    color: #FFFFFF;
    font-size: 18pt;
    padding: 10px;
}
```

### Partner Workshopping

Partner up with someone new. Get each other's source code from their github.io, and translate their code into their homework code into using the DOM to display instead of the canvas. Deactivate the canvas altogether.

### RiTaJS

*BM - Maybe leave this for later.*

https://github.com/dhowe/RiTaJS

---
---
---

### Datavis

*BM - show some fun stuff*



https://medium.com/@neuroecology/punctuation-in-novels-8f316d542ec4#.cksr5jsgi






## Homework 03

---- *Due midnight Sunday, 2/28/16* ----

1. Use Javascript-style object oriented programming to illustrate the results of an analysis of strings. Establish yourself what the reasoning for analysis is.

*BM- mix of object-oriented programming and DOM interaction.*