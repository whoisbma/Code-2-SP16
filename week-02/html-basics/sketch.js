var m = 0;

var canvas;  //for affecting position of canvas or other things
var h2;

function setup() {
  h2 = createElement('h2', "This is a dynamic header!");

  canvas = createCanvas(300,300);
  canvas.position(0,0); //absolute positioning relative to the page, not the canvas coordinate system!
  createP("My favorite color is purple!!!!");
  
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      createButton('button!');
    }
    createElement('br');
  }
  
}

function draw() {
  clear(); //set background to transparent over the DOM
//  background(150,20,200);
  ellipse(100,100,100,100);  
  h2.position(m*10,m*10);
  
}

function mousePressed() {
  m++;
  createP("I've clicked the mouse " + m + " times!");
  h2.html("Hey I clicked the page, wOW");
}

//THE DOM: "document-object-model"
//basically the rendering of your HTML file and its structure,
//but unlike your HTML, it can change as you interact with the rendered page.


//creating html elements with javascript
//createCanvas() --> makes a canvas appear on the page
//createP()
//createDiv()
//createButton()
//createImg()

//and...
//createElement('tag', content);

//.html()
//.position()
//.style()