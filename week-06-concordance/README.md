## Week 06:
---
## Concordances, TF-IDF

##### March 14, 2016

---


#### Associative Arrays

associative array / map / hash / dictionary: key-value pairs

student name/id , list of prices and product names.

fundamental building block of basically every text analysis application is a concordance - a list of all words in a document along with how many times each word occurred. a dictionary is the perfect data structure to hold this info. each element of the dictionary is a string paired with a number.

most programming languages and environments have specific classes or objects for things like dictionaries. javascript doesn't. but its basically a javascript object.

```
var nameList = ['Jane', 'Sue', 'Bob'];
  var students = {
    N0472918: 'Bryan',
    N0123758: 'Ryan',
    N0012387: 'Brian'
  };
  console.log("is your name " + nameList[1] + '?');
  console.log("is your name " + students[1] + '?');
  console.log("is your name " + students['N0472918'] + '?');
  console.log("is your name " + students.N0012387 + '?');
```

A Javascript object is a collection of name-value pairs.

While it might be more convenient to have a custom-tailored dictionary object, we're going to get everything we need out of this normal js object.

#### Concordances

Lets start a concordance.

```
var concordance = {};
  concordance['the'] = 100;
  concordance['a'] = 10;
  concordance['go'] = 50;
  
  //this is just another way of writing:
  var concordance = {
    the: 100,
    a: 10,
    go: 50
  };
  
  //or
  var concordance = {};
  concordance.the = 100;
  concordance.a = 10;
  concordance.go = 50;
```

We'll plug in some text into a data variable and loop through it, adding to the concordance.

```
var concordance = {};
  
  data = "A large program is a costly program, and not just because of the time it takes to build. "; 
  data += "Size almost always involves complexity, and complexity confuses programmers. ";
  data += "Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. ";
  data += "A large program also provides a lot of space for these bugs to hide, making them hard to find. ";
  data += "Let’s briefly go back to the final two example programs in the introduction. The first is self-contained and six lines long.";

  var tokens = data.split(/\W+/);
  
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i];
    //if its a new word:
    if (concordance[word] === undefined) {
      concordance[word] = 1;
    } else { // if we've seen this word before:
      concordance[word]++;
    }
  }
```

Now what? We can't sort an object's fields, there is no order.  

We could keep a separate array of all the keys. We could sort this array and then iterate over the name/value pairs in the concordance object.

```
var keys = [];
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i];
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word);  //if we have a new word, add it to the array.
    } else {
      concordance[word]++;
    }
  }
```

now how to sort? we can use the javascript sort() function which is part of the array prototype. the sort function expects a function as an argument. the function it wants is something to either return true or false on whether or not to place b before a.

```
keys.sort(function(a, b) {
  // what goes here??
});
```

we can either pass in a function anonymously or explicitly.

```
keys.sort(function(a, b) {
    if (concordance[b] > concordance[a]) {
      return true;
    } else {
      return false;
    }
  });

  //or

  // console.log(keys);
  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });

  //or,
  var concordanceSort = function(a, b) {
    return (concordance[b] - concordance[a]);
  }

  keys.sort(concordanceSort);
```

next, now that we have sorted keys, we can iterate over the concordance.

```  
for (var i = 0; i < keys.length; i++) {
	console.log(keys[i] + ': ' + concordance[keys[i]]);
}
```

Note: we can also loop through the object in an idiomatically proper Javascript approach:

```
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    // code goes here
    console.log(key, obj[key]);
  }
}
```

#### Stuff

http://secretlifeofpronouns.com/

http://www.tfidf.com/

http://www.analyzewords.com/

#### Term Frequency - Inverse Document Frequency

Common application of concordances: TF-IDF

A numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It is often used as a weighting factor in information retrieval and text mining. The tf-idf value increases proportionally to the number of times a word appears in the document, but is offset by the frequency of the word in the corpus, which helps to adjust for the fact that some words appear more frequently in general.

Variations of the tf–idf weighting scheme are often used by search engines as a central tool in scoring and ranking a document's relevance given a user query. tf–idf can be successfully used for stop-words filtering in various subject fields including text summarization and classification.

One of the simplest ranking functions is computed by summing the tf–idf for each query term; many more sophisticated ranking functions are variants of this simple model.

**Term Frequency**

Suppose we have a set of English text documents and wish to determine which document is most relevant to the query "the brown cow". A simple way to start out is by eliminating documents that do not contain all three words "the", "brown", and "cow", but this still leaves many documents. To further distinguish them, we might count the number of times each term occurs in each document and sum them all together; the number of times a term occurs in a document is called its term frequency.

**Inverse Document Frequency**

Because the term "the" is so common, term freqency will tend to incorrectly emphasize documents which happen to use the word "the" more frequently, without giving enough weight to the more meaningful terms "brown" and "cow". The term "the" is not a good keyword to distinguish relevant and non-relevant documents and terms, unlike the less common words "brown" and "cow". Hence an inverse document frequency factor is incorporated which diminishes the weight of terms that occur very frequently in the document set and increases the weight of terms that occur rarely.

tf–idf is the product of these two statistics, term frequency and inverse document frequency. Various ways for determining the exact values of both statistics exist.

#### Bayes' Theorem

In probability theory and statistics, Bayes' theorem (alternatively Bayes' law or Bayes' rule) describes the probability of an event, based on conditions that might be related to the event. For example, suppose one is interested in whether a woman has cancer and knows that she is 65 years old. If cancer is related to age, then, using Bayes' Theorem, information about her age can be used to more accurately assess the probability that she has cancer.

**Bayes' Theorum, mathematically formulated:**

![bayes](https://upload.wikimedia.org/math/d/3/c/d3c7c452b3d01f5415dd9bf15d2ab822.png)

* A and B are events.
* P(A) and P(B) are the probabilities of A and B without regard to each other.
* P(A | B), a conditional probability, is the probability of observing event A given that B is true.
* P(B | A) is the probability of observing event B given that A is true.

Suppose we want to know a person's probability of having cancer, but we know nothing about him or her. Despite not knowing anything about that person, a probability can be assigned based on the general prevalence of cancer. For the sake of this example, suppose it is 1%. This is known as the base rate or prior probability of having cancer. "Prior" refers to the time before being informed about the particular case at hand.

Next, suppose we find out that person is 65 years old. If we assume that cancer and age are related, this new piece of information can be used to better assess that person's risk of having cancer. More precisely, we'd like to know the probability that a person has cancer when it is known that he or she is 65 years old. This quantity is known as the current probability, where "current" refers to the theorised situation upon finding out information about the particular case at hand.

In order to apply knowledge of that person's age in conjunction with Bayes' Theorem, two additional pieces of information are needed. Note, however, that the additional information is not specific to that person. The needed information is as follows:

1. The probability of being 65 years old. Suppose it is 0.2%
2. The probability that a person with cancer is 65 years old. Suppose it is 0.5%. Note that this is greater than the previous value. This reflects that people with cancer are disproportionately 65 years old.
3. Knowing this, along with the base rate, we can calculate that a person who is age 65 has a probability of having cancer equal to

![cancer](https://upload.wikimedia.org/math/3/7/1/3713e7986c85ad15c8d12561196d7c90.png)

**Why do we care?**

This type of reasoning can be applied to text analysis. Common example: spam filtering. If we know the probability that a spam e-mail contains specific words, we can calculate the likelihood that an email is spam based on its concordance.

We'll need to know things like how many times that word appears in spam emails vs. good emails. And then we'll use those values to calculate the probability that each word would appear in a spam or good email.

```
var word = {};
word.countA = 0;	//keep track of category A
word.countB = 0;	//keep track of category B
word.probA = ???;	//probability this word appears in category A document
word.probB = ???;	//probability this word appears in category B document
```

Instead of storing a single number like dictionary['the'] = 16, we now need to associate an object with multiple data points with each key. We would run the filter as follows:

1. Train the filter with known category A (spam) e-mails and known category B (good) emails.
2. For every word, check if it's new. If it is, add it. If not, increase the counter for "A" or "B", depending on which its found in.

```
for (var i = 0; i < tokens.length; i++) {
	var token = tokens[i].toLowerCase();
	if (dictionary[token] === undefined) {
		dictionary[token] = {};
		dictionary[token].countA = 0;
		dictionary[token].countB = 0;
		dictionary[token]word = token;
	} else {
		if (category === 'A') {
			this.dictionary[token].countA++;
			this.tokenCountA++;
		} else if (category === 'B') {
			this.dictionary[token].countB++;
			this.tokenCountB++;
		}
	}
}
```

The above steps are repeated over and over again for all training documents. Once all the "training" files are read, the probabilities can be calculated for every word.

Once we've gone through the process of counting the occurences in each category ('A' or 'B', spam or good email), we can calculate the probabilities according to Bayes rule. Finally, we can then take a new document and compute the total probability for that document.

### Datavis

Hip Hop Word Count - https://vimeo.com/23874762 - http://hiphopwordcount.com/

http://poly-graph.co/vocabulary.html

Rap Research Group at Eyebeam

https://medium.com/@neuroecology/punctuation-in-novels-8f316d542ec4#.cksr5jsgi

http://www.informationisbeautiful.net/visualizations/billion-dollar-o-gram-2013/

SPEECH COMPARISON by Rune Madsen

Book-Book by Sarah Groff-Palermo

Word Tree by Jason Davies

Wordle

OK GO album covers by Stefanie Posavec

Luke Dubois’ Missed Connections

Luke Dubois’ HindSight is always 20/20

Nicholas Felton’s 2013 Annual Report, NY Times Article

Lyrical Indicators and Parsing the State of the Union by Jonathan Corum



## Homework 06

---- *Due midnight Sunday, 2/28/16* ----


http://geon.github.io/programming/2016/03/03/dsxyliea

for much later: 

http://motherboard.vice.com/read/how-to-think-about-bots


https://twitter.com/oliviataters

http://fusion.net/story/47353/twitter-bot-death-threat/

http://tinysubversions.com/2013/03/basic-twitter-bot-etiquette/

https://github.com/dariusk/NaNoGenMo


More history and Oulipo:

Life: A User's Manual

Knight's Graph


