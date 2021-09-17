//Store a gameboard as an array inside of a gameboard object
const Gameboard = (() => {
  //Initializes the board and the fields to be kept track of.
  let   board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  let turn = 'X';
  
  //Array.from makes an array of all elements from querySelectorAll
  const cell = Array.from(document.querySelectorAll('#gameboard div'));
  const message = document.querySelector('h2');
  return {
    playGame: {
      //Took out init function and handleTurn function
      render(){
        //Takes a mark param and index(of the cell in the board array)
        board.forEach(function(mark, index) {
          //Assigns the cells text content to be the mark that corresponds with the array index
          cell[index].textContent = mark;
          console.log(mark, index);
        }); 
      },
    },
    board,
    turn,
    message,
    cell
  }
})();

const playGame = (() => {
  const {playGame} = Gameboard;
  const {cell} = Gameboard;
  let {board} = Gameboard;
  let {turn} = Gameboard;
  let {message} = Gameboard;
  let win;
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  playGame.render();
  const getWinner = () => {
    let winner = null;
    winningCombos.forEach(function(combo, index){
      if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
        winner = board[combo[0]];
      }
      
    });
    return winner ? winner : board.includes('') ? null : 'T';
  }
  const handleTurn = (e) => {
    let idx = cell.findIndex(function(cell){
      console.log(e.target);
      return cell === e.target
    });
    board[idx] = turn;
    turn = turn === 'X' ? '0' : 'X';
    win = getWinner();
    playGame.render();
    message.textContent = win === 'T' ? `It's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    console.log(board, idx, turn); 
  };
  let gameBoard = document.getElementById('gameboard');
  gameBoard.addEventListener('click', handleTurn);
  function reset(){
    board = ["", "", "", "", "", "", "", "", ""];
    playGame.render();
  }
  let resetGame = document.getElementById('reset');
  resetGame.addEventListener('click', reset);
  
})();

//Create an object to control the flow of the game

//Main goal is to have as little global code as possible
//Try using a module or factory
////If you only need one of something - use a module
////For multiples of something - use factory function
/*Start by creating a function that will render the gameboard array to the webpage
 start with a manual array with x's and o's*/
 /*Functions: 
    Allow players to make a mark on a specific spot on the board
    players click on a square to place their mark - Remember to check if a mark already exists 
    
    Check when game is over - 3 in a row and no winner

    Allow players to put in their names - include a button to start/restart the game and add a display winner

    Optional - Create a computer player
  */

