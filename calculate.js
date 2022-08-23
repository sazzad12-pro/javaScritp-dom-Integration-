function playerExpensiveTotal() {
  const inputFiled = document.getElementById("player-filed");
  const inputString = inputFiled.value;
  const inputValue = parseFloat(inputString);
  const playerExpensive = document.getElementById("player-expensive");
  playerExpensive.innerText = inputValue * 5;
  return playerExpensive;
}

document.getElementById("calculate").addEventListener("click", function () {
  playerExpensiveTotal();
});

function managerCoachTotal() {
  const playerExpensive = document.getElementById("player-expensive");
  const playerExpensiveString = playerExpensive.innerText;
  const playerExpensiveValue = parseFloat(playerExpensiveString);
  const managerInput = document.getElementById("Manager-filed");
  const managerString = managerInput.value;
  const managerValue = parseFloat(managerString);
  const coachInput = document.getElementById("Coach-filed");
  const coachString = coachInput.value;
  const coachValue = parseFloat(coachString);
  const totalValue = playerExpensiveValue + managerValue + coachValue;
  console.log(totalValue);
  return totalValue;
}

function setTotal(inputId, total) {
  const totalExpensive = document.getElementById(inputId);
  totalExpensive.innerText = total;
}

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerCoachCost = managerCoachTotal();
    setTotal("total-expensive", managerCoachCost);
  });
