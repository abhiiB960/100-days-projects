const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
const winnermsg = document.querySelector('.winner-msg');
const winCont = document.querySelector('.win-container');

let turnO = true;

let winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const showWinner = (win) => {
  winnermsg.innerText = `${win} is winner`;
  winCont.classList.toggle('hide');
  disableInput();
};
const disableInput = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableInput = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

let checkWinner = () => {
  for (winning of winningCombinations) {
    let val1 = boxes[winning[0]].innerText;
    let val2 = boxes[winning[1]].innerText;
    let val3 = boxes[winning[2]].innerText;
    if (val1 != '' && val2 != '' && val3 != '') {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  boxes.innerText = '';
  enableInput();
  winCont.classList.add('hide');
};

reset.addEventListener('click', resetGame);
