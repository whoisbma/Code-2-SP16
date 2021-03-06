## Week 03:
---

## object oriented programming in p5.js // p5.js and the DOM

##### February 22, 2016

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

##### Drawing Images in p5.js

Using the preload() function, not setup!

```
function preload() {
  flowers = [loadImage('images/flower0.jpg'),
          loadImage('images/flower1.jpg'),
          loadImage('images/flower2.jpg')];
```

### P5.js and the Document-Object-Model (DOM)

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
createA('http://www.p5js.org');
```

##### Storing pointers and calling methods

When you call createCanvas(w, h), you create a graphics canvas to draw into with the specified width and height. However, you can also store the canvas you create in a variable, this is called a pointer or reference. With this pointer we can call methods of the element itself, to set the position, id or class, for instance. 

```
canvas = createCanvas(600, 600);
canvas.position(10, 100);
canvas.class("myclass");
```

There is one important distinction between working with elements on an element level, vs calling methods like rect() or fill() to draw directly into the canvas. When drawing in canvas while the loop is running, you typically need to redraw everything in the scene every frame. For example, if you want a rectangle to continue to appear on the screen, you include the command rect() in draw, which redraws this rectangle many times per second.

However, when you are working with elements, they hold a static state that you can change at any time by calling one of their methods. In the example above, the canvas is positioned at (10, 100) relative to the upper left corner (so, an *absolute* position - not always a good idea). This method is called only once in setup, after that it stays in position and does not need to be reset every frame.

This is exactly the same with creating other HTML elements - you can create references to each of them as well. You can also set their css classes this way.

```
var text = createDiv("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!");
img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");
img.position(190, 50);
img.size(200, 200);
var myP = createP("THIS IS MY! P!");
myP.class('someClassIMade');
```

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

You should be familiar with the mousePressed() event from Processing, and p5.js has an analogous listener method. However there is another mousePressed() method that lets you connect functions to specific elements. Unlike the global listener, you must supply as an argument the name of another method you want to call when it is triggered. 

The global mousePressed() method is triggered every time the mouse is clicked anywhere - but the method linked to an element.mousePressed() is only called when the element itself is clicked on.

In this example, every click on the page anywhere makes the background lighter. However, only clicks directly on the canvas change the size of the ellipse.

```
var gray = 0;
var diameter = 5;

var headerText;

function setup(){
  headerText = createElement('h1', 'WOOOOOOOOO');
  headerText.mousePressed(changeText);
  var canvas =  createCanvas(200, 200);
  canvas.mousePressed(incDiameter);
  createP('some pees here!');
  
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

function changeText() {
  // headerText.html('You clicked me!');
	this.html('YOU CLICKED MEEEEE');
}
```

##### Setting style

Unlike a canvas, which you draw into to affect the way it looks, other HTML elements can be styled using what is called CSS (Cascading Style Sheets). CSS is a language used to describe the presentation of HTML elements rendered on screen, allowing you to set things like background color, font size, font color, padding, etc.

In p5.js, you can use a style() method on any element to set CSS properties. See the MDN CSS reference for a full listing of properties you can set.

```
var text;

function setup() {
  noCanvas();
  text = createP("This is an HTML string with style!");
  text.position(50, 50);
  text.style("font-family", "sans-serif");
  text.style("background-color", "#FF0000");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
}
```

```
function setup() {
  noCanvas();
  for (var i = 0; i < 500; i++) {
    var div = createDiv('div!');
    div.style('padding', '12px');
    var r = floor(random(100, 255));
    var b = floor(random(150, 200));
    var g = floor(random(0,255));
    var col = 'rgb(' + r + ',' + g + ',' + b + ')';
    div.style('background-color', col);
    div.style('font-family', 'monospace');
    div.style('color', '#FFF');
    div.style('opacity','0.5');
    div.position(random(windowWidth),random(windowHeight));
  }
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
  text.class("monoClass"); // assign a class to be used by the CSS sheet
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
.monoClass {
    font-family: monospace;
    background-color: #FF0000;
    color: #FFFFFF;
    font-size: 18pt;
    padding: 10px;
}
```

### OTHER STUFF!

##### Dynamic Parenting and Child..ing(?)

See [11-parent-child](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/11-parent-child)

##### Dynamic CSS

See [09-dynamic-CSS](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/09-dynamic-CSS)

##### Dynamic DOM control and OOP integration

See [12-dynamic-DOM-control](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/12-dynamic-DOM-control) and
[13-OOP-plus-DOM](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/13-OOP-plus-DOM)

##### Dragging/Dropping

See [10-drag-drop](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/10-drag-drop)

##### String loading

See [14-load-file-button](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/14-load-file-button) and
[15-loadstrings](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/15-loadstrings) and [16-string-input](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/16-string-input)


---
---
---



## Homework 03

---- *Due midnight Sunday, 2/28/16* ----

1. If you haven't set up your github.io page properly yet, do so.

2. Overhaul your code from last week to only use the DOM with no canvas element.

3. Read [Chapter 4 of Eloquent Javascript](http://eloquentjavascript.net/04_data.html).

3. Create an object-oriented approach to generating text from given strings. Take a look at [17-OOP-text-generation](https://github.com/whoisbma/Code-2-SP16/tree/master/week-03/17-OOP-text-generation) as a VERY rudimentary starting point. Explanation: 

Last week you established an algorithm that mixed up text. This was a process that would systematically take your input and produce some output - everything happened offscreen, in the code, not exposing any of the system. The goal for this week is to have your algorithm produced by the relationship of JS objects in the scene, represented on-canvas!

This might seem complicated, but the example code above is a perfectly acceptable starting point. Each bubble object has a text value that could be set manually or by loading external text, or by user input. On collision, the strings of colliding bubbles get added together to create a string.

If you're not feeling comfortable with the concept yet, use that to start. Add user interaction like clicking on bubbles to add their strings vs. their collisions. Make them disappear afterwards and maintain their string. Think about having a ton of bubbles - small ones with simple words like articles or prepositions or punctuation, and large ones with nouns and verbs or phrases. Or you could turn it into a game - what if you had a blockbreaker game where each block represents a phrase loaded from a file, and missing the ball could add a period and a new line?

Or, create an actual magnetic poetry simulator - and the text produced is produced by objects arranged adjacent to one another. Or, create a loop that iterates through an image, and assigns a word for each recognized color. There are tons of possibilities. The key is to have the algorithm actually visualized on canvas via the functionality of objects in your scene.

Make sure all your code is up and running on your github.io page.