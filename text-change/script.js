let textDisplay = document.getElementById('textDisplay');
let changeText = document.getElementById('changeText');
let texts = ['Hello, World!', 'Hello, JavaScript!','Hello, Frontend!'];
let num = 0;
function change(){

    num = (num + 1) % texts.length;

    textDisplay.innerHTML = texts[num];
}

changeText.addEventListener('click', change);