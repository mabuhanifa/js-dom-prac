//dom elements
const expenses = document.getElementById("expenses");
const pExpenses = document.getElementById("pExpenses");
const totalExpenses = document.getElementById("totalExpenses");

let selectedPlayer = [];
let playerExpenses;
console.log(selectedPlayer);

function select(player) {
  selectedPlayer.push(player);
  expenses.innerHTML = `${selectedPlayer.length * 10}`;
}

function pExpenses(event) {
  event.preventDefault();
}

function totalExpense(event) {
  event.preventDefault();
}
