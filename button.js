function showOptions(button) {
    // Размываем кнопку
    button.classList.add('blur');
    
    // Находим блок с кнопками
    const options = button.nextElementSibling;
    
    // Делаем блок видимым
    options.classList.add('visible');
    options.classList.remove('hidden');
    
    // Отключаем обработчик на самой кнопке, чтобы не сработал клик по ней повторно
    document.addEventListener('click', function(event) {
        // Проверяем, был ли клик вне текущей карточки или кнопок
        if (!button.contains(event.target) && !options.contains(event.target)) {
            button.classList.remove('blur');
            options.classList.remove('visible');
            options.classList.add('hidden');
        }
    });
}

document.getElementById('goToMap').addEventListener('click', function() {
    window.location.href = 'maps.html';
});