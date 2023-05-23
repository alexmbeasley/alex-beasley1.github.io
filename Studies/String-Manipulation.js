/**
 * STRING MANIPULATION:
 * 
 * 1. String Operators:
 *    - The + operator can be used to concatenate strings together.
 *    - It allows you to combine two or more strings into a single string.
 * 
 * 2. String Methods:
 *    - JavaScript provides several methods for examining strings.
 *    - Some commonly used string methods include:
 *      - length: returns the length of a string.
 *      - toUpperCase: converts a string to uppercase.
 *      - toLowerCase: converts a string to lowercase.
 *      - slice: extracts a portion of a string and returns a new string.
 *      - indexOf: returns the index of the first occurrence of a specified substring.
 *  
 *      
 *      
 */

// 1. String Operators
var firstName = "Alex";
var lastName = "Beasley";
var fullName = firstName + " " + lastName; // => Alex Beasley with concatenate

// 2. String Methods
var text = "Hello World!";
var length = text.length;
var uppercase = text.toUpperCase();
var lowercase = text.toLowerCase();
var sliced = text.slice(6, 12);
var index = text.indexOf("World");
var replaced = text.replace("Hello", "Hi");

console.log(fullName); // => Alex Beasley
console.log(length); // => 12
console.log(uppercase); // HELLO WORLD!
console.log(lowercase); // hello world!
console.log(sliced); // => World
console.log(index); // => 7
