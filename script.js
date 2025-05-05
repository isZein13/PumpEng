// script.js

// Функция для загрузки HTML компонента (header, footer) в указанный элемент
async function loadComponent(elementSelector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            // Не выводим ошибку 404 в консоль, если файл просто не найден для специфичных страниц
            if (response.status === 404) {
                 console.warn(`Component file not found: ${filePath}`);
                 return; // Просто выходим, если файл не найден
            }
            throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) {
            element.innerHTML = html;
        } else {
            // Не выводим предупреждение, если селектор не найден (например, нет <header> на какой-то странице)
            // console.warn(`Element with selector "${elementSelector}" not found on this page.`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Функция, которая будет вызвана после загрузки DOM
function initializeComponents() {
    // Пытаемся загрузить header и footer. Если тегов нет на странице, ошибки не будет.
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
}

// Ждем, пока DOM полностью загрузится, прежде чем загружать компоненты
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    // DOM уже загружен
    initializeComponents();
}
