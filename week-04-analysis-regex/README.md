## Week 04:
---
##### February 22, 2016
---

### Homework handling example

### More history and Oulipo

Life: A User's Manual

Knight's Graph

Now that we have our basic Javascript and OOP in p5.js under our belt, we should start thinking about some basic statistical analysis.

### Flesch Index

The Flesch index is a simple way to calculate the general readibility of a text - that is, how easy or difficult it is to read. It is computed as a function of the **total words vs. total sentences**, and the **total syllables vs. total words**. In other words, the number of words per sentence and syllables per word should correspond to how difficult the text is to read.

**Flesch Index = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)**

It was developed under contract to the US Navy in 1975 by J. Peter Kincaid, who was building on top of earlier work by Dr. Rudolf Flesch. It was initially used by the military to assess the difficulty of technical manuals - and now is ubiquitous, being packaged in software like Microsoft Word and are part of all sorts of standards for text, especially those published in legal work, or by state or federal government.

Higher scores indicate material that is easier to read; lower numbers mark passages that are more difficult to read.

Score|School Level|Notes
-----------|-----------|--------------------------------
90.0–100.0 | 5th grade | Very easy to read. Easily understood by an average 11-year-old student.
80.0–90.0 | 6th grade | Easy to read. Conversational English for consumers.
70.0–80.0 | 7th grade | Fairly easy to read.
60.0–70.0 | 8th & 9th grade | Plain English. Easily understood by 13- to 15-year-old students.
50.0–60.0 | 10th to 12th grade | Fairly difficult to read.
30.0–50.0 | college | Difficult to read.
0.0–30.0 | college graduate | Very difficult to read. Best understood by university graduates.

From wikipedia:

Reader's Digest magazine has a readability index of about 65, Time magazine scores about 52, an average grade six student's written assignment (age of 12) has a readability index of 60–70 (and a reading grade level of six to seven), and the Harvard Law Review has a general readability score in the low 30s. The highest (easiest) readability score possible is around 120 (e.g. every sentence consisting of only two one-syllable words; "The cat sat on the mat." scores 116). The score does not have a theoretical lower bound. It is possible to make the score as low as wanted by arbitrarily including words with many syllables. The sentence "This sentence, taken as a reading passage unto itself, is being used to prove a point." has a readability of 74.1. The sentence "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature." scores 24.4 as it has 26 syllables and 13 words. While Amazon calculates the text of Moby Dick as 57.9,[9] one particularly long sentence about sharks in chapter 64 has a readability score of −146.77.[10] One sentence in the beginning of "Swann's Way", by Marcel Proust, has a score of −515.1.[11] Even further, the chemical name for titin, 189,819 characters long, scores a −6,128,472, with 72,443 syllables. The U.S. Department of Defense uses the reading ease test as the standard test of readability for its documents and forms. Florida requires that life insurance policies have a Flesch reading ease score of 45 or greater.
	
We'll be using an example by Daniel Shiffman and picking it apart a little bit.

Dan Shiffman, go!

Our pseudo-code will look something like this:

1. Read input file into String object
2. Count words
3. Count syllables
4. Count sentences
5. Apply formula
6. Write out report file

We know we can read in text from a file and store it in a String object as demonstrated in the example above. Now, all we have to do is examine that String object, counting the total words, sentences, and syllables, applying the formula as a final step. To count words, we’ll use split().

The first thing we’ll do is count the number of words in the text. We’ve seen in some of the examples above that we can accomplish this by using split() to split a String up into an array wherever there is a space. For this example, however, we are going to want to split by more than a space. A new word occurs whenever there is a space or some sort of punctuation.

```
var delimiters = '.:;?! !@#$%^&*()+';
var words = splitTokens(data, delimiters);
```

Now we have split up the text, we can march through all the words (tokens) and count their syllables.

```
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  totalSyllables += countSyllables(word);
  totalWords++;
}
```

Ok, so countSyllables() isn’t a function that exists in JavaScript. We’re going to have to write it ourselves. The following method is not the most accurate way to count syllables, but it will do for now.

**Syllables = total # of vowels in a word (not counting vowels that appear after another vowel and when 'e' is found at the end of the word)**
	
* “beach” –> one syllable
* “banana” –> three syllables
* “home” –> one syllable
* Our code looks like this:

```
function countSyllables(word) {
  var syl    = 0;
  var vowel  = false;
  var length = word.length;

  // Check each word for vowels (don't count more than one vowel in a row)
  for (var i = 0; i < length; i++) {
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
  // Check for 'e' at the end, as long as not a word w/ one syllable
  if (((tempChar == 'e') || (tempChar == 'E')) && (syl != 1)) {
    syl--;
  }
  return syl;
}

// Check if a char is a vowel (count y)
function isVowel(c) {
  if      ((c == 'a') || (c == 'A')) { return true;  }
  else if ((c == 'e') || (c == 'E')) { return true;  }
  else if ((c == 'i') || (c == 'I')) { return true;  }
  else if ((c == 'o') || (c == 'O')) { return true;  }
  else if ((c == 'u') || (c == 'U')) { return true;  }
  else if ((c == 'y') || (c == 'Y')) { return true;  }
  else                               { return false; }
}
```

Counting sentences is a bit simpler. We’ll just split the content using periods, question marks, exclamation points, etc. (“.:;?!”) as delimiters and count the total number of elements in the resulting array. This isn’t terribly accurate; for example, “My e-mail address is daniel.shiffman@nyu.edu.” will be counted as three sentences. Nevertheless, as a first pass, this will do.

```
// Look for sentence delimiters
var sentenceDelim = '.:;?!';
var sentences = splitTokens(data, sentenceDelim);
totalSentences = sentences.length;
```

Now, all we need to do is apply the formula, generate a report.

```
// Calculate flesch index
var f1 = 206.835;
var f2 = 84.6;
var f3 = 1.015;
var r1 = totalSyllables / totalWords;
var r2 = totalWords / totalSentences;
var flesch = f1 - (f2 * r1) - (f3 * r2);

// Write Report
var report = "";

report += "Total Syllables: " + totalSyllables + "\n";
report += "Total Words    : " + totalWords + "\n";
report += "Total Sentences: " + totalSentences + "\n";
report += "Flesch Index   : " + flesch + "\n";
```

The Flesch index is by no means the only test. There are lots of alternatives. Most differ only slightly if at all in principle.

[Automated Readability index](https://en.wikipedia.org/wiki/Automated_readability_index)

[Coleman-Liau index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)

[Dale-Chall	readability formula](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula)

[Gunning fog index](https://en.wikipedia.org/wiki/Gunning_fog_index)

### Simple Measure of Goobledygook (SMOG)



### Regular Expressions





### Homework 04

---- *Due midnight Sunday, 2/28/16* ----

*BM- regular expression practice.*