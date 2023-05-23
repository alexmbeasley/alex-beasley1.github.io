/**
 * DATA TYPES:
 * 
 * 0. In JavaScript, data types are the classification of values 
 * that determine the operations that can be performed on them and the way they are stored in memory.
 * 
 * 1. Number: The Number data type represents integers or floating-point values. JavaScript number type is a double precision 64-big binary format IEEE 754.
 * 
 * 2. String: The String data type represents and manipulate a sequence of characters enclosed in single quotes ('') or double quotes (""). 
 * Strings can be created as primitives, from string literals, or as objects, using the String() constructor
 * 
 * 3. Boolean: The Boolean data type represents two values: true and false. It is used for logical operations and conditional statements.
 * 
 * 4. Array: The Array data type is used to store multiple values in a single variable. It is an ordered collection of elements, each identified by an index. 
 * Arrays can contain multiple values of different data types.
 * 
 * 5. Object: The Object data type represents a collection of key-value pairs, where each key is a unique identifier and each value can be of any data type. 
 * Objects are used for complex data structures.
 * 
 * 6. Function: The Function data type represents reusable blocks of code that can be invoked and executed. 
 * Functions can take input parameters, perform operations, and return values.
 * 
 * 7. undefined: The undefined a primitive data type represents a variable that has been declared but has not been assigned a value. 
 * It also represents the return value of a function that does not explicitly return anything.
 * 
 * 8. null: The null data type represents the intentional absence of any object value. it is a primitive value and is treated as falsy for boolean operations.
 * Not an identifier for a property of global object like undefined can be.
 * 
 * 9. NaN: The NaN (Not-a-Number) data type represents a value that is not a valid number. 
 * It is the result of an operation that cannot produce a value.
 * 
 * 10. Infinity and -Infinity: Infinity represents a  value that is greater than any other number. 
 * -Infinity represents a value that is smaller than any other number. 
 * 
 * 11. Difference between primitive/simple and complex data types:
 * - Primitive or simple data types (such as numbers, strings, booleans, undefined, null, NaN) are immutable and are copied by value. When assigning or passing a primitive value to a variable or function, a new independent copy is created.
 * - Complex data types (such as arrays, objects, functions) are mutable and are copied by reference. When assigning or passing a complex value to a variable or function, a reference to the original value in memory is created, and changes made to the copy will affect the original value.
 * 
 * 12. Primitive values are passed to a function by copy, complex values are passed by reference:
 * - When a primitive value is passed to a function, a copy of the value is created, and any modifications made inside the function do not affect the original value outside the function.
 * - When a complex value is passed to a function, a reference to the original value is passed, so any modifications made inside the function will affect the original value outside the function.
 */

// 1. Number
var age = 27;
console.log(typeof age); // =>  number

// 2. String
var name = "John";
console.log(typeof name); // => string

// 3. Boolean
var booleanValue = true;
console.log(typeof booleanValue); // => boolean

// 4. Array
var numbers = [1, 2, 3, 4];
console.log(Array.isArray(numbers)); // => true

// 5. Object
var student = {
  name: "John",
  age: 27,
};
console.log(typeof person); // => object

// 6. Function
function greet() {
  console.log("Hello World!");
}
console.log(typeof greet); // => function

// 7. undefined
let test;
console.log(typeof test); // => undefined

// 8. null
let value = null;
console.log(typeof value); // => object

// 9. NaN
var result = 10 / "Alex";
console.log(result); // => Nan


// 10. Infinity and -Infinity
var infinityValue = Infinity;
var negativeInfinityValue = -Infinity;
console.log(infinityValue); // => Infinity
console.log(negativeInfinityValue); // => -Infinity

// 11. Difference between primitive/simple and complex data types:
var num1 = 5;
var num2 = num1; // copying by value
num2 = 10;
console.log(num1); // => 5 num 1 is not chnaged 

var arr1 = [1, 2, 3];
var arr2 = arr1; // copying by reference
arr2.push(4);
console.log(arr1); // => [1, 2, 3, 4] arr1 is not changed

// 12. Primitive values are passed to a function by copy, complex values are passed by reference:
function modifyPrimitive(value) {
  value = 10;
  console.log(value); // Output: 10
}

var num = 5;
modifyPrimitive(num);
console.log(num); // Output: 5 (original value is not affected)

function modifyComplex(value) {
  value.push(4);
  console.log(value); // Output: [1, 2, 3, 4]
}

var numbers = [1, 2, 3];
modifyComplex(numbers);
console.log(numbers); // Output: [1, 2, 3, 4] (original value is affected)