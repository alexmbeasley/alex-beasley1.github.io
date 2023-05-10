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
 * checks if it is greater than the given array length, otherwise returns first array element
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