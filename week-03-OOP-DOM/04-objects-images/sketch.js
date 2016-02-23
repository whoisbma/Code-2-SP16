var bubbles = [];
var flowers = [];

function preload() {
  // flowers = [loadImage('images/flower0.jpg'),
  //         loadImage('images/flower1.jpg'),
  //         loadImage('images/flower2.jpg')];


  // for (var i = 0; i < 3; i++) {
  //   flowers[i] = loadImage('images/flower' + i + '.jpg');
  // }

}

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1; i++) {
    bubbles[i] = new Bubble(random(width), random(height));//, flowers[floor(random(flowers.length))]);
  }
  console.log(bubbles[0]);
}

function draw() {
  background(0);
  // for (var i = 0; i < bubbles.length; i++) {
  //   bubbles[i].display();
  //   bubbles[i].update();
  //   if (bubbles[i].lifespan < 0) {
  //     bubbles.splice(i,1);
  //   }
  // }
  //have problems when looping through forwards if we're adjusting through the array
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].update();
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }


  if (bubbles.length > 100) {
    // bubbles.splice(0, 1);
    bubbles.splice(floor(random(100)), 1);
  }
}

function mousePressed() {
  // bubbles.push(new Bubble(mouseX, mouseY));
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y) < 18) {
      bubbles[i].clicked();
      bubbles.splice(i, 1);
    }
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
  // bubbles.push(new Bubble(mouseX, mouseY, flowers[floor(random(flowers.length))]));
}

function Bubble(x, y) {//, img) {
  this.x = x;
  this.y = y;
  // this.img = img;
  this.d = random(10,50);

  this.lifespan = 255;
  this.col = color(255,this.lifespan);

  this.display = function() {
    noStroke();
    // stroke(255);
    fill(this.col);
    // tint(255, this.lifespan);
    // imageMode(CENTER);
    // image(this.img, this.x, this.y, 35, 35);
    ellipse(this.x, this.y, this.d, this.d);
  };

  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.lifespan -= random(3);
    this.col = color(255, this.lifespan);
  };

  this.clicked = function() {
    this.col = color(255, 0, 200);
  };

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    }
    return false;
  };


}