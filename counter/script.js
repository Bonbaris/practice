let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let counter = document.getElementById('counter');

let count = 0;

increase.addEventListener('click', () => {
    count++;

    counter.textContent = count;
});

decrease.addEventListener('click', () => {
    count--;

    counter.textContent = count;
});
