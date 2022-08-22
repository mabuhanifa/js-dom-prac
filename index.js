//dom elements
const expenses = document.getElementById("expenses");
const pExpenses = document.getElementById("pExpenses");
const totalBtn = document.getElementById("totalBtn");
const perPlayer = document.getElementById("budget");
const manager = document.getElementById("manager");
const coach = document.getElementById("coach");
let total = document.getElementById("total");
const playerList = document.getElementById("playerList");

let selectedPlayer = [];
let playerExpenses;
console.log(selectedPlayer);

function select(player) {
  if (selectedPlayer.includes(player)) {
    alert(player + " is already selected");
    return;
  }
  if (selectedPlayer.length < 5) {
    selectedPlayer.push(player);
  } else {
    alert("Can not select more than 5player");
    return;
  }
  const dynamicBtn = document.getElementById(player);
  const li = document.createElement("li");
  const textNode = document.createTextNode(player);
  li.appendChild(textNode);
  playerList.appendChild(li);
  dynamicBtn.style.backgroundColor = "gray";
}

pExpenses.addEventListener("click", function pExpenses(event) {
  event.preventDefault();
  let budget = parseFloat(perPlayer.value);
  playerExpenses = budget * selectedPlayer.length;
  expenses.innerHTML = "$ " + budget * selectedPlayer.length;
  console.log(budget);
});

totalBtn.addEventListener("click", function totalExpense(event) {
  event.preventDefault();
  let managerExpense = parseFloat(manager.value);
  let coachExpense = parseFloat(coach.value);
  let allExpense = managerExpense + coachExpense + playerExpenses;
  total.innerHTML = "$ " + allExpense;
});
