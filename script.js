// script.js

// === БЛОК 1: ЗАГРУЗКА КОМПОНЕНТОВ (HEADER, FOOTER) ===
async function loadComponent(elementSelector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            if (response.status === 404) return;
            throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) element.innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function initializeComponents() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
}

// === БЛОК 2: ЛОГИКА КНОПКИ "НАВЕРХ" ===
let scrollTopButton = document.getElementById("scrollToTopBtn");

function scrollFunction() {
    scrollTopButton = document.getElementById("scrollToTopBtn");
    if (scrollTopButton) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }
}

function setupScrollToTop() {
    scrollTopButton = document.getElementById("scrollToTopBtn");
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.onscroll = scrollFunction;
    }
}

// === БЛОК 3: НОВЫЕ ИНТЕРАКТИВНЫЕ ФУНКЦИИ ===

// Функция для эффекта "печатающейся машинки"
function startTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;

    const words = ['карьеры', 'путешествий', 'общения'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentWord = '';
    let currentText = '';

    function type() {
        currentWord = words[wordIndex];
        if (isDeleting) {
            currentText = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentText = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.textContent = currentText;

        let typeSpeed = 150;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000; // Пауза в конце слова
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Пауза перед началом нового слова
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

// Функция для анимации счетчика
function startCounterAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const goal = +counter.getAttribute('data-goal');
                let current = 0;
                const increment = Math.ceil(goal / 100); // Скорость анимации

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= goal) {
                        clearInterval(timer);
                        counter.textContent = goal;
                    } else {
                        counter.textContent = current;
                    }
                }, 20); // Интервал обновления
            });
            observer.unobserve(entry.target); // Запускаем один раз
        }
    });
}

// Функция для анимации появления блоков при скролле
function setupScrollAnimation() {
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    if (!elementsToReveal.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || '0s';
                entry.target.style.animation = `fadeInUp 0.8s ease-out forwards ${delay}`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToReveal.forEach(el => observer.observe(el));
}

// === БЛОК 4: ИНИЦИАЛИЗАЦИЯ ВСЕХ ФУНКЦИЙ ===

// Функция, которая запускает все скрипты для основной страницы
function initializeMainPageScripts() {
    startTypingEffect();
    setupScrollAnimation();
    
    // Настраиваем IntersectionObserver для счетчика
    const statsSection = document.querySelector('#stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(startCounterAnimation, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
}

// Главная логика загрузки
document.addEventListener('DOMContentLoaded', () => {
    initializeComponents();
    setupScrollToTop();

    // Следим за загрузкой контента в #main-content
    const mainContentContainer = document.getElementById('main-content');
    if (mainContentContainer) {
        const contentObserver = new MutationObserver((mutationsList, observer) => {
            if (mainContentContainer.children.length > 0) {
                initializeMainPageScripts(); // Запускаем все скрипты для страницы
                observer.disconnect(); // Отключаемся, чтобы не следить дальше
            }
        });
        contentObserver.observe(mainContentContainer, { childList: true });
    }
});
