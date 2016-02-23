function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 35, 35);
    fill(255, 100);
    ellipse(this.x - 6, this.y - 7, 7, 7);
  }

  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  this.clicked = function() {
    this.col = color(255, 0, 200);
  }
}

var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
  console.log(bubbles[0]);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
    // if (bubbles[i].x < 0 || bubbles[i].x > width || bubbles[i].y < 0 || bubbles.y > height) {
    //   bubbles[i].remove();
    // }
  }
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}

function mousePressed() {
  // bubbles.push(new Bubble(mouseX, mouseY));
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y) < 18) {
      bubbles[i].clicked();
    }
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}