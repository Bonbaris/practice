let numberInput = document.getElementById('numberInput');
let generateTable = document.getElementById('generateTable');
let tableDisplay = document.getElementById('tableDisplay');

function multiplication() {
    let number = numberInput.valueAsNumber;

    tableDisplay.innerHTML = '';

    for(let i = 1; i <= 10; i++){
        let a = number + ' x ' + i + ' = ' + (number*i);

        let row = document.createElement('p');

        row.textContent = a;
        tableDisplay.appendChild(row);
    }
};


generateTable.addEventListener('click', multiplication);
