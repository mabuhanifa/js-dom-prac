//dom elements
const expenses = document.getElementById("expenses");
const pExpenses = document.getElementById("pExpenses");
const totalBtn = document.getElementById("totalBtn");
const perPlayer = document.getElementById("budget");
const manager = document.getElementById("manager");
const coach = document.getElementById("coach");
let total = document.getElementById("total");
const playerList = document.getElementById("playerList");

//array of players
let selectedPlayer = [];
let playerExpenses;

//select button handler
function select(player) {
  if (selectedPlayer.includes(player)) {
    alert(player + " is already selected"); // error message
    return;
  }
  if (selectedPlayer.length < 5) {
    selectedPlayer.push(player);
  } else {
    alert("Can not select more than 5 player"); // error message
    return;
  }
  const dynamicBtn = document.getElementById(player);
  const li = document.createElement("li");
  const textNode = document.createTextNode(player);
  li.appendChild(textNode);
  playerList.appendChild(li);
  dynamicBtn.style.backgroundColor = "gray";
  dynamicBtn.disabled = true;
}

//calculate button handler
pExpenses.addEventListener("click", function pExpenses(event) {
  event.preventDefault();
  let budget = parseFloat(perPlayer.value);
  playerExpenses = budget * selectedPlayer.length;
  if (!perPlayer.value) {
    alert("Please enter a value"); // error message
    return;
  } else {
    if (selectedPlayer.length) {
      expenses.innerHTML = "$ " + budget * selectedPlayer.length;
    } else {
      alert("Please select some players");
    }
  }

  console.log(budget);
});

//calculate total button handler
totalBtn.addEventListener("click", function totalExpense(event) {
  event.preventDefault();
  let managerExpense = parseFloat(manager.value);
  let coachExpense = parseFloat(coach.value);
  let allExpense = managerExpense + coachExpense + playerExpenses;
  if (!manager.value || !coach.value) {
    alert("Please fill every input field with numbers"); // error message
    return;
  } else {
    if (playerExpenses) {
      total.innerHTML = "$ " + allExpense;
    } else {
      alert("Please calculate player expenses");
    }
  }
});
