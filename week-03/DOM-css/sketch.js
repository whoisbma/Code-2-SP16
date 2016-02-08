var txt;

var button;

function setup() {
  createCanvas(300,300);
  txt = createP('some text');
  txt.style("background-color", "green");
  txt.style("font-family", "sans-serif");
  txt.style("font-size", "18px");
  txt.style("color", "black");

  button = createButton("change style");
  button.mousePressed(changeStyle);
  
  txt.mouseOver(revertStyle);
}

function draw() {
  background(100);
  fill(150,0,200);
  ellipse(width/2,height/2,100,100);
}

function changeStyle() {
  txt.style("background-color", "white");
  txt.style("padding", "24px");
}

function revertStyle() {
  txt.style("background-color", "green");
  txt.style("font-family", "sans-serif");
  txt.style("font-size", "18px");
  txt.style("color", "black");
  txt.style("padding", "14px");
}