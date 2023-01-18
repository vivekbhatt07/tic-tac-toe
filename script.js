const subBoxList = document.querySelectorAll(".sub-box");

var playerTwo;

subBoxList.forEach((subBox) => {
  subBox.addEventListener("click", (event) => {
    const subBoxSelect = event.target;
    changeTurn(subBoxSelect);
  });
});

// CHANGE TURNS FUNCTIONS :

function changeTurn(boxSelected) {
  if (playerTwo) {
    playerTwo = !playerTwo;
    boxSelected.classList.add("player-one");
    boxSelected.classList.remove("player-two");
  } else {
    playerTwo = !playerTwo;
    boxSelected.classList.add("player-two");
    boxSelected.classList.remove("player-one");
  }
}
