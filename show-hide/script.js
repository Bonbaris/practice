const cardTitle = document.getElementById('cardTitle');
const cardContent = document.getElementById('cardContent');

function toggleContent() {
    // Проверяем, скрыт ли контент
    if (cardContent.classList.contains('hidden')) {
        cardContent.classList.remove('hidden');
    } else {
        cardContent.classList.add('hidden');
    }
}

cardTitle.addEventListener('click', toggleContent);
