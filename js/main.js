const board__items = document.querySelectorAll(".game__board_item");
let turn = "Player 1";
let isGameOver = false;

board__items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent !== "") return;
    if (turn === "Player 1") {
      item.innerHTML = "X";
      turn = "Player 2";
    } else {
      item.innerHTML = "O";
      turn = "Player 1";
    }
  });
});
