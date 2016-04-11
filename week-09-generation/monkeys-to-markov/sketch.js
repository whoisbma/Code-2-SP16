function setup() {
  noCanvas();
  // console.log(nGrams("to_be_or_not_to_be", 1));

  //From the above we can calculate that in this (very small) piece of text, 
  //an ‘o’ follows a ‘t’ 67% of the time and a space 33%. 
  //Now let's look at ‘o’, where we next see a space 50% of the time, ‘r’ 25%, and ‘t’ 25%.

  //We could express this result as a JavaScript object:
  // All ngrams and next characters 
  var ngrams = {
    't': ['o', '', 'o'],
    'o': ['', 'r', 't', '_']
  };
  //Now, imagine we next decided to generate new text based on these probabilities. 
  //We might start with ‘t’:
  var txt = 't';
  // And then pick a new character based on the array associated in the ngrams object.
  var txt = 't';
  var newTxt = ngrams['t'];
  var r = floor(random(newTxt.length));
  var next = newTxt[r];
  txt = txt + next;
  // console.log(txt);
  // Now repeat for the next N-gram. And so and and so forth. 

  //Here are some sample outcomes (and the full code for producing these):

  // Starting text 
  /*
  var txt = 't'; 
  // Let's do the following ten times 
  for (var i = 0; i < 10; i++) { 
    var possible = ngrams[txt.charAt(i)]; 
    // If there is nothing in the ngrams object for this character 
    // it's a "terminal" character and we stop 
    if (!possible) { 
      break; 
    } 
    // Otherwise pick a random number 
    var r = floor(random(possible.length)); 
    // And we've got the next chararacter 
    var next = possible[r]; 
  }
  */

  //full ngrams object for "to be or not to be"

  var ngrams2 = {
    "to": [" ", " "],
    "o ": ["b", "b"],
    " b": ["e", "e"],
    "be": [" ", ","],
    "e ": ["o", "q"],
    " o": ["r"],
    "or": [" "],
    "r ": ["n"],
    " n": ["o"],
    "no": ["t"],
    "ot": [" "],
    "t ": ["t", "i"],
    " t": ["o", "h", "h"],
    "e,": [" "],
    ", ": ["t"],
    "th": ["a", "e"],
    "ha": ["t"],
    "at": [" "],
    " i": ["s"],
    "is": [" "],
    "s ": ["t"],
    "he": [" "],
    " q": ["u"],
    "qu": ["e"],
    "ue": ["s"],
    "es": ["t"],
    "st": ["i"],
    "ti": ["o"],
    "io": ["n"],
    "on": ["."]
  };

  //how to build the above n-gram object:
  var ngrams3 = {};
  var t = 'Hi this is Evander I like to talk about unicorns and gems and tubes and weasels';
  var n = 2;
  // Look at all characters of the String 
  for (var i = 0; i < t.length - n; i++) {
    // Look at an ngram 
    var gram = t.substring(i, i + n);
    // Look at the next charaacter 
    var nextChar = t.charAt(i + n);
    // Is this a new>_console one, make an empty array 
    if (!ngrams3.hasOwnProperty(gram)) {
      ngrams3[gram] = [];

    }
    // Add the next character as a possible outcome 
    ngrams3[gram].push(nextChar);
  }

  console.log(ngrams3);


  //A small difference from the concordance you might notice above 
  //is the use of hasOwnProperty() which is a universal object method in JavaScript 
  //that allows you to test if a variable is a property of the object or not. 
  //Last week, we said if (ngrams[gram] === undefined). Both are valid strategies.

  //Once we've got the ngrams object with all possibities mapped out we can start to generate text.
  // Start with an arbitrary ngram 
  var current = 'to';
  // The final text 
  var output = current;

  // Generate a new character some number of times 
  for (var i = 0; i < 20; i++) {
    // If this is a valid ngram 
    if (ngrams3.hasOwnProperty(current)) {
      // What are all the possible next tokens 
      var possible = ngrams3[current];
      // Pick one randomly 
      var next = choice(possible);
      // Add to the output 
      output += next;
      // Get the last N entries of the output; we'll use this to look up 
      // an ngram in the next iteration of the loop 
      current = output.substring(output.length - n, output.length);
    } else {
      break;
    }
  }
  console.log(output);
}

function draw() {

}

function choice(somelist) { 
  var i = floor(random(somelist.length)); 
  return somelist[i]; 
}


//An n-gram is a contiguous sequence of N elements. 
//In the case of text, this might be N letters or N words or N phonemes or N syllables. 
//For an example, here's a function that returns all word N-grams for a given String 
//(using a regex to split the text up into tokens):

function nGrams(sentence, n) {
  // Split sentence up into words 
  var words = sentence.split(/\W+/);
  // Total number of n-grams we will have 
  var total = words.length - n;
  var grams = [];
  // Loop through and create all sequences 
  for (var i = 0; i <= total; i++) {
    var seq = '';
    for (var j = i; j < i + n; j++) {
      seq += words[j] + ' ';

    } // Add to array 
    grams.push(seq);

  }
  return grams;
}