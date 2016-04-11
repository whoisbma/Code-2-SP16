

function setup() {
  
  //CONJUGATION
  var args = {
    tense: RiTa.PAST_TENSE,
    number: RiTa.SINGULAR,
    person: RiTa.THIRD_PERSON
  };
  var result = RiTa.conjugate("swim", args);
  console.log(result);
  
  /*
  TENSE:   PAST_TENSE, PRESENT_TENSE, FUTURE_TENSE 
  NUMBER:   SINGULAR, PLURAL 
  PERSON:   FIRST_PERSON, SECOND_PERSON, THIRD_PERSON
  */
  
  
  //STEMMING
  
  // var stemmed = RiTa.stem("write written writing");
  // console.log(stemmed);
  
  //PLURALIZATION
  var plural = RiTa.pluralize("apple")
  console.log(plural);
  var singular = RiTa.singularize(plural);
  console.log(singular);
  
  
  //SPLITTING SENTENCES
  var s = RiTa.splitSentences("'What's happened to me?' he thought. It wasn't a dream. His room, a proper human room although a little too small,lay peacefully between its four familiar walls.");
  console.log(s);
}

function draw() {

}