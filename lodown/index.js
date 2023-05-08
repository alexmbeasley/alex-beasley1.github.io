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
 * identity: Function takes in an input value and rturns value unchanged
 * @param {Any value} value: Function takes in any data type
 * @returns {Any value} value: Function returns nput unchanged
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