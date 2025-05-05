// script.js

// Функция для загрузки HTML компонента (header, footer) в указанный элемент
async function loadComponent(elementSelector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) {
            element.innerHTML = html;
        } else {
            console.warn(`Element with selector "${elementSelector}" not found.`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Ждем, пока DOM полностью загрузится, прежде чем загружать компоненты
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header.html'); // Загружаем шапку в тег <header>
    loadComponent('footer', 'footer.html'); // Загружаем подвал в тег <footer>
});
