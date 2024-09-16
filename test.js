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

// let points = 10;
// function add3Points() {
//     points += 3;
// }
// function removePoints() {
//     points -= 1;
// }
// console.log(points)
// add3Points()
// add3Points()
// removePoints()
// add3Points()
// removePoints()
// removePoints()
// console.log(points)

// let errorEl = document.getElementById("error-el");
// errorEl.innerText = "Something went wrong, please try again"


let age = 100

// if(age<=21)
// {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// if (age<100)
// {
//     console.log("You are not eligible yet.")
// } else if (age === 100)
// {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one.")
// }

let castle = {
    availability: true,
    location: "edinburgh",
    price: 800,
    tags: ['lake','kitchen','rooms']
}

// console.log(castle.availability);
// console.log(castle.price)

let person = {
    name: "Simran",
    age: 25,
    country: "India"
}

function logData() {
    message = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(message)
}
// logData();

// let discount;
// if (age < 6)
// {
//     discount = "free"
//     console.log(discount)
// }
// else if (age < 18)
//     {
//         discount = "child discount"
//         console.log(discount)
//     }
// else if (age < 27)
// {
//     discount = "student discount"
//     console.log(discount)
// }
// else if (age < 67)
//     {
//         discount = "full price"
//         console.log(discount)
//     } 
// else 
// {
//     discount = "senior citizen discount"
//     console.log(discount)
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++)
// {
//     console.log("- " + largeCountries[i])
// }

// let wrongLargeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// wrongLargeCountries.shift()
// wrongLargeCountries.unshift("China")
// wrongLargeCountries.pop()
// wrongLargeCountries.push("Pakistan")
// console.log(wrongLargeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"
// if (dayOfMonth === 13 && weekday === "Friday")
// {
//     console.log("Boo")
// }

// let hands = ["rock", "paper", "scissor"]
// let i = Math.floor((Math.random() * 3))
// // console.log(i)
// console.log(hands[i])