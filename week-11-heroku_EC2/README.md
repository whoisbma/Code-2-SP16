## Heroku and EC2
4/25/16

notes from in-class:

#### Heroku

##### heroku toolchain

* install via command line, lets us use/commit to heroku remotes via CLI 

* need to have account for heroku toolchain.

##### npm init

* command to set up a node/npm project in command line.

* sets up a package.json file.

* package.json tells node/npm some extra info about the code, how to run it, etc

* necessary for running remotely via node 

##### Procfile

* a heroku-specific file

* tells heroku to let us run a “worker” or some other type of process 

#### AMAZON EC2

##### PEM key file

* lets us connect via SSH securely (on terminal and also FTP, which is how we can add files to the server)

* then we can control the server via the command line, have to install node, npm, etc. 

##### FOREVER

* a node module that lets us run a node process in the background

##### [See more from Daniel Shiffman's excellent tutorial](https://www.youtube.com/watch?v=DwWPunpypNA&index=8&list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV)