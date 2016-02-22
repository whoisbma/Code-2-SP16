## Week 04:
---
##### February 22, 2016
---

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




### Regular Expressions



---

### Datavis

Hip Hop Word Count - https://vimeo.com/23874762 - http://hiphopwordcount.com/

http://poly-graph.co/vocabulary.html

Rap Research Group at Eyebeam

https://medium.com/@neuroecology/punctuation-in-novels-8f316d542ec4#.cksr5jsgi

http://www.informationisbeautiful.net/visualizations/billion-dollar-o-gram-2013/


### Homework 04

---- *Due midnight Sunday, 2/28/16* ----

*BM- regular expression practice.*