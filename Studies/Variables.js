/**
 * VARIABLES:
 * 
 * 0. Variables are named containers that store a given value. Variables are named using a variable declariton and assigned with a value after that
 * delcariton. These variables can hold any type of data such as: number, string, boolean, array or oject. 
 * 
 * 1. Declartion and assignment: In order to create a variable in Javascript we need to first declare that it is a variable using three key words.
 * The declartion and assignment can be done at the same time. 
 * 
 * 2. var, let const: these are the delcartion keywords
 * 
 * 3. Hoisting: variables in javascript can be moved to the top of your code before it is executed depending on the keyword used. 
 * This allows variables to be used before they are declared. 
 * 
 */
 // 1. Declartion: at the declarition phase we are just declaring the name for the variable using one of our three keywords
 var age;
 

 // 1. Assignment: at the assignment phase we give a value to our delcared variables.
 //in the example below we delcared and assinged at the same time

 var myAge = 37;

 // 2. var, let, const:

 //var: can have global or function scope depending on where they are declared, the example above in part 1 uses the var keyword

 //let: are not subject to hoisting and are usually declared with block scope within a function, they can be reassinged but not redeclared and
 //are also not subject to hoisting

let x = 4; // x is 4
{
    let x = 2;
    console.log(x);// x will be 2
}
console.log(x); //x will still be 4 here since it is outside of the block scope
 
//const: is almost the same as let but they cannot be reassinged or redelcared
const numb = 4;
numb = 5; //will give an error
numb = numb + 10//will give an error

//3. Hoisting: a var or function can be used before they are delcared. Cannot be used with let or const. 
a = 5;//var is assinged a value
console.log(a);//value is logged
var a; //variable is delcared

//this code when ran will techicanlly look like this due to hoisting the variable
var a;
a = 5;
console.log(a);
  
//3. A funciton can also be hoisted

greeting();
function greeting(){
    console.log ("hello there");
}

//in the above example the function is hosited to before it is called

