var dropzone;
var canvas;
var img;
var theText;

function setup() {
  canvas = createCanvas(400,400);
  background(255);
  
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight); //first arg:  process/override default browser behavior, second arg: drop moment
}

function highlight() {
  this.style('background-color', '#ccc');
}

function unhighlight() {
  this.style('background-color', '#fff');
}

function gotFile(file) {
  createP(file.name + ", " + file.type + ", " + file.size + " bytes");
  if (file.type == 'image') {
    createP(file.data);
    img = createImg(file.data);
    canvas.size(img.width, img.height);
    image(img,0,0,width,height); //draw to canvas also
  }
  if (file.type == 'text') {
    theText = file.data;
    createP(file.data);
    text(theText,10,10);
  }
  
  
  
  
  
}