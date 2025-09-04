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


// ======== ИСПРАВЛЕННАЯ ЛОГИКА АНИМАЦИИ ========
function handleScrollAnimation() {
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
