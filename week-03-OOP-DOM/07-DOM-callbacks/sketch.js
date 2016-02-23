var bgcolor;
var button;

var nameP;
var nameInput;

function setup() {
  button = createButton("push this thing");
  button.mousePressed(changeColor); //createColor now attached!  
  createElement('br');
  nameInput = createInput("Type your name: ");
  nameInput.changed(updateText);
  createElement('br');

  canvas = createCanvas(500, 500);
  bgcolor = color(200);

  //mouseOver()
  //mouseOut()
  //changed()

  canvas.mouseOver(changeColor);
  // canvas.mouseOver(overpara);
  // canvas.mouseOut(outpara); 


  nameP = createP("Enter your name:");
  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);
}

function draw() {
  background(bgcolor);
  rect(100, 100, 50, 50);
}

function updateText() {
  nameP.html(nameInput.value());
}

function overpara() {
  nameP.html('your mouse is over me!');
}

function outpara() {
  nameP.html('your mouse is out');
}

//how to make global function attached to the button's callback?
// function mousePressed() {
//   changeColor();
// }

function changeColor() {
  bgcolor = color(random(255));
}