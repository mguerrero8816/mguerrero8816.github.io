// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by over-population.
// Any HEADERDEAD cell with exactly three live neighbours becomes a live cell, as if by reproduction.

var HEADERBOARDWIDTH = 113;
var HEADERBOARDHEIGHT = 26;
var HEADERALIVE = 1;
var HEADERDEAD = 0;
var HEADERNORMALTIME = 300; //in milliseconds
var headerJsGameBoard = []
var headerGameStatus;

function headerCreateBoard(){
  var cellNumber = 0;
  for(var i = 0; i < HEADERBOARDHEIGHT; i++){
    $("#gameBoard").append('<tr id="hr' + i + '" ></tr>');
    var row = $("#hr"+i+"")
    for(var y = 0; y < HEADERBOARDWIDTH; y++){
      headerJsGameBoard[cellNumber] = HEADERDEAD;
      row.append('<td id="headerCell' + cellNumber + '" data-location="' + cellNumber + '"></td>');
      cellNumber++
    }
  }
}

function headerToggleCell(cell){
  var cellID = parseInt($(cell).attr("data-location"));
  if(headerJsGameBoard[cellID] === HEADERDEAD){
    headerJsGameBoard[cellID] = HEADERALIVE;
  }
  else{
    headerJsGameBoard[cellID] = HEADERDEAD;
  }
  headerUpdateHTML(headerJsGameBoard);
}

function makeHiImMike(board, location){
  newBoard = board;
  newLocation = location;
  //H
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+4] = HEADERALIVE;
  newBoard[newLocation+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+5] = HEADERALIVE;
  //I
  newLocation += 7;
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+2] = HEADERALIVE;
  newBoard[newLocation+3] = HEADERALIVE;
  newBoard[newLocation+4] = HEADERALIVE;
  newBoard[newLocation+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+5] = HEADERALIVE;
  //I
  newLocation += 9;
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+2] = HEADERALIVE;
  newBoard[newLocation+3] = HEADERALIVE;
  newBoard[newLocation+4] = HEADERALIVE;
  newBoard[newLocation+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+5] = HEADERALIVE;
  //'
  newLocation += 7
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  //M
  newLocation += 2
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+7] = HEADERALIVE;
  newBoard[newLocation+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+8] = HEADERALIVE;
  //M
  newLocation += 13
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+7] = HEADERALIVE;
  newBoard[newLocation+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+8] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+8] = HEADERALIVE;
  //I
  newLocation += 10;
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+2] = HEADERALIVE;
  newBoard[newLocation+3] = HEADERALIVE;
  newBoard[newLocation+4] = HEADERALIVE;
  newBoard[newLocation+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+5] = HEADERALIVE;
  //K
  newLocation += 7;
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+5] = HEADERALIVE;
  newBoard[newLocation+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+6] = HEADERALIVE;
  //E
  newLocation += 8;
  newBoard[newLocation] = HEADERALIVE;
  newBoard[newLocation+1] = HEADERALIVE;
  newBoard[newLocation+2] = HEADERALIVE;
  newBoard[newLocation+3] = HEADERALIVE;
  newBoard[newLocation+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*2+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*3+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*4+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*5+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*6+4] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+1] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+2] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+3] = HEADERALIVE;
  newBoard[newLocation+HEADERBOARDWIDTH*7+4] = HEADERALIVE;
  headerUpdateHTML(newBoard);
  return newBoard;
}

//determines if edge cases are true
function headerInRightColumn(location){
  return location%HEADERBOARDWIDTH === HEADERBOARDWIDTH - 1;
}

function headerInLeftColumn(location){
  return location%HEADERBOARDWIDTH === 0;
}

function headerInTopRow(location){
  return location < HEADERBOARDWIDTH;
}

function headerInBottomRow(location){
  return location >= (HEADERBOARDWIDTH)*(HEADERBOARDHEIGHT-1);
}

//Purpse: counts the number of living neighbors and returns that number
//Signature: Array, Integer -> Integer
function headerCountLiveNeighbors(board, location){
  var liveNeighbors = 0;
  //check above
  if(board[location - HEADERBOARDWIDTH] === HEADERALIVE && !headerInTopRow(location)){
    liveNeighbors++;
  }
  //check below
  if(board[location + HEADERBOARDWIDTH] === HEADERALIVE && !headerInBottomRow(location)){
    liveNeighbors++;
  }
  //check right
  if(board[location + 1] === HEADERALIVE && !headerInRightColumn(location)){
    liveNeighbors++;
  }
  //check left
  if(board[location - 1] === HEADERALIVE && !headerInLeftColumn(location)){
    liveNeighbors++;
  }
  //check aboveright
  if(board[location - HEADERBOARDWIDTH + 1] === HEADERALIVE && !headerInTopRow(location) && !headerInRightColumn(location)){
    liveNeighbors++;
  }
  //check aboveleft
  if(board[location - HEADERBOARDWIDTH - 1] === HEADERALIVE && !headerInTopRow(location) && !headerInLeftColumn(location)){
    liveNeighbors++;
  }
  //check belowright
  if(board[location + HEADERBOARDWIDTH + 1] === HEADERALIVE && !headerInBottomRow(location) && !headerInRightColumn(location)){
    liveNeighbors++;
  }
  //check belowleft
  if(board[location + HEADERBOARDWIDTH - 1] === HEADERALIVE && !headerInBottomRow(location) && !headerInLeftColumn(location)){
    liveNeighbors++;
  }
  return liveNeighbors;
}

function headerKillCell(board, location){
  if(headerCountLiveNeighbors(board, location) < 2){
    return HEADERDEAD;
  }
  if(headerCountLiveNeighbors(board, location) === 2 || headerCountLiveNeighbors(board, location) === 3){
    return HEADERALIVE;
  }
  if(headerCountLiveNeighbors(board, location) > 3){
    return HEADERDEAD;
  }
}

function headerReviveCell(board, location){
  if(board[location] === HEADERDEAD && headerCountLiveNeighbors(board, location) === 3){
    return HEADERALIVE;
  }
  return HEADERDEAD;
}

function headerNewCellCondition(board, location){
  if(board[location] === HEADERALIVE){
    return headerKillCell(board, location);
  }
  if(board[location] === HEADERDEAD){
    return headerReviveCell(board, location);
  }
}

function headerCycleBoard(board){
  updatedBoard = [];
  for(var i = 0; i < board.length; i++){
    updatedBoard[i] = headerNewCellCondition(board, i);
  }
  headerUpdateHTML(updatedBoard);
  return updatedBoard;
}

function headerStartGame(speed){
  headerStopGame();
  headerGameStatus = setInterval(function(){
    headerJsGameBoard = headerCycleBoard(headerJsGameBoard);
  }, speed);
}

function headerUpdateHTML(board){
  for(var i = 0; i < board.length; i++){
    if(board[i] === HEADERALIVE){
      $("#headerCell" + i).addClass("cellAlive");
    }
    else{
      $("#headerCell" + i).removeClass("cellAlive");
    }
  }
}

function headerStopGame(){
  clearInterval(headerGameStatus);
}

function headerClearBoard(board){
  var newBoard = [];
  for(var i = 0; i < board.length; i++){
    newBoard[i] = HEADERDEAD;
  }
  headerUpdateHTML(newBoard);
  return newBoard;
}

function headerRandomizeBoard(board){
  newBoard = []
  for(var i = 0; i < headerJsGameBoard.length; i++){
    var condition = Math.floor(Math.random()*2);
    newBoard[i] = condition;
  }
  headerUpdateHTML(newBoard);
  return newBoard;
}

$(document).ready(function(){
  // board has to exist for click listeners to register properly
  headerCreateBoard();

  $("#headerGameTable td").on("click", function(){
    headerToggleCell(this)
  });

  $("#headerNormalButton").on("click", function(){
    headerStartGame(HEADERNORMALTIME)});

  $("#headerStopButton").on("click", headerStopGame);

  $("#headerResetButton").on("click", function(){
    headerJsGameBoard = headerClearBoard(headerJsGameBoard);
    headerJsGameBoard = makeHiImMike(headerJsGameBoard, HEADERBOARDWIDTH*2+2);
  })

  $("#headerRandomizeButton").on("click", function(){
    headerJsGameBoard = headerRandomizeBoard(headerJsGameBoard);
  })

  $("#headerClearButton").on("click", function(){
    headerJsGameBoard = headerClearBoard(headerJsGameBoard);
  })

  headerJsGameBoard = makeHiImMike(headerJsGameBoard, HEADERBOARDWIDTH*2+2);

});
