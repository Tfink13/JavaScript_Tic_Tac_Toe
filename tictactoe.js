



// I need to figure out how the computer knows whos turn is it[x]
// Determine that x is the start character[x]
// cant be clicked twice[x]
// make a loop to check for the winner[x]
// reset game once there is a winner


// Creating a function to replace the setMessage function to a different string
const setMessage = (msg) => {
  document.getElementById('message').innerText = msg;
};



// im putting turn in the global scope for my
// start game function to reference that value
let turn;
// making a function to determine whos first (x)
const startGame = () => {
// defining the first play 1st move as x
  turn = 'X';
// created a message so that the player know x goes first
  setMessage(turn + " get's to start")
};


// function to switch turns between x and o
const switchTurn = () => { // created a function called switchTurn, to switch between x and o
  if (checkForWinner(turn)) { // I added this after i creadted the checkForWinner whoever the winner is after the check for winner it prints out a message
    setMessage("Congrats " + prompt("What's your name player?") + ", you are the champ!!");
    document.winner = turn;
  }else if(turn == "X") {
    turn = "O";
      setMessage("It's " + turn + "'s turn");
  } else {
    turn = "X";
      setMessage("It's " + turn + "'s turn");
  }
};


// made a function so that the game knows when x has gone
// and doesnt allow you to click on it again also knowing if a box was already
// clicked on to print out an error message
const nextMove = (square) => {
  if (document.winner != null) {
    setMessage(turn + " already won.")
  }
// if the rendered text content is equal to an empty space, then
// it would then set square.innerText is asigned the original value
// in this case its X
  else if (square.innerText == '') {
    square.innerText = turn;
    switchTurn(); // running the switch turn function if the empty space was filled witha value
  } else {
    setMessage('Pick another square')
  }
};


// all this is going to do is return the value of an element,
// to check whether its an x or o and then im going to pass this function into
// another function so i can check rows
const getBox = (number) => {
  return document.getElementById("s" + number).innerText;
};


// checking rows, in order to do that we have to
// be able to get whats in the square we can call getBox to compare
// we want this set up as a boollean so we can compare our check row with our getBox function
const checkRow = (a, b, c, move) => {
// I am setting false just to assume the conditions arent true
  let result = false;
// calling the getBox function to compare the values in the square
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
};


// checking for winner
// function to check for the winner
const checkForWinner = (move) => {

  let result = false;
// passing in the the checkRow function and putting winning combination
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
    // if the patterns above happpen its true, because these
        result = true;
        console.log(result)
      }
      return result;
};
console.log(checkForWinner);

const clearBox = () => {
  console.log('in here');
  let cells = document.querySelectorAll("td");

  
  for (let cell of cells) {
    cell.innerHTML = "";
  }
};

const clearBoard = () => {
  if (checkForWinner() == true) {
    clearBox();
  }
};
