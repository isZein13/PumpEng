// script.js

// Функция для загрузки HTML компонента (header, footer) в указанный элемент
async function loadComponent(elementSelector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            if (response.status === 404) {
                 console.warn(`Component file not found: ${filePath}`);
                 return;
            }
            throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function initializeComponents() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}

// ======== Логика для кнопки "Наверх" ========
let scrollTopButton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

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

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
} else {
    document.addEventListener('DOMContentLoaded', () => {
         scrollTopButton = document.getElementById("scrollToTopBtn");
         if (scrollTopButton) {
              scrollTopButton.addEventListener('click', function() {
                window.scrollTo({top: 0, behavior: 'smooth'});
              });
         }
    });
}
// ======== Конец логики для кнопки "Наверх" ========


// ====================================================================== //
//   ФИНАЛЬНАЯ ВЕРСИЯ ЛОГИКИ АНИМАЦИИ (РАБОТАЕТ С ДИНАМИЧЕСКОЙ ЗАГРУЗКОЙ) //
// ====================================================================== //

// Эта функция будет искать элементы для анимации и запускать IntersectionObserver
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
    }, {
        threshold: 0.1
    });

    elementsToReveal.forEach(el => {
        observer.observe(el);
    });
}

// Этот observer следит за появлением контента в #main-content
// и запускает анимацию ТОЛЬКО ОДИН РАЗ, когда контент появился.
const mainContentContainer = document.getElementById('main-content');
if (mainContentContainer) {
    const contentObserver = new MutationObserver((mutationsList, observer) => {
        // Проверяем, появились ли дочерние элементы
        if (mainContentContainer.children.length > 0) {
            setupScrollAnimation(); // Запускаем нашу функцию анимации
            observer.disconnect(); // Отключаемся, чтобы не следить дальше
        }
    });

    // Начинаем следить за изменениями в #main-content
    contentObserver.observe(mainContentContainer, { childList: true });
}
