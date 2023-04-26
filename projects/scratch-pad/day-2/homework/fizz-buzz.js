// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //function needs to print numbers 1 to 100
    for (var i = 1; i <= 100; i++){
        //need to check if 3 and 5 are multiples
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
            //check if 5 is multiple
        } else if (i % 5 === 0){
            console.log('Buzz');
            //check if 3 is multiple
        } else if (i % 3 === 0){
            console.log('Fizz');
            //otherwise log the number
        } else {
            console.log(i);
        }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}