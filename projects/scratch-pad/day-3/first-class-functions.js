// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //given a base input that could be string or number, create function that test if its greater than base
    return function(value) {
        return value > base;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create a function that test if less
    return function(value) {
        return value < base;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //create a function that test if a string starts with the given startswith single character
    //need to change the case
    startsWith = startsWith.toLowerCase();
    //create function that checks the char
    return function(str){
        //change string to lower
        str= str.toLowerCase();
        //check if the charat first element starts with the single char
        return str.charAt(0) === startsWith;
       }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //same as above but need to analyze last element
    var oneTest = endsWith.toLowerCase();
    return function(str){
        var twoTest = str.toLowerCase();
        return twoTest.charAt(str.length-1) === oneTest;
       }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * modify is a function that will return modified 
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //given an array of strings and a funct that modifies them, return the array
    //create array dump
  var newStr = [];
  //loop through the string using the funct
  for (var i = 0; i < strings.length; i++){
    //push into string dump using each string elememnt and the given funct
    newStr.push(modify(strings[i]));
  }
    return newStr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * test is a function desinged to test every item in that array, a function that returns true or false
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //given array of strings and func which returns a true or false, return true if it is otherwise false
    //loop through the given string
    for (var i = 0; i < strings.length; i++){
        //test if each element in the string is true using the given funciton
        if(test(strings[i]) !== true){
            return false;
        }
    } return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
