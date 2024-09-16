// function saveLead()
// {
//     console.log("Button clicked!")
//     window.alert("Button clicked!")
// }
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputValue = inputEl.value;


let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
    // console.log("Button clicked from Event Listner!")
    // alert("button clicked from event listener!");
    myLeads.push(inputValue)
    alert(myLeads)
});