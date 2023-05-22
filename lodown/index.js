'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and returns value unchanged
 * @param {Any value} value: Function takes in any data type
 * @returns {Any value} value: Function returns input unchanged
 */

function identity(value){ 
    return value;
}
module.exports.identity = identity;

/**
 * filter: Function takes in an array of value and a callback function. filter iterates through every value,
 * passing each into a test function. If the result of the function is true, item is passed into input arr
 * @param {Array} collection: Function takes in array.
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Array} collection: Function returns an output array of all items passed funciton test
 * 
 * 
 */

function filter(array, func){
    let arr = [];
    _.each(array, function(element, index, array){
        if(func(element, index, array)){
            arr.push(element);
        }
    });
    return arr;
}
module.exports.filter = filter;


/**
 * typeOf: function takes in a value and returns the data type as a string
 * 
 * @param {Any value} value: function takes in any data type
 * @returns {Any value} value: function returns the data type
 */

function typeOf(value){
    if(typeof value === 'object'){
        if(value === null){
            return 'null';
        } else if(Array.isArray(value)){
            return 'array';
        } else {
            return 'object';
        }
    }
    else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;
/**
 * first: function takes in array and number, checks if its not an array
 * , checks if its not a number, checks if it is negative,
 * checks if it is greater than the given array length, 
 * otherwise returns first array element
 * @param {Array} collection: takes in an array
 * @param {Number} number: takes in a number to test
 * @returns {Array} collection: returns a mutated array
 */

function first(array, number){

    if(!Array.isArray(array)) {
        return [];
    }

    if(typeof number !== 'number'){
        return array[0];
    }

    if(number <= 0){
        return [];
    }

    if(number > array.length){
        return array; 
    }
    return array.slice(0, number);
}

module.exports.first = first;
/**
 * last: function takes in array and number, checks if its not an array
 * , checks if its not a number, checks if it is negative,
 * checks if it is greater than the given array length, 
 * otherwise returns last array element
 * @param {Array} collection: takes in an array
 * @param {Number} number: takes in a number to test
 * @returns {Array} collection: returns a mutated array
 */
_.last = function(array, number){
    
    if (!Array.isArray(array)){
        return [];
    }
    
    if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    
    if (number < 0){
        return [];
    }
    
    if (number > array.length){
        return array;
    }
    
    return array.slice(array.length - number);
}

module.exports.last = last;
/**
 * indexOf: function takes in array and value, 
 * returns index of that value in the array,
 * returns -1 if the value is not included 
 * @param {Array} collection: takes in an array
 * @param {Any Value} value: takes in any data type
 * @returns {Array} collection: returns a mutated array
 */
_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: function takes in array and value, 
 * returns true if that array contains the value
 * returns false otherwise
 * @param {Array} collection: takes in an array
 * @param {Any Value} value: takes in any data type
 * @returns {Boolean} value: returns true/false 
 */
_.contains = function(array, value){
    
    var testOne = false;
    
    for (var i = 0; i < array.length; i++){
        
        if (array[i] === value){
            testOne = true;
        }
    }
    
    return value === undefined ? false : testOne;
}
module.exports.contains = contains;

/**
 * unique: function takes in array and returns a new array with duplicates removed
 * returns false otherwise
 * @param {Array} collection: takes in an array
 * @param {Array} collection: takes in an array
 * @returns {Array} collection: returns a mutated array
 */
_.unique = function(array){
    var arr = [];
    for (var i = 0; i < array.length; i++){
        
        if(_.indexOf(arr, array[i]) === -1){
            arr.push(array[i]);
        }
    }
    return arr;
}
module.exports.unique = unique;

/**
 * reject: function takes in array and passes through each element, index and the orginal array
 * returns a new array of elements of which calling the function returned false
 * @param {Array} collection: takes in an array
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Array} collection: Function returns an output array of all items passed funciton test
 */

_.reject = function(array, func){
    let arr = [];

    
    _.each(array, function(element, index, array){
        
        if (!func(element, index, array)){
            arr.push(element);
        }
    });

    return arr;
}
module.exports.reject = reject;

/**
 * partition: function takes in array and passes through each element, index and the orginal array
 * returns an array that is made up of 2 sub arrays:
 * 0) An array that contains the truthy values after passing through the function 
 * 1) An array that contains the falsy values after passing through the function
 * @param {Array} collection: takes in an array
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Array} collection: Function returns an output array with 2 sub arrays containing the truthy and falsy values
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
module.exports.partition = partition;

/**
 * map: Function takes in an array of value and a callback function. map iterates through every value,
 * passing each into a test function. Map saves the values into a new array 
 * @param {Array} collection: Function takes in array.
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Array} collection: Function returns an output array of all items passed funciton test
 * 
 * 
 */

_.map = function(collection, func){
    let mapVal = [];
    
    _.each(collection, function(value, key, collection){
        
        mapVal.push(func(value, key, collection));
    });
    return mapVal;
}

module.exports.map = map;

/**
 * pluck: Function takes in an array of values and a property
 * calls the map function and returns the object with the given property included
 * @param {Object} collection: Function takes in object.
 * @param {property} value: object property
 * @returns {Array} collection: Function returns an output array of all items passed funciton test
 * 
 */

_.pluck = function(arrObject, property) {
    
    return _.map(arrObject, function(arrElement) {
        
        return arrElement[property];
    });

}

module.exports.pluck = pluck;

/**
 * every: function takes in array or object and passes through each element, index and the entire collection through a given function
 * if all the values pass the test, return true. if even one returns false, returns false. If not function is provided, return true if every 
 * element if truthy otherwise return false. 
 * 
 * @param {Array} collection: takes in an array
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Boolean} valeu: returns true or false
 */

_.every = function(collection, func){
    
    if(func){
        
        for (let i = 0; i < collection.length; i++){
            if(!func(collection[i], i, collection)) {
                return false;
            }
        }
        
        if (!Array.isArray(collection)) {
            for (let key in collection) {
              if (!func(collection[key], key, collection)) {
                return false;
              }
            }
          }
        } 
        
        else {
        for (let i = 0; i < collection.length; i++){
            if(!collection[i]) {
                return false;
            }
        }
    }
    return true;
}

module.exports.every = every;

/**
 * some: function takes in array or object and passes through each element, index and the entire collection through a given function
 * if some of the values pass the test, return true. if even one returns false, returns false. If not function is provided, return true if some 
 * element if truthy otherwise return false. 
 * 
 * @param {Array} collection: takes in an array
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @returns {Boolean} valeu: returns true or false
 */

_.some = function(collection, func){
    
    
    if(func){
        
        for (let i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection)) {
                return true;
            }
        }
        
        if (!Array.isArray(collection)) {
            for (let key in collection) {
              if (func(collection[key], key, collection)) {
                return true;
              }
            }
          }
        } 
        
        else {
        for (let i = 0; i < collection.length; i++){
            if(collection[i]) {
                return true;
            }
        }
    }
    return false;
}

module.exports.some = some;

/**
 * reduce: function takes in an array, a test function and a seed start value. Reduce will call the function for every element, index and the orginal collection
 * and return a value based off the test. On the first iteration use seed as the previous result. If not seed is given, use the first element of the array
 * @param {Array} collection: takes in an array
 * @param {Function} test: Function takes in a function desinged to test each value in the array
 * @param {Seed Value} value: any simple data type
 * @returns {Any value} value: function returns the given seed value
 */
_.reduce = function (array, func, seed){
    let result;
    
    if(seed === undefined) {
        
        result = array[0];
        for (let i = 1; i < array.length; i++){
            
            result = func(result, array[i], i, array);
        }

    } else {
        result = seed;
        for( let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result; 
}

module.exports.result = result;

/**
 * extend: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Object} collection: The collection over which to iterate.
 * @param {...Object} collection: Unkown amount of objects to test
 * @returns {Object} collection: returns a mutated object collection
 */

_.extend = function(obj1, ...objs){
    for( let i = 0; i < objs.length; i++){
       
        let obj = objs[i];
        
        for(let key in obj){
            
            obj1[key] = obj[key];
        }
    }
    return obj1;
}

module.exports.extend = extend;
