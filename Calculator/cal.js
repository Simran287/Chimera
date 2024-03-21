let result;
let sumEl = document.getElementById("sum-el")
let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")

function add() {
    result = num1 + num2
    sumEl.textContent = result;
}