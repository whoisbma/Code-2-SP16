function setup() {
  noCanvas();

  //TOKENIZATION:
  var words = RiTa.tokenize("The elephant took a bite!");
  for (var i = 0; i < words.length; i++) {
    console.log(words[i]);
  }
  
  //can also use a regex tokenizer
  //RiTa.tokenize(words, regex);
  
  //UNTOKENIZING
  var reset = RiTa.untokenize(words);
  console.log(reset);

  //PHONEMES
  var p = RiTa.getPhonemes("An elephant is a mammal");
  console.log("phonemes: " + p);
  //http://www.rednoise.org/rita/reference/PhonemeTags.html

  //STRESSES
  var s = RiTa.getStresses("computer");
  console.log(s);
  //In this case, it returns 0/1/0, with a 1 meaning 'stressed', and 0 means ‘unstressed’: e.g., com-PUTE-er

  //PART OF SPEECH
  var pos = RiTa.getPosTags("I am hungry");
  console.log(pos);
  //http://rednoise.org/rita/reference/PennTags.html
  //or
  pos = RiTa.getPosTags("I am hungry", true);
  console.log(pos);
  //n -> NOUN 
  //v -> VERB 
  //a -> ADJECTIVE 
  //s -> ADJECTIVE SATELLITE 
  //r -> ADVERB 


}

function draw() {

}