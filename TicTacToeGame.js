let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let NewBtn = document.querySelector("#NewBtn");
let newGame = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [9,10,11]
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  newGame.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "Green";
      turnO = false;
      NewBtn.style.color = "aquamarin";
    } else {
      box.innerText = "X";
      box.style.color = "aqua";
      turnO = true;
      NewBtn.style.color = "Orange";
    }
    box.disabled = true;
    checkWinner();
  });
});

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const disBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  newGame.classList.remove("hide");
  disBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      return;
    }
  }
};

NewBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
