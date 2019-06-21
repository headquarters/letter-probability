# letter-probability
Check the probability that a letter appears in the string of spelled-out-numbers 1-123 ("one" to "onehundredtwentythree"). 

## Answers
Question 1: what is the length of the string of spelled-out-numbers 1-123? Answer: 1235
Question 2: what is the probability a letter chosen at random is the letter "e"? Answer: 233/1235 (18.87%)

## How to run

1. `npm install`
2. `npm start`

The app will open localhost:3000 in your default browser. 

## Technical decisions

The app was created using the Create React App project in order to scaffold everything quickly without having
to deal with build setups, test infrastructure, and so on. 

A script named `print-string.js` is in the root of the project that uses the NPM package `number-to-words`
to get the string representation of the numbers 1 through 123. This is a separate script because getting that 
string is a one time operation and allows the app to import the already-computed static string without
having to do that work on each page load/app startup/etc. To get the string, run `node print-string.js`. 

The string at the bottom of the page is built with <span> tags wrapping each letter for the sake of styling. I would
normally not do something like this in a production app because of the computational overhead of mapping over every
letter in a gigantic string just to wrap it in a span and then appending 1000+ DOM nodes. 
Nonetheless, it looks kind of cool when the selected letter highlights. :)

Everything is inside the App.js file, though this should probably be decomposed into smaller components
and utility functions in a more production-ready app. Right now it's kind of a mini-monolith. 

As far as testing, there is only one DOM-level test (effectively an acceptance test) that checks the "e" probability is 
calculated and displayed properly. Each of the methods in App.js could use their own unit tests, but I did not take the
time to write those. 