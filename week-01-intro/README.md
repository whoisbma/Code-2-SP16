## Week 01:

## Intro, Terminal, Github, P5.js vs. Processing

##### February 1, 2016

---
---
---

### Admin stuff:

* In this class we're making things primarily with javascript via P5.js, using Terminal and github.

* How to get an A: show up, do the homework, be reasonable, try your best!

* If you have special considerations of any kind, talk to me or set up an appointment, my email is bma@newschool.edu.

* Assignments will be a mix of weekly prototypes to practice core concepts and slightly longer term projects to get more ambitious.

### Terminal Review

We are using the command line because it is a crucial step towards becoming a better programmer, and it also kind of becomes fun in its own way.

Command Line Crash Course: [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/)

Main takeaways/commands to memorize:

* ```pwd``` - ***print working directory***
	* shows what directory you are operating in in your terminal window. make sure you are where you intend to be, especially when doing things like initializing git!
* ```cd``` - ***change directory***
	* you can either type in a path yourself and then press enter to go there, like ```cd Desktop/```, or use the mouse to drag a folder over to terminal in front of a blank ```cd ``` - it will automatically copy the file path for you.
	* type ```cd ..``` to go back one directory, ```cd ../..``` to go back two directories, etc.
	* type ```cd``` and press enter to go back to your home directory.
	* typing ```cd -``` will take you to your most recent working directory.
* ```ls``` - ***list***
	* list all files in the current working directory.
* ```mkdir``` and ```rmdir``` - ***make directory*** and ***remove directory***
	* type in the name of the folder to create or remove after the command and press enter. 
	* you can only ```rmdir``` empty directories.
* ```touch``` and ```rm``` - ***create*** and ***remove*** a file
	* type the name of the file to create or remove after the command.
	* careful with that ```rm``` command! 
* ```echo``` - ***output text***
	* prints out the text entered after the command.
	* if used in conjunction with the ```>``` command, writes directly to a file, overwriting the existing content, like: ```echo "Hello world" > hello.txt```
	* using with ```>>``` will append rather than overwrite!
* ***Tab button*** - autocomplete! life saver.
* ***Up and down arrows*** - scroll to previous commands and back.
	
For more, just google around. Get used to making directories and writing directly to files. 

### Github

Github is a method for "source control" - basically saving snapshots of your work to return to at any time! We'll be using it to turn in homework, and also as an easy way to have some simple hosting for publishing to the web.

Easy to get intimidated at first, but for what we're doing, it really isn't so hard! 

Repeat after me... 

git ***add***, git ***commit***, git ***push***.

git ***add***, git ***commit***, git ***push***.

git ***add***, git ***commit***, git ***push***.

git ***add***, git ***commit***, git ***push***.

git ***add***, git ***commit***, git ***push***.

To create a new repo and connect it to your local directory, press the "+" button in the top right of the github site. Name your repo, and then follow the instructions. Slightly more detailed version:

1. In terminal, ```cd``` to the directory where you will have your files or already have your files in the repo.
2. ```git init``` in terminal. This gets us started.
3. ```touch README.md``` or make sure your existing files that you want to commit are where you want them to be. 
4. ```git add .``` to add everything to prepare to commit.
5. ```git commit -m "your message here"``` to commit the added files and prepare them for pushing.
6. ```git remote add origin <your link here!>``` - the link is in the repo you just created on the github site.
7. ```git push origin master``` TA DA!

Make sure you have created a <your username>.github.io repository for turning in your homeworks! Guide is here: [https://pages.github.com/](https://pages.github.com/)

### Markdown

[Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[MOU, a great markdown editor](http://25.io/mou/)

### P5.js

P5.js is the result of the work of [Lauren McCarthy](http://lauren-mccarthy.com/), an ITP alum who asked the question: "what language would Processing use if it were built now rather than 2001?" The answer is of course, javascript. In comparison, Processing was built on top of Java. Javascript allows us to publish to the web and have people all around the world see our work.

[P5.js home site](http://p5js.org/)

[Downloads - get the complete library, and the p5.js editor](http://p5js.org/download/)

Don't get spoiled on the editor. Use [Sublime Text](https://www.sublimetext.com/) to edit the **sketch.js** file directly.

Run your code either by pushing to your github.io site repository, or running a **python SimpleHTTPServer** via terminal. Don't just open the index.html locally! You will have problems.

[SimpleHTTPServer guide](https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer)

---
---
---

## Homework 01

---- *Due midnight Sunday, 2/7/16* ----

1. **Get your github and your your username.github.io page set up.** Create a subfolder structure in your github.io directory to upload your homeworks to, like *username.github.io/01/index.html*, etc.

2. **If you need an HTML intro, do this: [HTML & CSS intro](https://www.codecademy.com/learn/web)**

3. **Go back to an old sketch you've done in Processing, and try to convert it to run in P5.js.** Search through the P5.js site for help. There are lots of guides on this very topic. Try a bouncing ball, try arrays, try for loops to make patterns!

4. **Edit this wiki page to add your name and github username and github.io site: [https://github.com/whoisbma/Code-2-SP16/wiki/Usernames](https://github.com/whoisbma/Code-2-SP16/wiki/Usernames)** - this is so I can find you and your code.

5. **Upload your p5.js code to your username.github.io/01/ page.**

6. **Read Eloquent Javascript, Chapter 1** *(I know I said 1-4 in class, there's already enough other stuff to handle, especially if you are doing the HTML intro.)*

