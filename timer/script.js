const timeInput = document.getElementById('timeInput');
const startTimer = document.getElementById('startTimer');
const timeDisplay = document.getElementById('timeDisplay');

let countDown;

function timer() {
    let time = parseInt(timeInput.value, 10);

    if(isNaN(time) || time <= 0){
        alert('Please Enter a valid number');
        return;
    }

    timeDisplay.innerHTML = time;

    clearInterval(countDown);

    countDown = setInterval(() => {
        time--;

        if(time <= 0){
            clearInterval(countDown);
            timeDisplay.innerHTML = 'TIME OVER!';
            return;
        }

        timeDisplay.innerHTML = time;
    }, 1000)
}

startTimer.addEventListener('click', timer);
// timer without (), because we must call him after click
// if we write timer() function will be called already after login on website