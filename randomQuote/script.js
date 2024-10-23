const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "Don't watch the clock; do what it does. Keep going."
];

let showQuote = document.getElementById('showQuote');
let quoteDisplay = document.getElementById('quoteDisplay');

showQuote.addEventListener('click', ()=>{
    let random = Math.random();
    let num = Math.floor(random * 5);
    quoteDisplay.innerHTML = quotes[num];
})