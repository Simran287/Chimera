document.getElementById("count-el").innerText = 0
let count = 0;

function increment() {
    // console.log("Button was clicked");
    count = count + 1;
    // console.log(count);
    document.getElementById("count-el").innerText = count;
}
