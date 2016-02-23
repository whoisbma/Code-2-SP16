//Adapted from Daniel Shiffman's A2Z example
//Code 2 Data Poetics, SP16, Bryan Ma

//read input file into string object
//count words
//count syllables
//count sentences
//apply formula
//write out report file

var dropzone, input, button;
var theText;

function setup() {
  noCanvas();
  
  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(handleInput);
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function highlight() {
  dropzone.style('background', '#AAA');
}

function unhighlight() {
  dropzone.style('background', '');
}

function gotFile(file) {
  if (file.type === 'text') {
    theText = file.data;
    processSMOG(theText);
  } else {
    alert('not a text file');
  }
}

function handleInput() {
  theText = input.value();
  processSMOG(theText);
}


function processSMOG(data) {
  var len = data.length;
  if (data.length === 0) {
    alert("Nothing entered");
  } else {
    var totalPolysyllables = 0;
    var totalSentences = 0;
    
    //look for word delimiters
    var delimiters = '.:;?! !@#$%^&*()+';
    var words = splitTokens(data, delimiters);  //http://p5js.org/reference/#/p5/splitTokens
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      totalPolysyllables += isPolysyllable(word);
    }
    
    //look for sentence delimiters
    var sentenceDelim = '.:;?!';
    var sentences = splitTokens(data, sentenceDelim);
    totalSentences = sentences.length;
    
    //calculate SMOG
    var a = 1.043;
    var b = 3.1291
    var c = 30/totalSentences;
    var smog = a * sqrt(totalPolysyllables * c) + b;

    var report = "";
    
    report += "Total polysyllables: " + totalPolysyllables + "<br>";
    report += "Total Sentences: " + totalSentences + "<br>";
    report += "SMOG grade   : " + smog + "\n";
    
    var smogGrade = createP(report);
  }
}

//count syllables of a word based on number of vowels
function isPolysyllable(word) {
  var syl = 0;
  var vowel = false;
  
  //check each word for vowels (don't count more than one vowel in a row)
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word.charAt(i)) && (vowel == false)) {
      vowel = true;
      syl++;
    } else if (isVowel(word.charAt(i)) && (vowel == true)) {
      vowel = true;
    } else {
      vowel = false;
    }
  }
  
  var tempChar = word.charAt(word.length-1);
  //check for an 'e' at the end, as long as its not a word with one syllable
  //this is something we would need to change if we wanted this to analyze more than one word.
  if ((tempChar == 'e' || tempChar == 'E') && syl != 1) {
    syl--;
  }
  
  if (syl >= 3) {
    return 1;
  } else {
    return 0;
  }
}

function isVowel(c) {
  if      ((c == 'a') || (c == 'A')) { return true; }
  else if ((c == 'e') || (c == 'E')) { return true; }
  else if ((c == 'i') || (c == 'I')) { return true; }
  else if ((c == 'o') || (c == 'O')) { return true; }
  else if ((c == 'u') || (c == 'U')) { return true; }
  else if ((c == 'y') || (c == 'Y')) { return true; }
  else { return false; }
}