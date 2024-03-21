let result;
let num1 = 8;
let num2 = 12;
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    result = num1 + num2
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    result = num1 - num2
    sumEl.textContent = "Difference: " + result;
}

function multiply() {
    result = num1 * num2
    sumEl.textContent = "Product: " + result;
}

function divide() {
    result = num1/num2
    sumEl.textContent = "Quotient: " + result;
}