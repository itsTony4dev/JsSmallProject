userCounter = 0;
pcCounter = 0;

function yourTurn(id) {
  let move = ["Rock", "Paper", "Scissor"];

  let pcPick = move[Math.floor(Math.random() * 4)];
  let userPick = id;

  if (userPick === pcPick) {
    alert("tie");
  } else if (
    (userPick === "Rock" && pcPick === "Scissor") ||
    (userPick === "Paper" && pcPick === "Rock") ||
    (userPick === "Scissor" && pcPick === "Paper")
  ) {
    userCounter++;
  } else {
    pcCounter++;
  }

  document.getElementById("yourScore").innerText = userCounter;
  document.getElementById("computerScore").innerText = pcCounter;
}
