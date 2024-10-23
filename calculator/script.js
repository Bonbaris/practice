let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

let result = document.getElementById('result');

let text = "Result: ";

add.addEventListener('click', () => {
    let a = num1.valueAsNumber;
    let b = num2.valueAsNumber;
    result.innerHTML = text + (a+b);
})
subtract.addEventListener('click', () => {
    let a = num1.valueAsNumber;
    let b = num2.valueAsNumber;
    result.innerHTML = text + (a-b);
})
multiply.addEventListener('click', () => {
    let a = num1.valueAsNumber;
    let b = num2.valueAsNumber;
    result.innerHTML = text + (a*b);
})
divide.addEventListener('click', () => {
    let a = num1.valueAsNumber;
    let b = num2.valueAsNumber;
    result.innerHTML = text + (a/b);
})