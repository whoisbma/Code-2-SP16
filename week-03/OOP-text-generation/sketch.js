var bubbles = [];
var p;
var theText;

function setup() {
  createCanvas(500,500);
  for (var i = 0; i < 10; i++) {
    bubbles[i] = new Bubble();
  }
  p = createP('hey');
}

function draw() {
  clear();
  theText = "";
  for (var i = 0; i < 10; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = i+1; j < 10; j++) {
      if (bubbles[i].intersects(bubbles[j])) {
        theText += bubbles[i].text;
        theText += bubbles[j].text;
      }
    }
  }
  p.html(theText);
}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.vx = random(-5,5);
  this.vy = random(-5,5);
  this.text = 'i have text!';
  
  this.display = function() {
    ellipse(this.x, this.y, 50, 50);
  };
  
  this.update = function() {
    if (this.x >= width || this.x <= 0) {
      this.vx = -this.vx;
    }
    if (this.y >= width || this.y <= 0) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  };
  
  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < 50) {
      return true;
    } else {
      return false;
    }
  }
  
}