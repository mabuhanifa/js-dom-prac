//dom elements
const expenses = document.getElementById("expenses");
const pExpenses = document.getElementById("pExpenses");
const totalExpense = document.getElementById("totalExpense");
const perPlayer = document.getElementById("budget");
const manager = document.getElementById("manager");
const coach = document.getElementById("coach");

let selectedPlayer = [];
let playerExpenses;
console.log(selectedPlayer);

function select(player) {
  selectedPlayer.push(player);
}

pExpenses.addEventListener("click", function pExpenses(event) {
  event.preventDefault();
  let budget = parseFloat(perPlayer.value);
  expenses.innerHTML = budget * selectedPlayer.length;
  console.log(budget);
});

totalExpense.addEventListener("click", function totalExpense(event) {
  event.preventDefault();
});
