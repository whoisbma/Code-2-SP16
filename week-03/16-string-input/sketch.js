var area;
var button;
var canvas;

function setup() {
  noCanvas();
  area = createElement('textarea', 'Starting text');
  area.size(150,50);
  
  var p = createP('this text is editable');
  p.attribute('contenteditable', 'true');
  
  var htmlarea = select('#htmlarea');
  var htmlp = select('#htmlp');
  
  area.input(updateText);
  area.changed(updateTextEnter);
  
  htmlarea.input(updateText);
  htmlarea.changed(updateTextEnter);
  
  p.input(updateText);
  p.changed(updateTextEnter);
  
  htmlp.input(updateText);
  htmlp.changed(updateTextEnter);
  
  button = select('#submit');
  button.mousePressed(buttonPressed);
}

function updateText() {
  if (this.value() != undefined) {
    println(this.value());  //for the text area
  } else {
    println(this.html());   //for the editable text 
  }
}

function updateTextEnter() {
  var textToPrint;
  if (this.value() != undefined) {
    println(this.value());  //for the text area
    textToPrint = this.value();
  } else {
    println(this.html());   //for the editable text
    textToPrint = this.html();
  }
  var h = select('#thetext');
  h.html(textToPrint);
}

function buttonPressed() {
  // println(input.value());
}