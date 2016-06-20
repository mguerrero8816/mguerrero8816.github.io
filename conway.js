// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by over-population.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

var BOARDWIDTH = 113;
var BOARDHEIGHT = 26;
var ALIVE = 1;
var DEAD = 0;
var NORMALTIME = 300; //in milliseconds
var FASTTIME = 100; //in milliseconds
var ULTRATIME = 10; //in milliseconds
var cellCreator = "single"; //can be "single", "upLeftGlider", "upRightGlider", "downLeftGlider", "downRightGlider"
var lastCell;
var jsGameBoard = []
var gameStatus;
var turnCounter = 0;

function createBoard(){
  var cellNumber = 0;
  for(var i = 0; i < BOARDHEIGHT; i++){
    $("#gameBoard").append('<tr id="r' + i + '" ></tr>');
    var row = $("#r"+i+"")
    for(var y = 0; y < BOARDWIDTH; y++){
      jsGameBoard[cellNumber] = DEAD;
      row.append('<td id="' + cellNumber + '"></td>');
      cellNumber++
    }
  }
  return cellNumber
}

function createCellSelector(cell){
  if(cellCreator === "single"){
    clickToToggleCell(cell)
  }
  if(cellCreator === "upLeftGlider"){
    makeUpLeftGlider(cell)
  }
  if(cellCreator === "upRightGlider"){
    makeUpRightGlider(cell)
  }
  if(cellCreator === "downLeftGlider"){
    makeDownLeftGlider(cell)
  }
  if(cellCreator === "downRightGlider"){
    makeDownRightGlider(cell)
  }
}

function clickToToggleCell(cell){
  var cellID = parseInt($(cell).attr("id"));
  if(jsGameBoard[cellID] === DEAD){
    jsGameBoard[cellID] = ALIVE;
  }
  else{
    jsGameBoard[cellID] = DEAD;
  }
  updateHTML(jsGameBoard);
}

function makeName(cell){

}

function makeUpLeftGlider(cell){
  var cellID = parseInt($(cell).attr("id"));
  jsGameBoard[cellID-1] = ALIVE;
  jsGameBoard[cellID+1] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH-1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH-1] = ALIVE;
  updateHTML(jsGameBoard);
}

function makeUpRightGlider(cell){
  var cellID = parseInt($(cell).attr("id"));
  jsGameBoard[cellID-1] = ALIVE;
  jsGameBoard[cellID+1] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH+1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH+1] = ALIVE;
  updateHTML(jsGameBoard);
}

function makeDownLeftGlider(cell){
  var cellID = parseInt($(cell).attr("id"));
  jsGameBoard[cellID-1] = ALIVE;
  jsGameBoard[cellID+1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH-1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH-1] = ALIVE;
  updateHTML(jsGameBoard);
}

function makeDownRightGlider(cell){
  var cellID = parseInt($(cell).attr("id"));
  jsGameBoard[cellID-1] = ALIVE;
  jsGameBoard[cellID+1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH] = ALIVE;
  jsGameBoard[cellID-BOARDWIDTH+1] = ALIVE;
  jsGameBoard[cellID+BOARDWIDTH+1] = ALIVE;
  updateHTML(jsGameBoard);
}

function makeBlinker(board, location){
  newBoard = board;
  newBoard[location] = ALIVE;
  newBoard[location+1] = ALIVE;
  newBoard[location+2] = ALIVE;
  updateHTML(newBoard);
  return newBoard;
}

function makeJollyRoger(board, location){
  newBoard = board;
  newBoard[location] = ALIVE;
  newBoard[location+1] = ALIVE;
  newBoard[location+2] = ALIVE;
  newBoard[location+6] = ALIVE;
  newBoard[location+7] = ALIVE;
  newBoard[location+8] = ALIVE;
  newBoard[location - BOARDWIDTH - 2] = ALIVE;
  newBoard[location - BOARDWIDTH + 3] = ALIVE;
  newBoard[location - BOARDWIDTH + 5] = ALIVE;
  newBoard[location - BOARDWIDTH + 10] = ALIVE;
  newBoard[location - BOARDWIDTH*2 - 2] = ALIVE;
  newBoard[location - BOARDWIDTH*2 + 3] = ALIVE;
  newBoard[location - BOARDWIDTH*2 + 5] = ALIVE;
  newBoard[location - BOARDWIDTH*2 + 10] = ALIVE;
  newBoard[location - BOARDWIDTH*3 - 2] = ALIVE;
  newBoard[location - BOARDWIDTH*3 + 3] = ALIVE;
  newBoard[location - BOARDWIDTH*3 + 5] = ALIVE;
  newBoard[location - BOARDWIDTH*3 + 10] = ALIVE;
  newBoard[location - BOARDWIDTH*5] = ALIVE;
  newBoard[location+1 - BOARDWIDTH*5] = ALIVE;
  newBoard[location+2 - BOARDWIDTH*5] = ALIVE;
  newBoard[location+6 - BOARDWIDTH*5] = ALIVE;
  newBoard[location+7 - BOARDWIDTH*5] = ALIVE;
  newBoard[location+8 - BOARDWIDTH*5] = ALIVE;
  updateHTML(newBoard);
  return newBoard;
}

function makeClick(board, location){
  newBoard=board;
  newLocation=location;
  //C
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+2] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  //l
  newLocation+=5;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  //i
  newLocation+=2;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  //c
  newLocation+=2;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  //k
  newLocation+=3;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  updateHTML(newBoard);
  return newBoard;
}

function makeHiImMike(board, location){
  newBoard = board;
  newLocation = location;
  //H
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+4] = ALIVE;
  newBoard[newLocation+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+5] = ALIVE;
  //I
  newLocation += 7;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+2] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+4] = ALIVE;
  newBoard[newLocation+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+5] = ALIVE;
  //I
  newLocation += 9;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+2] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+4] = ALIVE;
  newBoard[newLocation+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+5] = ALIVE;
  //'
  newLocation += 7
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  //M
  newLocation += 2
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+7] = ALIVE;
  newBoard[newLocation+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+8] = ALIVE;
  //M
  newLocation += 13
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+7] = ALIVE;
  newBoard[newLocation+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+8] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+8] = ALIVE;
  //I
  newLocation += 10;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+2] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+4] = ALIVE;
  newBoard[newLocation+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+5] = ALIVE;
  //K
  newLocation += 7;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+5] = ALIVE;
  newBoard[newLocation+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+6] = ALIVE;
  //E
  newLocation += 8;
  newBoard[newLocation] = ALIVE;
  newBoard[newLocation+1] = ALIVE;
  newBoard[newLocation+2] = ALIVE;
  newBoard[newLocation+3] = ALIVE;
  newBoard[newLocation+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*2+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*3+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*4+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*5+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*6+4] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+1] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+2] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+3] = ALIVE;
  newBoard[newLocation+BOARDWIDTH*7+4] = ALIVE;


  updateHTML(newBoard);
  return newBoard;
}

//determines if edge cases are true
function isInRightColumn(location){
  return location%BOARDWIDTH === BOARDWIDTH - 1;
}

function isInLeftColumn(location){
  return location%BOARDWIDTH === 0;
}

function isInTopRow(location){
  return location < BOARDWIDTH;
}

function isInBottomRow(location){
  return location >= (BOARDWIDTH)*(BOARDHEIGHT-1);
}

//Purpse: counts the number of living neighbors and returns that number
//Signature: Array, Integer -> Integer
function countLiveNeighbors(board, location){
  var liveNeighbors = 0;
  //check above
  if(board[location - BOARDWIDTH] === ALIVE && !isInTopRow(location)){
    liveNeighbors++;
  }
  //check below
  if(board[location + BOARDWIDTH] === ALIVE && !isInBottomRow(location)){
    liveNeighbors++;
  }
  //check right
  if(board[location + 1] === ALIVE && !isInRightColumn(location)){
    liveNeighbors++;
  }
  //check left
  if(board[location - 1] === ALIVE && !isInLeftColumn(location)){
    liveNeighbors++;
  }
  //check aboveright
  if(board[location - BOARDWIDTH + 1] === ALIVE && !isInTopRow(location) && !isInRightColumn(location)){
    liveNeighbors++;
  }
  //check aboveleft
  if(board[location - BOARDWIDTH - 1] === ALIVE && !isInTopRow(location) && !isInLeftColumn(location)){
    liveNeighbors++;
  }
  //check belowright
  if(board[location + BOARDWIDTH + 1] === ALIVE && !isInBottomRow(location) && !isInRightColumn(location)){
    liveNeighbors++;
  }
  //check belowleft
  if(board[location + BOARDWIDTH - 1] === ALIVE && !isInBottomRow(location) && !isInLeftColumn(location)){
    liveNeighbors++;
  }
  return liveNeighbors;
}

function killCell(board, location){
  if(countLiveNeighbors(board, location) < 2){
    return DEAD;
  }
  if(countLiveNeighbors(board, location) === 2 || countLiveNeighbors(board, location) === 3){
    return ALIVE;
  }
  if(countLiveNeighbors(board, location) > 3){
    return DEAD;
  }
}

function reviveCell(board, location){
  if(board[location] === DEAD && countLiveNeighbors(board, location) === 3){
    return ALIVE;
  }
  return DEAD;
}

function newCellCondition(board, location){
  if(board[location] === ALIVE){
    return killCell(board, location);
  }
  if(board[location] === DEAD){
    return reviveCell(board, location);
  }
}

function cycleBoard(board){
  updatedBoard = [];
  for(var i = 0; i < board.length; i++){
    updatedBoard[i] = newCellCondition(board, i);
  }
  updateHTML(updatedBoard);
  turnCounter++
  $("#turnCounter").text(turnCounter);
  return updatedBoard;
}

function startGame(speed){
  stopGame();
  gameStatus = setInterval(function(){
    jsGameBoard = cycleBoard(jsGameBoard);
  }, speed);
}

function updateHTML(board){
  for(var i = 0; i < board.length; i++){
    if(board[i] === ALIVE){
      $("#" + i).addClass("cellAlive");
    }
    else{
      $("#" + i).removeClass("cellAlive");
    }
  }
}

function stopGame(){
  clearInterval(gameStatus);
}

function clearBoard(board){
  var newBoard = [];
  for(var i = 0; i < board.length; i++){
    newBoard[i] = DEAD;
  }
  updateHTML(newBoard);
  return newBoard;
}

function randomizeBoard(board){
  newBoard = []
  for(var i = 0; i < lastCell; i++){
    var condition = Math.floor(Math.random()*2);
    newBoard[i] = condition;
  }
  updateHTML(newBoard);
  return newBoard;
}

$(document).ready(function(){
  lastCell = createBoard();

  $("td").on("click", function(){
    createCellSelector(this)
  });

  $("#stopButton").on("click", stopGame);

  $("#cycleButton").on("click", function(){
    jsGameBoard = cycleBoard(jsGameBoard)});

  $("#normalButton").on("click", function(){
    startGame(NORMALTIME)});

  $("#fastButton").on("click", function(){
    startGame(FASTTIME)});

  $("#ultraButton").on("click", function(){
    startGame(ULTRATIME)});

  $("#randomizeButton").on("click", function(){
    jsGameBoard = randomizeBoard(jsGameBoard);
  })

  $("#clearButton").on("click", function(){
    jsGameBoard = clearBoard(jsGameBoard);
  })

  $("#resetCounterButton").on("click", function(){
    turnCounter = 0;
    $("#turnCounter").text(turnCounter);
  })

  $("#singleButton").on("click", function(){
    cellCreator = "single"
  })

  $("#gliderUpLeftButton").on("click", function(){
    cellCreator = "upLeftGlider"
  })

  $("#gliderUpRightButton").on("click", function(){
    cellCreator = "upRightGlider"
  })

  $("#gliderDownLeftButton").on("click", function(){
    cellCreator = "downLeftGlider"
  })

  $("#gliderDownRightButton").on("click", function(){
    cellCreator = "downRightGlider"
  })

  jsGameBoard = makeHiImMike(jsGameBoard, BOARDWIDTH*2+2);
  jsGameBoard = makeClick(jsGameBoard, BOARDWIDTH*20+2);
  // jsGameBoard = randomizeBoard(jsGameBoard);
  //startGame(NORMALTIME);

  // jsGameBoard = makeGlider(jsGameBoard, BOARDWIDTH+8)
  // jsGameBoard = makeBlinker(jsGameBoard, BOARDWIDTH+2);
  // jsGameBoard = makeJollyRoger(jsGameBoard, 10+(BOARDHEIGHT-1)*BOARDWIDTH);

});
