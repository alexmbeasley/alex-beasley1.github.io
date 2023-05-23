/**
 * CONTROL FLOW:
 * 
 * 0. Control flow is the order in which the code is executed in a program from top to bottom. 
 * It determines how the program flows and which statements are executed based on certain conditions.
 * examples: if, else-if, else and switch
 * 
 * 1. Conditional statements: Conditional statements allow us to execute different blocks of code based on different conditions by return a boolean context.
 *  There are three types of conditional statements in JavaScript: if, else-if, else and switch
 * 
 * 
 * 
 */

// 1. Conditional Statements:

// if statement has condtion to check if true or false:
if (condition) {
    // Code to be executed if the condition is true
  }

  var num = 4;
if(num > 0){
  console.log('The number is positive.');
 } //=> The number is positive. 
  
  // else if statement, continues the check if the first statment returns false:
  if (condition1) {
    // Code to be executed if condition1 is true
  } else if (condition2) {
    // Code to be executed if condition1 is false and condition2 is true
  }

  var num = -4;
  if(num > 0){
    console.log('The number is positive.');
  } //returns false, continues to next statement
  else if(num < 0){
    console.log('The number is negative.');
  } //=> The number is negative. 

  // else statement, if all statemetns resolve to false it triggers the else:
  if (condition) {
    // Code to be executed if the condition is true
  } else {
    // Code to be executed if the condition is false
  }

  var num = 0;
if(num > 0){
  console.log('The number is positive.');
}//returns false
else if(num < 0){
  console.log('The number is negative.');
}//returns false
else {
console.log('The number is zero.');
}//since no conditions were met, is executed
//=>The number is zero.
  
  // switch statement, these will keep our code cleaner, can be used to check multiple condtions:
  switch (expression) {
    case value1:
      // Code to be executed if expression matches value1
      break;
    case value2:
      // Code to be executed if expression matches value2
      break;
    default:
      // Code to be executed if expression doesn't match any values
  }

  var day = 'Sunday';
switch(day){
	case 'Monday':
	 console.log('It is Monday');
	 break;//returns false
  case 'Tuesday':
   console.log('It is Tuesday.');
   break;//returns false
  default:
    console.log('Today is not Monday or Tuesday.');
} //returns true => Today is not Monday or Tuesday.