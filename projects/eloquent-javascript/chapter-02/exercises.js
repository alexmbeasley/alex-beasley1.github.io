
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//needs param
function triangles(size) {
  var line = "";
for(let i = 0; i < size; i++){
line += "#"
console.log(line);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
for (var i = start; i <= end; i++){
  var output = "";
  if(i % 3 == 0) output += 'fizz';
  if(i % 5 == 0) output += 'buzz';
  console.log(output || i);
}

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//needs param
function drawChessboard(size) {
  //create board str
  let board = "";
//loop through row
  for (let i = 0; i < size; i++) {
    //loop through column
    for (let j = 0; j < size; j++) {
      //check if you need a space or a #
      if ((i + j) % 2 === 0) {
        board += " ";
        //add #
      } else {
        board += "#";
      }
    }
    //add space
    board += "\n";
  }

  return console.log(board);
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
