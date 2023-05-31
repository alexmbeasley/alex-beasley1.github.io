// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {}; //variable declariatin and assigned an empty object, _

// /** */ var _ = {
//     identity: function(value){
//         return value;
//     }
// //}
/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){ 
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //test is value is an object
    if (typeof value === 'object'){
        //test for null
        if (value === null){
            return 'null';
            //test for array
        } else if (Array.isArray(value)){
            return 'array';
            //return object if all else fails
        } else {
            return 'object'; 
        }
    }
    //otherwise return the type of value, (string, num, undefined, boolean)
    else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //check if not an array
    if(!Array.isArray(array)){
        return [];
    }
    //check if not a number

    if(typeof number !== 'number'){
        return array[0];
    }
    //check if num less than zero
    if(number <= 0){
        return [];
    }
    //check if greater than lenght
    if(number > array.length){
        return array;
    }
    //otherwise return first num items array
   return array.slice(0, number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    //check for not an array
    if (!Array.isArray(array)){
        return [];
    }
    //check for not a number and return the last element
    if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    //check for neg
    if (number < 0){
        return [];
    }
    //check for if greater than array length
    if (number > array.length){
        return array;
    }
    //otherwise return the last number removed from array
    return array.slice(array.length - number);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        //check the index if eqaul to value
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //set up test var starting at false
    var testOne = false;
    //iterate through the array
    for (var i = 0; i < array.length; i++){
        //if value is contained in array return true
        if (array[i] === value){
            testOne = true;
        }
    }
    //using ternary check if no value is given otherwise return false
    return value === undefined ? false : testOne;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //determine if collection is array
   if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        func(collection[i], i, collection)
    }
   } else{
    for(let key in collection){
        func(collection[key], key, collection)
    }
   }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    var arr = [];
    for (var i = 0; i < array.length; i++){
        //use indexof function from above to check if any of the elements of the given var have duplicate
        if(_.indexOf(arr, array[i]) === -1){
            arr.push(array[i]);
        }
    }
    return arr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/    
_.filter = function (array, func){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            arr.push(array[i]);
        }
    }
    return arr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    let arr = [];

    //iterate through array using each
    _.each(array, function(element, index, array){
        //same as above but use the false returns
        if (!func(element, index, array)){
            arr.push(element);
        }
    });

    return arr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    let arrTrue = [];
    let arrFalse = [];

    //iterate through array using each
    _.each(array, function(element, index, array){
        if (func(element, index, array)){
            //same as reject and filter but pushing into different storage arrays
            arrTrue.push(element);
        }
        else {
            arrFalse.push(element);
        }
    });
    //returns both values
    return [arrTrue, arrFalse];
    
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    let mapArr = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            mapArr.push(func(collection[i], i, collection))
        }
    } else{
        for(let key in collection){
            mapArr.push(func(collection[key], key, collection))
        }
    }
    return mapArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrObject, property) {
    //using map(each) you can iterate through the array
    return _.map(arrObject, function(arrElement) {
        //return array with array properties for every element
        return arrElement[property];
    });

}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //check for if it is provide, return true otherwise
    if(func){
        //loop through collection and if any element returns false, return false
        for (let i = 0; i < collection.length; i++){
            if(!func(collection[i], i, collection)) {
                return false;
            }
        }
        //loop through object and if any value returns false, return false
        if (!Array.isArray(collection)) {
            for (let key in collection) {
              if (!func(collection[key], key, collection)) {
                return false;
              }
            }
          }
        } 
        //if a function is not provided, check if any of the array elements are true
        else {
        for (let i = 0; i < collection.length; i++){
            if(!collection[i]) {
                return false;
            }
        }
    }
    return true;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    
        //check for if it is provide, return false otherwise
        if(func){
            //loop through collection and if any element returns true, return true
            for (let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)) {
                    return true;
                }
            }
            //loop through object and if any value returns true, return true
            if (!Array.isArray(collection)) {
                for (let key in collection) {
                  if (func(collection[key], key, collection)) {
                    return true;
                  }
                }
              }
            } 
            //if a function is not provided, check if any of the array elements are true
            else {
            for (let i = 0; i < collection.length; i++){
                if(collection[i]) {
                    return true;
                }
            }
        }
        return false;
    }


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function (array, func, seed){
    let results;
    if(seed === undefined){
        results = array[0];
        for(let i = 1; i < array.length; i++){
            results = func(results, array[i], i, array)
        }
    } else {
        results = seed;
        for(let i = 0; i < array.length; i++){
            results = func(results, array[i], i, array)
        }
    }
    return results; 
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...objs){
    for( let i = 0; i < objs.length; i++){
        //loop through possilbe final object
        //create obj variable to store final object element 
        let obj = objs[i];
        //set up for loop
        for(let key in obj){
            //set up objects to equal each other
            obj1[key] = obj[key];
        }
    }
    return obj1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
