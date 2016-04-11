var json;
var pa1;
var pa2;

function preload() {
  json = loadJSON("https://gist.githubusercontent.com/evilpacket/5973230/raw/045e0ecc34c6362728a9bce62d5cd2e41d29ad9a/letter_freq.json");
}

function setup() {
  noCanvas();
  createElement('h2', "Total randomness: ");
  pa1 = createP("");
  createElement('h2', "Using letter freq: ");
  pa2 = createP("");
  setInterval(getLetters, 1000);

  
}

function draw() {

}

function getLetters() {

  //MONKEYS AT A KEYBOARD!
  // All of our possible characters 
  var possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP .';
  // The random String 
  var tobe = '';
  // Pick 18 random characters 
  for (var i = 0; i < 18; i++) {
    var r = possible.charAt(floor(random(0, possible.length)));
    tobe += r;

  }
  pa1.html(tobe);

  //ARRAY USING FREQUENCY!
  // An array of two choices 
  var possibilities = ['a', 'a', 'd'];
  // A random integer from 0 to the end of the array 
  var index = floor(random(possibilities.length));
  // Get the element in that index 
  var pick = possibilities[index];

  //letter frequencies: https://gist.githubusercontent.com/evilpacket/5973230/raw/045e0ecc34c6362728a9bce62d5cd2e41d29ad9a/letter_freq.json
  // All the possible letters 
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < letters.length; i++) {
    var prob = json[letters[i]];
    // Arbitrarily multiplying the probability by 1,000 
    // If the probability is 1.067% then it would be 
    // placed in the array 1,067 times. 
    var n = floor(prob * 1000);
    for (var j = 0; j < n; j++) {
      possibilities.push(letters[i]);
    }
  }

  // The random String 
  var tobe2 = '';
  // Pick 18 random characters 
  for (var i = 0; i < 18; i++) {
    var rd = possibilities[floor(random(0, possibilities.length))];
    tobe2 += rd;

  }
  pa2.html(tobe2);

}

