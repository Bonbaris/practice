let input = document.getElementById('todoInput');
let add = document.getElementById('addTask');
let list = document.getElementById('todoList');

function addTask () {
    let text = input.value.trim();
    if(text === '') return;

    const li = document.createElement('li');
    li.innerHTML = text;

    li.addEventListener('click', () => {
        list.removeChild(li);
    })

    list.appendChild(li);

    input.value = '';
}

add.addEventListener('click', addTask);