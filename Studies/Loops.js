/**
 * LOOPS:
 * 
 * 0. Loops are used to repeatedly execute a task or block of code based on a contion and continues until a certain condition is met. 
 * They provide a way to automate repetitive tasks and process collections of data.
 * The loop consits of three optional expressions followed by a code block: 
 *  initialization - This expression runs before the execution of the first loop, and is usually used to create a counter.
 *   condition - This expression is checked each time before the loop runs. If it evaluates to true, the statement or code in the loop is executed. If it evaluates to false, the loop stops. And if this expression is omitted, it automatically evaluates to true.
 *   finalExpression - This expression is executed after each iteration of the loop. This is usually used to increment a counter, but can be used to decrement a counter instead.
 * 
 * 1. while loop:
 *    - The while loop executes a block of code as long as a specified condition is true.
 *    - The condition is evaluated before each iteration.
 * 
 * 2. for loop:
 *    - The for loop repeats a block of code for a specific number of times.
 *    - It consists of an initialization, a condition, and an increment or decrement expression.
 * 
 * 3. for-in loop:
 *    - The for-in loop iterates over the properties of an object while accessing the key.
 *    
 * 
 * 4. Looping any number of times:
 *    - The for loop can be used to loop a specific number of times.
 *    - By using a counter variable and the condition, we can control the number of iterations.
 * 
 * 5. Forward counting up to a limit:
 *    - By initializing a counter variable, setting the condition to check against the limit, and incrementing the counter, we can count forward up to the limit.
 * 
 * 6. Backward counting down to 0:
 *    - Similar to forward counting, we can initialize the counter variable, set the condition to check against 0, and decrement the counter to count backward down to 0.
 * 
 * 7. Looping over an Array:
 *    - The for loop can iterate over an array by using the array's length property and accessing each element using the index.
 *    - We can loop forward using index values from 0 to length - 1 and backward from length - 1 to 0.
 * 
 * 8. Looping over an Object:
 *    - The for-in loop can be used to iterate over the properties of an object.
 *    - It assigns each property name to a variable, which can be used to access the corresponding value.
 */

// 1. while loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */

// 2. for loop
for (var j = 0; j < 5; j++) {
  console.log(j);
}
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// 3. for-in loop
var person = {
  name: "Alex",
  age: 37,
  city: "New Orlenas"
};

for (var key in person) {
  console.log(key + ": " + person[key]);
}
// 
//  name: Alex
//  age: 37
//  city: New Orleans
//  


// 4. Looping any number of times
var num = 5;
for (var k = 0; k < num; k++) {
  console.log(k);
}
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// 5. Forward counting up to a given limit
var limit = 10;
for (var x = 0; x <= limit; x++) {
  console.log(x);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 6. Backward counting down to 0
for (var countDown = 10; countDown >= 0; countDown--) {
  console.log(countDown);
}
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// 7. Looping over an Array
var numbers = [1, 2, 3, 4, 5];
for (var index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */
// Looping over an Array backward
for (var index = numbers.length - 1; index >= 0; index--) {
  console.log(numbers[index]);
}
/**
 * 5
 * 4
 * 3
 * 2
 * 1
 */