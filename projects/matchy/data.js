/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create empty object
var animal = {};
//using dot not give animal a propery named specis

animal.species = 'dog';

//using bracket give animal prop name
animal['name'] = 'Buffy';
// using either give animal property nosises
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Bark!';
noises.push('growl');
noises.unshift('yawn');
noises[noises.length] = 'sneeze';
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('fart');
console.log(animal);





/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

//push animal to animals
animals.push(animal);
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
   };

   animals.push(duck);
   console.log(animals);

var cat = {
  species: 'cat',
  name: 'Louie',
  noises: ['meow', 'purr']
};

animals.push(cat);

var cow = {
  species: 'cow',
  name: 'Pepper',
  noises: ['moo', 'snort']
};

animals.push(cow);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
//easier to access 

//function called get random takes aniamls array and returns a random
//index using
function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
}

//using a rando index from this created funciton

// get random animal
var rando = animals[getRandom(animals)];
var randoName = rando.name;
console.log(randoName);
//add its name to friends array
friends.push(randoName);

//log friends
console.log(friends);

//using bracket add the frineds list also named friends
//on one of the animals
animals[0].friends = friends;

console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}