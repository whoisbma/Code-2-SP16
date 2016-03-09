## Week 05:
---
## Regular Expressions (Regex)

##### March 7, 2016

##### Some Metacharacters

```
^			beginning of line
$			end of line
\b			word boundary
\B			a non word boundary
.			any one character
\d			any digit from 0 to 9
\w			any word character (a-z,A-Z,0-9)
\W			any non-word character
\s			any whitespace character (tab, new line, form feed, end of line, carriage return)
\S			any non whitespace character
?			appearing once or not at all
*			appearing zero or more times
+			appearing one or more times
{min,max}	appearing within the specified range
[options]	character class - for example [aeiou] - either a, e, i, o, or u will match
|			Alternation (or)
()			Parenthesis will constrain alternation and also provide back-references.
```

##### Some basic examples

```
http://[^\s<>"']+				match URLS
\w+@\w+\.(net|com|edu|org)		match emails
(\d+)[-.]\d+[-.]\d+				match simple phone number
```

##### In Javascript

Regex object can be created two ways:

```
var myRegex1 = new RegExp('[aeiou]+');

var myRegex2 = /[aeiou]+/;
```

Flags:

```
/regex goes here/g
//global flag, will match all instances

/regex goes here/i
//case-insensitivity flag, capitals or lowercase letters
```

RegExp methods:

```
myRegex.test(string goes here);
//returns true if matched

myRegex.exec(string goes here);
//returns an array of matches (if global)
```

String methods:

```
myString.search(regex goes here);	
//returns the index number of the match (like indexOf())

myString.match(regex goes here);	
//similar to .exec method of RegExp object

myString.replace(regex, replacement string);	
//replaces matches with the replacement string
//can use a backreference (captured with parentheses) to the regex match with $1, $2, etc. for replacement string
```

## Homework 05

---- *Due midnight Sunday, 3/13/16* ----

1. Convert your Flesch code to use Regex
2. Check out the [Pirate Translator](http://www.apple.com/downloads/dashboard/calculate_convert/piratetranslator.html) and create something using the .replace string method to create some other kind of text converter.