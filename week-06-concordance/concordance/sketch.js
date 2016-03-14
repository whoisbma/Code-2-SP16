function setup() {
  var concordance = {};

  data = "A large program is a costly program, and not just because of the time it takes to build. ";
  data += "Size almost always involves complexity, and complexity confuses programmers. ";
  data += "Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. ";
  data += "A large program also provides a lot of space for these bugs to hide, making them hard to find. ";
  data += "Let’s briefly go back to the final two example programs in the introduction. The first is self-contained and six lines long.";

  var tokens = data.split(/\W+/);

  // for (var i = 0; i < tokens.length; i++) {
  //   var word = tokens[i];
  //   //if its a new word:
  //   if (concordance[word] === undefined) {
  //     concordance[word] = 1;
  //   } else { // if we've seen this word before:
  //     concordance[word]++;
  //   }
  // }

  // console.log(concordance);

  var keys = [];
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i];
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word); //if we have a new word, add it to the array.
    } else {
      concordance[word]++;
    }
  }

  // keys.sort(function(a, b) {
  //   if (concordance[b] > concordance[a]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  //or

  // console.log(keys);
  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });

  //or,
  // var concordanceSort = function(a, b) {
  //   return (concordance[b] - concordance[a]);
  // }

  // keys.sort(concordanceSort);



  //next, now that we have sorted keys, we can iterate over the concordance.
  
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);
  }
}

function draw() {

}