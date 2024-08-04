const board__items = document.querySelectorAll(".game__board_item");
let turn = "Player 1";
let isGameOver = false;
const winningChances = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player_1 = [];
let player_2 = [];
//turn display
const turnDisplay = document.getElementById("turn-display");
turnDisplay.textContent = "Player 1's Turn";
board__items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent !== "") return;
    if (turn === "Player 1") {
      item.innerHTML = "X";
      turn = "Player 2";
      player_1.push(toNumber(item.id));
      turnDisplay.textContent = "Player 2's Turn";
      console.log(turnDisplay);
    } else {
      item.innerHTML = "O";
      turn = "Player 1";
      player_2.push(toNumber(item.id));
      turnDisplay.textContent = "Player 1's Turn";
    }
    if (player_1.length >= 3 || player_2 >= 3) {
      checkWinner();
    }
  });
});

// game__reset
const resetButton = document.querySelectorAll(".game__reset");

resetButton.forEach((button) => {
  button.addEventListener("click", () => {
    resetGame();
  });
});

// functions

function toNumber(str) {
  return Number.parseInt(str, 10);
}

function checkWinner() {
  for (const combination of winningChances) {
    const allElementsInPlayer1 = combination.every((cell) =>
      player_1.includes(cell)
    );
    const allElementsInPlayer2 = combination.every((cell) =>
      player_2.includes(cell)
    );

    if (allElementsInPlayer1) {
      isGameOver = true;
      alert("Player 1 is the winner");
      resetGame();
      return;
    } else if (allElementsInPlayer2) {
      isGameOver = true;
      alert("Player 2 is the winner");
      resetGame();
      return;
    }
  }
  if (!isGameOver && player_1.length + player_2.length === 9) {
    isGameOver = true;
    alert("It's a draw!");
    resetGame();
    return;
  }
}
function resetGame() {
  board__items.forEach((item) => (item.textContent = ""));
  turn = "Player 1";
  isGameOver = false;
  player_1 = [];
  player_2 = [];
}

function showPopup(message) {
  const popup = document.getElementById("myPopup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("myPopup");
  popup.style.display = "none";
}
