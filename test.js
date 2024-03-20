// let username = "Carter"
// let message = "You have three new notifications"
// console.log(message + ", " + username);
// let messageToUser = message + ", " + username
// console.log(messageToUser)

// let myName = "Sadie"
// let greeting = "Hi, my name is "
// function greetName() {
//     let myGreeting = greeting + myName
//     console.log(myGreeting)
// }
// greetName()

// let firstname = "Annabeth"
// let lastname = "Chase"
// let fullname = firstname + " " + lastname
// console.log(fullname)

let points = 10;
function add3Points() {
    points += 3;
}
function removePoints() {
    points -= 1;
}
console.log(points)
add3Points()
add3Points()
removePoints()
add3Points()
removePoints()
removePoints()
console.log(points)

let errorEl = document.getElementById("error-el");
errorEl.innerText = "Something went wrong, please try again"