let firstCard = 2;
let secondCard = 4;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;

let messageEl = document.getElementById("message-el")
// console.log(messageEl)
let sumEl = document.getElementById("save-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
if (sum < 21)
{
    message = "Do you want to draw a new card?";
} else if (sum === 21) 
{
    message = "You've got Blackjack!";
    hasBlackJack = true;
} else if (sum > 21)
{
    message = "You are out of the game.";
    isAlive = false;
}

console.log(hasBlackJack)
console.log(message)
}
