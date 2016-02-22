var buttons = [];

var theText = "";
var backgroundText;
var numPressed = 0;

function setup() {
  noCanvas();
  backgroundText = createP(theText);
  backgroundText.style("font-size", "32pt");
  backgroundText.style("padding", "0pt 20pt");
  for (var i = 0; i < 20; i++) {
    buttons[i] = new ButtonObj();
    
  }
}

function draw() {
  if (buttons[0] != undefined) {
    for (var i = 0; i < 20; i++) {  
      buttons[i].update();
      buttons[i].display();
    }
  }
}

function pressed() {
  // console.log('hey hi ok bye');
  numPressed++;
  
  backgroundText.html("hey you pressed me " + numPressed + " times");
  backgroundText.style("font-size", 32+numPressed+"pt");
  theText += "pressed "
  
  if (numPressed > 10) {
    backgroundText.html("hey STOP you JERK");
    backgroundText.style("background-color", "red");
    backgroundText.style("font-size", "50pt");
    
    for (var i = 0; i < 20; i++) {
      buttons[i].b.remove();
    }
    
    buttons = [];
  }
  
  if (buttons[0] != undefined) {
    for (var i = 0; i < 20; i++) {
      if (buttons[i].b === this) {
        buttons[i].vx = random(-5,5);
        buttons[i].vy = random(-5,5);
      } 
    }
  }
  
  // this.remove();
}

function over() {
  select('body').style('background-color', 'lightgreen');
}

function off() {
  select('body').style('background-color', 'lightblue');
}

function ButtonObj() {
  this.x = random(windowWidth-90);
  this.y = random(windowHeight-30);
  this.b = createButton("PRESS ME");
  this.vx = random(-5,5);
  this.vy = random(-5,5);
  this.b.mousePressed(pressed);
  this.b.mouseOver(over);
  this.b.mouseOut(off);
  
  this.display = function() {
    this.b.position(this.x,this.y);
  };
  
  this.update = function() {
    if (this.x >= windowWidth-90 || this.x <= 0) {
      this.vx = -this.vx;
    }
    if (this.y >= windowHeight-30 || this.y <= 0) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  };
  
  
}