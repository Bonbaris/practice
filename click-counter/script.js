let clickCount = document.getElementById('clickCount');
let incrementButton = document.getElementById('incrementButton');
let resetButton = document.getElementById('resetButton');

let count = 0;
function counter(){
    count++;
    clickCount.innerHTML = 'Clicks: ' + count;
}

function reset(){
    count = 0;
    clickCount.innerHTML = 'Clicks: ' + count;
}

incrementButton.addEventListener('click', counter);
resetButton.addEventListener('click', reset);