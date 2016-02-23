var listThings = ['unicorn', 'norcuni', 'probiotics', 'bacteria', 'ear', 'book']
var images = [];

function setup() {
  var canvas = createCanvas(200,200);
  canvas.parent('canvasp'); //the hash is assumed for an ID, since there's only one.
  
  var somep = createElement('p', 'I am a dynamically created paragraph element, and I am the child of canvasp');
  somep.child('canvasp');
  
  var button = select('#listbutton');
  button.mousePressed(addItem);

  //now parenting a link 
  var p = createP('This is a link: ');
  p.style('background-color', '#CCC');
  p.style('padding', '24px');
  var a = createA('#', 'apples');
  a.mousePressed(addPhoto);
  a.parent(p);
  
  //clear all images
  var buttonClear = select('#clearbutton');
  buttonClear.mousePressed(clearImages);
  
}

function draw() {
  background(0);
  ellipse(100,100,random(100),random(100));
}

function addItem() {
  var r = floor(random(0,listThings.length));
  // createElement('li',listThings[r]);
  var li = createElement('li', listThings[r]);
  li.parent('thelist');
}

function addPhoto() {
  var img = createImg('http://artforum.com/uploads/upload.001/id25455/picksimg_splash.jpg');
  images.push(img); //add images to a global array, so i can reference them below
  // img.parent(this); //parent img to a
  img.parent(this.parent()); //parent img to p
  
  
}

function clearImages() {
  for (var i = 0; i < images.length; i++) {
    images[i].remove()  //dom element method- remove it from the page
  }
  images = [];
}