# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

number -> primitive
string -> primitive
boolean -> primitive
undefined -> primitive
null -> primitive
object
symbol

2. What's the difference between =, ==, and === in JavaScript?

= sets a variable equal to something
== asks if only the values are the same for 2 pieces of data
=== asks if 2 pieces of data have the same value and type

3. What is the difference between an array's index and length?

length is the number of indices, array index is a location within the array.

4. What are the three parts of a for loop?

start, end, and incriment

5. What is a function's declaration, argument, and call?

declaration is where you define the function.
argument is what is the data that is passed into a function
call is when the function is used with specific data

6. What are the three main steps in saving work to github?

git add ., git commit -m"", git push

7. What is the terminal command to move directories?

cd .. -> up a directory
cd <name of directory> -> down a directory

8. Do you have a suggestion for a Check In question?

If you could visit any place where would it be

9. What was your favorite topic this week?

Pig Latin

10. What was your "A-ha!" moment this week?

getting Pig Latin to show up in a web page

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()

//This function will return undefined since logIt does not take in an argument, and text is defined after the console log within the function.
```

2. What is JSON? How does it relate to javascript objects?

JSON stands for Javascript Object Notation.  It is a legible way to represent objects for users to read more easily.

3. Describe a closure, what is it good for and how do you recognize one?

a closure is a function combined with references to its lexical environment.  It gives an inner function access to an outer functions scope.
