let filterInput = document.getElementById('filterInput');
let itemList = document.getElementById('itemList');
let items = itemList.getElementsByTagName('li');

function filterItems() {
    let filterValue = filterInput.value.toLowerCase();


    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(filterValue)) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

filterInput.addEventListener('input', filterItems);
