let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
    // console.log("Button was clicked");
    count += 1;
    // console.log(count);
    countEl.textContent = count;
}

function save() {
    let entries = " " + count + " - ";
    saveEl.textContent += entries;
    count = 0;
    countEl.textContent = count;
}

// count = 0;

let welcomeEl = document.getElementById("welcome-el")
let username = "Sadie"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + username