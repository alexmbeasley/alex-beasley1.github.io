/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a funct called search that takes an array param
//and a str param
//look through the animals array and return object if
//animals name from str exist
//return null if not

function search(animals, str){
    
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === str){
            return animals[i];
        }
    } return null;

}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a funct called replace that takes array of animals
//the name of animals and a replacement object


function replace(animals, name, replacement){
    //loop through the animals array and check if name exist
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            //if the name exist, replace that element with the given object
            animals[i] = replacement; 
        }
        //otherwise do nothing
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called remove that take a parm of array of animals
//and a name of an animal
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        //loop through the array and check if the name exist
        if (animals[i].name === name){
            //if the name exist, remove it
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a funct called add that takes an array of animals
//and a new animal object
function add(animals, animal){
    //check that the animal object has a name property
    //check that its length > 0
    if (animal.hasOwnProperty("name") === true && animal.name.length > 0){
        //check that the animal object has a species property
        //check that its length > 0
        if(animal.hasOwnProperty("species") === true && animal.species.length > 0){
            for (var i = 0; i < animals.length; i++){
            //has its own unique name, so if aniaml iteration name
            //exist withint the given animal object then end the funct
            if(animals[i].name === animal.name){
                return;
                }
            }
        //otherwise add the new object to the animals array
      return animals.push(animal); 
    }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
