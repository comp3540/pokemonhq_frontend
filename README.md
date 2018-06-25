# pokemonhq

## Overview

This is the main **backend** source code for the COMP 354 summer 2018 software project @ Concordia University, Montreal, Quebec. The goal of this project is to create a web based Pokemon dueling card game.

## Authors

- Tommy Baloukas
- Nicholas Paun 
- Liz Schraffenberger 
- Julie Merlin
- Rose Dufresne

## Application specifications

The backend of the application is built with Node.js, Javascript's cross-platform run-time environment that enables the executation of Javascript on the server side. (TBC...)

## Getting started

To start, clone this repository on your local machine, and ensure that you have node/npm installed globally on your computer. For more information on downloading node/npm, please [Click Here](https://nodejs.org/en/download/). Once node/npm has been installed, navigate to the project's root directory within the terminal, and run the following command:

```

npm install

```

This command will download all the necessary node dependencies listed in the package.json folder. Next, rename the **.env-example** file to **.env** this will be the file responsible for holding all the environment variables of the application. 

### File Structure

The application is split up into two main files: *src* and *dist*. The *src* folder contains all of the application's pre-transpiled Javascript code, whereas *dist* will hold the post-transpiled Javascript code. The reason for transpiling is to give the implementers the ability to write ES6 (check out these awesome new features [Here](http://es6-features.org/). That being said, **all code should be written in the src folder and transpiled**. 

### Transpiling 