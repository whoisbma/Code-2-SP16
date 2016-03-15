## Week 06:
---
## Concordances / Word Counting

##### March 14, 2016

---

A fundamental approach to any kind of textual analysis - whether for subsequent text generation, or things like culling spam from emails - is a simple word count. We should be able to easily answer these questions:

* What words appear in the text?
* How often does each word appear in the text?

With this we can already do a lot - from simple word clouds to more sophisticated statistical analysis.

#### Word Clouds

Word clouds have been called "the mullets of the internet". Mainly because they're ugly and feel dated. [They're also considered harmful by some.](http://www.niemanlab.org/2011/10/word-clouds-considered-harmful/)

[Wordle is a tool for generating word clouds.](http://www.wordle.net/) Dead because Java applets (I think)

![yuck](https://media.nngroup.com/media/editor/2012/11/18/wordle-word-cloud-applications.png)

Even though these things are dated, they illustrate pretty keenly what the fundamentals of word counting can result in. Each word's size corresponds to the amount of times it has appeared in the text. This gives a certain sense of the importance of the word/concept. 

What would be a better way to visually represent this information?

#### Better ways?

Check out these projects:

R Luke Dubois - [Hindsight is Always 20/20](http://hindsightisalways2020.net/)

![http://www.thegundgallery.org/wp-content/uploads/2012/08/Dubois_6-e1350567856254.jpg](http://www.thegundgallery.org/wp-content/uploads/2012/08/Dubois_6-e1350567856254.jpg)

[Hip Hop Word Count](http://staplecrops.com/category/hip_hop_word_count/)

![hhwc](http://images.bigcartel.com/bigcartel/product_images/151287214/max_h-1000+max_w-1000/PicassoBaby_BigCartel.jpg)

[Largest Vocab in Hip-Hop](http://poly-graph.co/vocabulary.html)

![vocab hip hop](http://poly-graph.co/css/wu-tang-graph3.png)

[Nicholas Felton's Annual Report](http://feltron.com/FAR13.html)

![Annual Report](http://iibawards-prod.s3.amazonaws.com/app/public/ckeditor_assets/pictures/29/content_far13_05_2x.jpg)

#### Javascript Objects as Associative Arrays

We can't use lone arrays to count words. We need a data type that holds "key-value pairs." 

In other languages these data types are called **associative arrays**, **maps**, **hashes/hashmaps**, **dictionaries.** In JavaScript we'll just use an ordinary JavaScript object.

We could use this to store names of students and their N numbers for example.

Try the following and see what happens.

```
//an ordinary array
var nameList = ['Jane', 'Sue', 'Bob'];

//a javascript object being used to store key-value pairs
var students = {
	N0472918: 'Bryan',
    N0123758: 'Ryan',
    N0012387: 'Brian'
};

//this works, this is how we access array values:
console.log("is your name " + nameList[1] + '?');

//this DOES NOT work. its looking for key value "1" which students does not have.
console.log("is your name " + students[1] + '?');

//these two both work:
console.log("is your name " + students['N0472918'] + '?');
console.log("is your name " + students.N0012387 + '?');
```

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
//create an empty javascript object:
var concordance = {};
  
//some arbitrary text:
data = "A large program is a costly program, and not just because of the time it takes to build. "; 
data += "Size almost always involves complexity, and complexity confuses programmers. ";
data += "Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. ";
data += "A large program also provides a lot of space for these bugs to hide, making them hard to find. ";
data += "Let’s briefly go back to the final two example programs in the introduction. The first is self-contained and six lines long.";

//split the text into an array of words, using regex:
var tokens = data.split(/\W+/);

//loop through the array of words:
for (var i = 0; i < tokens.length; i++) {
	var word = tokens[i];
    //if its a new word:
    if (concordance[word] === undefined) {
      //create the key (the word) and value (1) in the concordance object:
      concordance[word] = 1;
    } else { // if we've seen this word before, increment the value:
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

now how to sort? we can use the javascript sort() function which is part of the array prototype. the sort function expects a function as an argument. the function it wants is something to return a number that indicates whether or not to change the order of elements its currently analyzing (a and b).

Look at [the Javascript reference doc for more info.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```
keys.sort(function(a, b) {
  // what goes here??
});
```

We can either pass in a function anonymously or explicitly.

```
//pass in function value directly as argument of sort().
keys.sort(function(a, b) {
	return (concordance[b] - concordance[a]);
});

//or create the function first, separately,
var concordanceSort = function(a, b) {
    return (concordance[b] - concordance[a]);
}

//and plug it into the sort function.
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

#### More stuff to think about

[The Secret Life of Pronouns](http://secretlifeofpronouns.com/)

[Analyze Words](http://www.analyzewords.com/)

#### Next

Check out the following areas if you're feeling good about concordances so far. We briefly went over these topics in class but didn't write code specifically for them. The text is from Wikipedia and also Dan Shiffman from ITP.

#### Term Frequency - Inverse Document Frequency

---
**TL:DR:**

* Use this if you want to find the importance of each word in a text you're analyzing.

* You need to analyze other documents in addition to the main text itself.

* This will make sure that you don't weigh common and unimportant words like "the" "a" "and" "of" etc.

---

TF-IDF is a numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It is often used as a weighting factor in information retrieval and text mining. The tf-idf value increases proportionally to the number of times a word appears in the document, but is offset by the frequency of the word in the corpus, which helps to adjust for the fact that some words appear more frequently in general.

Variations of the tf–idf weighting scheme are often used by search engines as a central tool in scoring and ranking a document's relevance given a user query. tf–idf can be successfully used for stop-words filtering in various subject fields including text summarization and classification.

One of the simplest ranking functions is computed by summing the tf–idf for each query term; many more sophisticated ranking functions are variants of this simple model.

**Term Frequency**

Suppose we have a set of English text documents and wish to determine which document is most relevant to the query "the brown cow". A simple way to start out is by eliminating documents that do not contain all three words "the", "brown", and "cow", but this still leaves many documents. To further distinguish them, we might count the number of times each term occurs in each document and sum them all together; the number of times a term occurs in a document is called its term frequency.

**Inverse Document Frequency**

Because the term "the" is so common, term freqency will tend to incorrectly emphasize documents which happen to use the word "the" more frequently, without giving enough weight to the more meaningful terms "brown" and "cow". The term "the" is not a good keyword to distinguish relevant and non-relevant documents and terms, unlike the less common words "brown" and "cow". Hence an inverse document frequency factor is incorporated which diminishes the weight of terms that occur very frequently in the document set and increases the weight of terms that occur rarely.

tf–idf is the product of these two statistics, term frequency and inverse document frequency. Various ways for determining the exact values of both statistics exist.

#### Bayes' Theorem

---
**TL:DR:**

* This is a tool that you can use to make even more judgments based on things like word counts.

---

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

## Homework 06

---- *Due midnight Sunday, 3/20/16* ----

**Make an improvement on a word cloud.** 

* How could you make a visual representation of word counts that conveys information more reliably than a word cloud? 
* To do this you would take your javascript object with all the word counts, loop through it, and create graphics using them as data. 
* You could create a bar chart, or bubbles, or any other visual form you feel like. You could say textSize(concordance[word[i]]) to directly impact the size of text based on the word count for example.
* This is primarily an information design experiment to get you experimenting with the concordance.

Some key code once you have the concordance working: 

```
for (var i = 0; i < keys.length; i++) {
	console.log(keys[i] + ': ' + concordance[keys[i]]);
}
```
This prints out the concordance and all the keys, after they have been sorted. Make sure you get the example code working up to this point.

Once you have that, `keys[(number of the word)]` corresponds to the word in text, and `concordance[keys(number of the word)]` corresponds to the number of times that word appears. You can use the number of times the word appears to create a size variable for an ellipse, or a rotation speed for text that you draw on the screen, or any other thing you can imagine.

***EMAIL ME IF YOU ARE HAVING PROBLEMS WITH THE HOMEWORK AND I WILL HELP YOU!***

**Alternatives: **

* *Advanced: use TF-IDF or Bayesian statistical analysis.*

* *Or create something else with a concordance entirely!*