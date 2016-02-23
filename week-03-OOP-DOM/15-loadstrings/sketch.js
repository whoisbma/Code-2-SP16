var thetext1;

function preload() {
  thetext1 = loadStrings('strings.txt');
  //loads array line by line
}

function setup() {
  println(thetext1);
  createCanvas(400,300);
  createP(thetext1);
  
  thetext1 = join(thetext1, '\n');
  //combines array into single string separated by \n
  text(thetext1,10,10);
  
}