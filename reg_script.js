// Получаем элементы формы
const registrationForm = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

// Обработчик для кнопки "войти"
submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    // Проверяем, что поля не пустые
    if (username === '' || password === '') {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    // Сохраняем данные пользователя в localStorage
    localStorage.setItem('username', username);

    // Перенаправляем на главную страницу
    window.location.href = 'index.html';
});