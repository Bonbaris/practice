let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let reset = document.getElementById('reset');


red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});
blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});
reset.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
});