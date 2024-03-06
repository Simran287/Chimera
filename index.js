let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    // console.log("Button was clicked");
    count += 1;
    // console.log(count);
    countEl.innerText = count;
}

function save() {
    console.log(count);
}

let welcomeEl = document.getElementById("welcome-el")
let username = "Sadie"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + username