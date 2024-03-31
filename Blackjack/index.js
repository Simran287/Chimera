let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message;

let messageEl = document.getElementById("message-el")
// console.log(messageEl)
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector('#sum-el')

function getRandomCard() {
    let resultCard;
    let cardRandom = (Math.floor(Math.random() * 13) + 1)
    if (cardRandom === 1)
    {
        resultCard = 11;
    } else if ((cardRandom === 11) || (cardRandom === 12) || (cardRandom === 13))
    {
        resultCard = 10;
    } else {
        resultCard = cardRandom
    }
    return resultCard;
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1];
    sumEl.textContent = "Sum: " + sum
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let count = 0; count<(cards.length); count++)
    {
        cardsEl.textContent += cards[count] + " "
    }

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

    messageEl.textContent = message;
}


function newCard() {
    // if (sum === 0)
    // {
    //     startGame();
    // }
    if (isAlive === true && hasBlackJack === false && sum != 0)
    {
        let nextCard = getRandomCard();
        cards.push(nextCard);
        sum += nextCard;
        renderGame();
    }
}