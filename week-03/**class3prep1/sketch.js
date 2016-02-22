var bubbles = [];

function setup() {
  createElement('h1', 'WELCOME TO PAGEDEHHGHEGH');
  var canvas = createCanvas(600, 400);
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
  
  createElement('p', 'This is a new paragraph element and this is my paragraph and it is made from a long string and a createElement() function along with the name of the element as a string.');
  createP("another paragraph though i am not going to write as much this time!!!!!!!!!!!");
  createImg('http://www.bryan-ma.com/content/404.gif');
  createDiv('this is my div with which i am well pleased.');
  
  var myP = createP("THIS IS MY! P!");
  var anotherP = createP("this p is going to belong to another class.");
  anotherP.class('someClass');
  createA('http://www.p5js.org', 'this is a link');
  img = createImg("http://www.bryan-ma.com/content/404.gif");
  img.position(190, 50);
  img.size(200, 200);
}

function draw() {
  // background(255);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.col = color(random(255));
  
  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
  
  this.update = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  };
}