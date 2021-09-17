//JS tic-tac-toe without factory functions/modules
let board;
let win;
let gameBoard = document.getElementById('gameboard'); 
let message = document.querySelector('h2');
const cell = Array.from(document.querySelectorAll('#gameboard div'));
const reset = document.getElementById('reset');
console.log(cell);
let turn = 'X';


function init(){
    board = ["", "", "", "", "", "", "", "", ""];
    renderGame();
}
init();

function renderGame(){
    board.forEach((mark, index) => {
        cell[index].textContent = mark;
        console.log(mark, index);
    })
}
renderGame();

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getWinner(){
    let winner = null;
    winningCombos.forEach((combo, index) => {
        if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
            winner = board[combo[0]];
        }
    })
    return winner ? winner : board.includes('') ? null : 'T';
}

function handleTurn(e){
    let idx = cell.findIndex(function(cell){
        console.log(e.target);
        return cell === e.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    renderGame();
    message.textContent = win === 'T' ? `It's a tie!` : win ? `${win} Wins the Game!` : `It's ${turn}'s turn`;
    
}

function resetGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    message.textContent = "Let the games begin! X starts it off"
    renderGame();
}

gameBoard.addEventListener('click', handleTurn);
reset.addEventListener('click', resetGame);


//Tic-tac-toe 2 players, X & 0. 8 different combinations of winning.
//Need to establish players the program can either start with a default player or allow the players to choose their mark.
//Need to keep track of the marks on the board. 
