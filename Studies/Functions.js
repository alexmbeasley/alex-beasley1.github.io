/**
 * FUNCTIONS:
 * 
 * 0. Functions are reusable blocks of code that perform a specific task or calculate a value. 
 * it should take some input and return an output. 
 * 
 * 1. The two phases to using functions:
 *    - Function Declaration: First, we must declare a function using the JavaScript function keyword, followed by the function name and parentheses (). This defines the function and its parameters.
 *    - Function Invocation or Execution: Next, we can execute a function by calling its name followed by parentheses (). 
 * This triggers the execution of the function's code.
 * 
 * 2. Difference between a function's parameters and arguments passed to a function:
 *    - Parameters: Parameters are variables listed in the function declaration. They act as placeholders for values that will be passed to the function when it is called.
 *    - Arguments: Arguments are the actual values that are passed to the function when it is called. 
 * 
 * 3. Syntax for a named function:
 *    function functionName(parameter1, parameter2) {
 *      // function code here
 *    }
 * 
 * 4. Assigning a function to a variable:
 *    var myFunction = function(parameter1, parameter2) {
 *      // function code here
 *    };
 * 
 * 5. Specifying inputs (parameters) and outputs (return value) in functions:
 *    - Inputs: Parameters are specified in the function declaration. They act as placeholders for the values that will be passed when the function is called.
 *    - Outputs: Functions can optionally return a single value using the return statement. This value represents the result of the function's computation and can be used or stored for further use.
 * 
 * 6. Scope: Functions can see and modify variables in their parent or global scope, but variables defined inside a function are not visible or accessible outside the function (local scope).
 * 
 * 7. Closures: Functions form closures around the data they encapsulate. If an object returned from the function is held in memory (referenced), the closure stays alive, and the data continues to exist within the closure.
 */

// 1. The two phases to using functions:
//    - Function Declaration
function add(num1, num2) {
    return num1 + num2;
  }
  
  //    - Function Invocation or Execution
  var result = add(5, 10);
  console.log(result); // => 15
  
  // 2. Difference between a function's parameters and arguments passed to a function:
  function greet(name) { //name is the parameter
    console.log("Hello, " + name + "!");
  }
  
  greet("Alex"); // "Alex" is the argument passed to the function => Hello, Alex!
  
  // 3. Syntax for a named function:
  function greeting() {
    console.log("Hello!");
  }
  
  // 4. Assigning a function to a variable:
  var add = function (num1, num2) {
    return num1 + num2;
  };
  
  console.log(add(2, 3)); // => 5
  
  // 5. Specifying inputs (parameters) and outputs (return value) in functions:
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  var result = multiply(4, 5);
  console.log(result); // => 20
  
  // 6. Scope:
  var globalVariable = "global";
  
  function myFunction() {
    var localVariable = "local";
    console.log(localVariable); // => local
    console.log(globalVariable); // => global
  }
  
  myFunction();
  console.log(globalVariable); // global
  console.log(localVariable); // Error: localVariable is not defined, it was defined within the function
  
  // 7. Closures:
  function outerFunction() {
    var outerVariable = "outer";
  
    function innerFunction() {
      console.log(outerVariable); // => outer
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure();