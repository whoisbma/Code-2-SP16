var slider1;
var slider2;

var angleModSlider;

var x = 0;
var n = 0;

var sliders = []; //can also do this all with an array
var angle = 0;

function setup() {
  createCanvas(200,200);
  slider1 = createSlider(0,255,132); //min, max, start
  slider2 = createSlider(0,255,132);
  
  for (var i = 0; i < 50; i++) {
    sliders[i] = createSlider(0,255,132);
  }
  
  angleModSlider = createSlider(0,10,5);
}

function draw() {
  background(slider1.value(), slider2.value(), slider2.value());
  x = (x + 1) % 360;
  n = map(sin(radians(x)), -1, 1, 0, 255);
  slider1.value(x);
  slider2.value(n);
  
  var mod = angleModSlider.value();
  
  for (var i = 0; i < 50; i++) {
    var a = map(sin(angle+i*mod),-1,1,0,255);
    sliders[i].value(a);
  }
  angle+=0.1;
}