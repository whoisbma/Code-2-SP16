//step 1 - tokenize
// var words = RiTa.tokenize("The elephant took a bite!");
  // for (var i = 0; i < words.length; i++) {
  //   text(words[i], 50,50+i*20);
  // }
  // console.log(words);


//step 2 - concordance / looking for properties
//takes a big string as as a parameter, and returns a Javascript object 
//that maps each word to the number of times the word occurs in the text.
var lines;
var counts;
var field;
var button;

function preload() {
  lines = loadStrings('genesis.txt');
}

function setup() {
  createCanvas(400,400);
  background(150);
  textSize(20);
  noStroke();
  //join lines so we have a string, not an array of strings.
  
  // console.log(lines);
  lines = lines.join(" ");
  // console.log(lines);
  counts = RiTa.concordance(lines);
  console.log(counts);
  
  //create UI
  field = createInput();
  button = createButton("Get word count");
  button.mousePressed(displayCount);
  
  background(50);
  textAlign(CENTER,CENTER);
}

// The real “meat” of the sketch happens in the displayCount() function, 
//which p5.js calls when the user clicks the button. 
//This function checks to see if the count object contains the given word, and if so, it displays the number of times the word occurs. 
//If not, it displays 0 (which is accurate, because if the word isn’t found in the object, then it occurs zero times in the text.)

// There’s a method here that we haven’t seen before, which is the .hasOwnProperty() method. 
//This method returns true if the given value is present as a key in the object, and false otherwise. 
//In the above code, we use .hasOwnProperty() to check to see if the word the user input is present in the concordance object. 
//If so, we get the value for that word. If not, we fall back to the default value of 0.
function displayCount() {
  background(150);
  var word = field.value();
  var wordCount = 0;
  if (counts.hasOwnProperty(word)) {
    var wordCount = counts[word];
  }
  text(wordCount, width/2, height/2);
}
function draw() {
  
}