


function setup() {
  //in JS, regular expressions like Strings are objects.
  //you can create a regex object like this:
  var regex = new RegExp('aregex');

  //the above is technically correct and sometimes necessary -
  // but a more common way is to use forward slashes.
  // just like a string is an array of characters between quotes, 
  //a regex is an array of characters between forward slashes.
  var regex = /aregex/;

  //the regexp object has several methods.
  //the first think you might try is the test() function which returns true or false 
  // depending on if the string passed in matches the regex.
  
  //this can be used to validate an email adress for example:
  var email = /\w+@\w+\.(net|com|edu|org)/;
  if (email.test("bma@newschool.edu")) {
    console.log("valid email");
  }
  
  //the javascript string object also has several methods which accept regular expressions as input.
  //for example, search() is a function that works similarly to indexOf().
  //it looks for a regular expression match and returns the index of that match.
  var zipcode = "My zip code is 90210";
  var index = zipcode.search(/\d{5}/);
  console.log("The zip code is at index: " + index);
  
  //probably the most useful regular expression is match().
  //match() is a method of the string object that returns the matches of a regular expression.
  var txt = "this is a test.";
  var testrx = /test/;
  // var results = testrx.test(txt);
  var results = txt.match(testrx);
  //results now contains ["test"]
  
  //if the regular expression includes capturing parentheses, the groups would also appear in the array.
  //for example, lets say you needed a regex to match a phone number in a string
  var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
  var regex = /(\d+)[-.]\d+[-.]\d+/;
  var results = txt.match(regex);
  //the resulting array is not what we want:
  //['212-555-1234', '212'] - the full phone number is index 0 and captured group is index 1
  //in order to capture everything, we'll need to add several steps.
  
  //regular expressions can include flags that modify how the search operates. 
  //for example the flag 'i' is case-insensitivity so that the regular expression 'hello'
  // with the flag 'i' would match 'hello', 'Hello', 'HeLlO', etc.
  
  //a flag is added after the second forward slash: /hello/i
  
  //the global flag g tells the regular expression that we want to search for all the matches and not the first one
  
  var regex = /(\d+)[-.]\d+[-.]\d+/g;
  var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
  var results = txt.match(regex);
  
  //match() now returns all the matches in the original string as elements of the array, 
  //but the captured group for the area codes is now lost.
  
  //if there are multiple matches AND you want to have captured groups, 
  //you have to instead use the exec() method which is part of the RegExp object.
  
  //in the case of a single object, the exec() function is the same as match().
  //the exec() function, even with the global flag, will still return only the first match.
  //however, if you call exec() a second time with the same regex and input string, 
  //it will move on and return the results for the second match (or null if there is no match)
  //you can therefore use a while loop.
  
  var regex = /(\d+)[-.]\d+[-.]\d+/g;
  var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
  var results = regex.exec(txt);
  console.log(results);
  while (results != null) {
    results = regex.exec(txt);
    console.log(results);
  }
  
  //this could also be written with more brevity this way:
  while (results = regex.exec(txt)) {
    console.log(results);
  }
  
  //earlier we used string methods to do things like split strings into an array.
  //now lets do some regex in conjunction with them, using regex objects as delimiters.
  var txt = "This text has characters, spaces, and some punctuation.";
  var regex = /\W+/;
  var words = txt.split(regex);
  console.log('Total words: ' + words.length);
  console.log(words);
  
  //if youy want to capture all the delimiters, you can enclose them in capturing parentheses.
  var regex = /(\W+)/;
  var words = txt.split(regex);
  console.log(words);
  
  //Search and replace
  //Running a search and replace is one of the more powerful things one can do with regular expressions.
  //this can be accomplished with the string's replace() method.
  //the method receives two arguments, a regex and a replacement string.
  //whenever there is a regex match, it is replaced with the string provided.
  
  var txt = "Replace every time the word 'the' appears with the word ze.";
  var regex = /\bthe\b/g;
  var replaced = txt.replace(regex, 'ze');
  console.log(replaced);
  
  //we can also reference the matched text using a backreference to a captured group in the substitution string.
  //a backreference to the first group is indicated as $1, $2 is the second, etc.
  var txt = "Double the vowels.";
  var regex = /([aeiou]+)/g;
  var replaced = txt.replace(regex, '$1$1');
  console.log(replaced);

}


//exercise ideas:
// Write a regular expression that matches any e-mail address.
// Take that regular expression and do a search and replace so that any e-mail address is made into a “mailto:” link.
// Create an example that reads an HTML page and removes any markup and leaves only the raw content.
// Adapt the regex tester to be a search/replace tester.
// Create a regex that matches only code comments in code.

//hw
// Create a simple regular expression exercise for yourself. 

// Add a regular expressions to your previous assignment or something else you've made in JavaScript.
// Experiment with regular expressions in a text editor (like Sublime) and document how it worked for you in a blog post. No programming needed for this one!
// Play the Regex Golf game and document your results in a blog post. No programming needed for this one either!
// Redo the Flesch Index Calculator (or any of the other week 2 examples) with regular expressions.
// Taking inspiration from the Pirate Translator, re-imagine a text using replace().
// Write a regular expression that matches any e-mail address and validate user input. (Tricky step two: take that regular expression and use replace() to turn that e-mail address is made into a mailto: anchor tag.)
// Create an example that reads an HTML page and removes any markup and leaves only the raw content.
// Adapt the regex tester to be a replace() or split() tester.
// Create a regex that matches only code comments in code.
// In preparation for next week, add a link to an API or some data source (even just data that appears in raw form on a web page) that interests you. I'll use this list to prepare examples for next week.