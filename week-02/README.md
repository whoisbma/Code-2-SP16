## Week 02:
---

## javascript syntax and objects, basic DOM interaction in p5.js, strings and generative text

##### February 8, 2016

*Much of this class adapted from Daniel Shiffman's Processing A2Z material.*

---



### Quiz

1. create a variable that stores a boolean in javascript.
2. create an array of numbers in javascript.
3. do strings use ‘ ‘ or “ “ in javascript?
4. What is ‘\n’ and what does it do?
5. What is ‘NaN’?
6. Write a line of code that shows an example of string concatenation.
7. What’s the result of (50 > 30 && 20 < 10)?
8. What’s the result of (100 || 1 - 1)?
9. Write a while loop that will never stop looping.
10. Write a for loop that loops 20 times, starting at i = -10.

Push your results to your class-02 folder in github.

### Javascript!

What is javascript? What makes it hard for us if we're expecting Java? Java vs. Javascript?

- Javascript is a high-level, dynamic, untyped, and interpreted programming language.
	- **High-level**: strong abstraction from the details of the computer.
	- **Dynamic**: executes behaviors at runtime that static programming languages execute during compilation.
	- **Untyped**: no ints, chars, strings, booleans, floats. All loosey goosey. If you're used to strictly typed languages, this is a pain.
	- **Interpreted**: each instruction executes directly, without compiling the whole thing to machine language first.

- Executing javascript in the browser - *command-option-i*

- Objects as *functions* vs. objects as *variables*

- Arrays as dynamic

- "==" vs. "==="

- String methods
	- .indexOf()
	- .substring()
	- .concat()
	- .split()
	- .replace()
	- .slice()
	- .charAt()

### P5.js and the DOM

- createCanvas
- createP
- createDiv
- createButton()
- events/callbacks

### Oulipo, DADA, Erasures

---
---
---

## Homework 02

---- *Due midnight Sunday, 2/14/16* ----


1. write an algorithm to generate new text from existing text as a single page program in P5. Use a either P5’s text methods and the DOM to display it. No randomness - every single aspect is predetermined by you. Post to your week 2 page in your github.io.

	* Suggestions:

		* Create a programmatic version of the one you workshopped in class.
		
		* Create a re-making of an oulipo or Dada technique.

2. Read Chapter 2 of [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html).